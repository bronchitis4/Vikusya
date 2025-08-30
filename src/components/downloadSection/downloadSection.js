import './downloadSection.css';

const DownloadSection = () => {
    const handleDownload = () => {
       
        const link = document.createElement('a');
        link.href = '/For Vikusya.rar'; 
        link.download = 'For Vikusya.rar';
        link.click();
    };

    return (
        <div className='download__section__wrapper'>
            <div className="download__content">
                <h2>Презентик</h2>
                <p>Жмякай кнопку і зацінюй, я старався :)</p>
                <button 
                    className="download__button"
                    onClick={handleDownload}
                >
                    Скачати
                </button>
            </div>
        </div>
    );
}

export default DownloadSection; 