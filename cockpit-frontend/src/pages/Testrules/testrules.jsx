import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './chapter.css';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/Footer/footer';

const ChapterSection = () => {
const [activeTab, setActiveTab] = useState('rk-bali');
const tabs = ['rk-bali', 'oxford', 'indigo', 'keinth-willian'];
const tabLabels = {
    'rk-bali': 'RK BALI',
    'oxford': 'OXFORD',
    'indigo': 'INDIGO',
    'keinth-willian': 'KEINTH WILLIAN'
};

const tabContent = {
    'rk-bali': [
    'Chapter 1: Solar System',
    'Chapter 2: Planets',
    'Chapter 3: Asteroids'
    ],
    'oxford': [
    'Chapter 1: Gravity',
    'Chapter 2: Force',
    'Chapter 3: Motion'
    ],
    'indigo': [
    'Chapter 1: Atmosphere',
    'Chapter 2: Wind Patterns',
    'Chapter 3: Climate'
    ],
    'keinth-willian': [
    'Chapter 1: Magnetism',
    'Chapter 2: Electromagnetism',
    'Chapter 3: Circuits'
    ]
};
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
                {tabs.map((tab) => (
                <li className="nav-item" key={tab}>
                    <button
                    className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tabLabels[tab]}
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
                {tabContent[activeTab].map((chapter, index) => (
                <div className="chapter-box" key={index}>
                    {chapter}
                </div>
                ))}
            </div>
        </div>
    </div>
<FooterSection />
</>
);
};
export default ChapterSection;