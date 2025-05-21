import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { apiPost } from '../../api/axios';
import {
    Container, Typography, Box, Button, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle, Paper, Grid, Chip, Radio, RadioGroup,
    FormControlLabel, FormControl
} from '@mui/material';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/Footer/footer';

function TestPage2() {
    const location = useLocation();
    const { activeBook, syllabusTitle } = location.state || {};
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [markedForReview, setMarkedForReview] = useState({});
    const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds
    const [openSubmitDialog, setOpenSubmitDialog] = useState(false);

    // Fetch questions
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const req = { syllabus: syllabusTitle, book: activeBook };
                const response = await apiPost('/randomQuestions', req);
                setQuestions(response.data.data || []);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, [activeBook, syllabusTitle]);

    // Timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format time
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Handle option selection
    const handleOptionSelect = (questionId, optionId) => {
        setSelectedOptions((prev) => ({ ...prev, [questionId]: optionId }));
    };

    // Handle mark for review
    const handleMarkForReview = (questionId) => {
        setMarkedForReview((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
    };

    // Handle navigation
    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Handle reset
    const handleReset = () => {
        setSelectedOptions({});
        setMarkedForReview({});
        setCurrentQuestionIndex(0);
    };

    // Handle submit
    const handleSubmit = useCallback(() => {
        setOpenSubmitDialog(true);
    }, []);

    // Confirm submission
    const confirmSubmit = async () => {
        try {
            // Replace with actual submission logic
            console.log('Submitting quiz:', { selectedOptions, markedForReview });
            setOpenSubmitDialog(false);
            // Navigate or show results as needed
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }
    };

    // Get chip color based on question status
    const getChipColor = (index, questionId) => {
        if (index === currentQuestionIndex) return 'primary';
        if (markedForReview[questionId]) return 'warning';
        if (selectedOptions[questionId]) return 'success';
        return 'default';
    };

    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    {syllabusTitle} - {activeBook}
                </Typography>

                {/* Question Number Chips */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 4 }}>
                    {questions.map((question, index) => (
                        <Chip
                            key={question._id}
                            label={index + 1}
                            color={getChipColor(index, question._id)}
                            onClick={() => setCurrentQuestionIndex(index)}
                            sx={{ cursor: 'pointer', minWidth: 40 }}
                        />
                    ))}
                </Box>

                {/* Timer */}
                <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
                    Time Left: {formatTime(timeLeft)}
                </Typography>

                {/* Current Question */}
                {questions.length > 0 && (
                    <Paper elevation={3} sx={{ p: 3, mb: 4, border: '1px solid', borderColor: 'grey.300' }}>
                        <Typography variant="h6" gutterBottom>
                            Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex]?.question}
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                value={selectedOptions[questions[currentQuestionIndex]._id] || ''}
                                onChange={(e) => handleOptionSelect(questions[currentQuestionIndex]._id, parseInt(e.target.value))}
                            >
                                <Grid container spacing={2}>
                                    {questions[currentQuestionIndex]?.options?.map((option) => (
                                        <Grid item xs={12} key={option._id}>
                                            <FormControlLabel
                                                value={option.id}
                                                control={<Radio />}
                                                label={option.text}
                                                sx={{ '& .MuiFormControlLabel-label': { width: '100%' } }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                )}

                {/* Navigation Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => handleMarkForReview(questions[currentQuestionIndex]?._id)}
                        color={markedForReview[questions[currentQuestionIndex]?._id] ? 'warning' : 'primary'}
                    >
                        {markedForReview[questions[currentQuestionIndex]?._id]
                            ? 'Unmark Review'
                            : 'Mark for Review'}
                    </Button>
                    <Button variant="outlined" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleNext}
                        disabled={currentQuestionIndex === questions.length - 1}
                    >
                        Next
                    </Button>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Container>

            {/* Submit Confirmation Dialog */}
            <Dialog open={openSubmitDialog} onClose={() => setOpenSubmitDialog(false)}>
                <DialogTitle>Confirm Submission</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit the test?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenSubmitDialog(false)}>Cancel</Button>
                    <Button onClick={confirmSubmit} variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            <FooterSection />
        </>
    );
}

export default TestPage2;