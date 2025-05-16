const express = require('express')
const {addSyllabus, getSyllabus, addChapters, getChapters, addBooks, getBooks} = require('../controller/questionsController');
const router =  express.Router()
const upload= require('../middleware/S3Upload')

router.post('/cockpit/addSyllabus', upload.single('image'), addSyllabus);
router.get('/cockpit/getSyllabus', getSyllabus);
router.post('/cockpit/addChapters', addChapters);
router.get('/cockpit/getChapters', getChapters);
router.post('/cockpit/addBooks', addBooks);
router.get('/cockpit/getBooks', getBooks);

module.exports = router;
