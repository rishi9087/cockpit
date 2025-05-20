import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './chapter.css';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/Footer/footer';
import { apiGet } from '../../api/axios';
import { Link, useLocation } from 'react-router-dom';

const ChapterSection = () => {
    const [activeBook, setactiveBook] = useState('rk bali');

    const [books, setBooks] = useState([])
    const [chapters, setChapters] = useState([]);

    const location = useLocation();
    const syllabusTitle = location.state;

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await apiGet('/getBooks');
                setBooks(response.data.books);

            } catch (error) {
                console.error('Error fetching syllabus:', error);
            }
        };

        const fetchChapters = async () => {
            try {
                const response = await apiGet('/getChapters');
                setChapters(response.data.chapters);

            } catch (error) {
                console.error('Error fetching syllabus:', error);
            }
        };

        fetchBooks();
        fetchChapters();

    }, [])

    const filteredChapters = chapters.filter((chapter) => chapter.book === activeBook && chapter.syllabus === syllabusTitle);

    return (
        <>
            <Header />
            <section className="p-5 bg-light">
                <div className="container">
                    <h1 className="fw-bold text-dark-blue mb-3">AIR navigation Question Banks</h1>
                </div>
            </section>
            <div className='container mb-5'>
                <div className="tabs-section pb-5">
                    <ul className="nav nav-tabs custom-tabs">
                        {books.map((book, index) => (
                            <li className="nav-item" key={index}>
                                <button
                                    className={`nav-link ${activeBook === book.bookTitle ? 'active' : ''}`}
                                    onClick={() => setactiveBook(book.bookTitle)}
                                >
                                    {book.bookTitle}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-description px-5 mt-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="chapter-list px-5">
                        {
                            filteredChapters.map((chapter, index) => (
                                <Link key={index} to={`/trainingQuestion/${chapter.syllabus}/${chapter.book}/${chapter.chaptername}`} className='link-text'>
                                    <div className="chapter-box" key={index}>
                                        <p>{chapter.chaptername}</p>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
};
export default ChapterSection;