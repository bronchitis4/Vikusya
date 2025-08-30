import { useState } from 'react';
import './presentPage.css';

const PresentPage = () => {

    return (
        <div className='present_page_wrapper'>
            <div className="greeting-content">
                <h1>З Днем Народження!</h1>
                
                <div className="subtitle">
                    Ти у мене найкрасивіша та найрозумніша у світі! :)
                </div>
            </div>
        </div>
    );
}

export default PresentPage;
