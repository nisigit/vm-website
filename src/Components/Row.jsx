import React from 'react';
import './Row.css';

const Row = (props) => {
    let rowClassNames = 'info-row'

    if (props.rowOrder === 2) {
        rowClassNames += ' info-row-reverse';
    }

    return (
        <>
            <section className={rowClassNames}>
                <div className="info-row-panel">
                    <h2 className="info-row-head">{props.rowHeading}</h2>
                    <p className="info-row-par">
                        {props.rowParagraph}
                    </p>
                </div>
                <div className="info-row-panel info-row-img-container">
                    <img className="info-row-img" src={props.rowImage} alt="" />
                </div>
            </section>
        </>
    );
};

export default Row;