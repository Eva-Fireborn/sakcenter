import React from 'react';
import './importantNews.scss';
import Ticker from 'react-ticker';

const ImportantNews = ({ news }) => {
    let displayTicker = false;
    if (window.innerWidth < 500){
        if (news.length > 35) {
            displayTicker = true;
        }
    } else if (window.innerWidth < 950) {
        if (news.length > 65) {
            displayTicker = true;
        }
    }
    return (
        <div className="importantNews">
            {displayTicker ? (
                
                    <Ticker
                        mode="await"
                        height={25}
                    >
                        {() => (
                        <div className="tickerWrapper"><p className="importantText">{news}</p></div>
                        )}
                    </Ticker>
            ) : (
                <p className="importantText">{news}</p>
            )}
        </div>
    );
}
export default ImportantNews;