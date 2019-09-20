import React, {useState} from 'react';
import DeleteMessages from "./DeleteMessages";
import HighlightMessages from "./HiglightMessages";

const GmailRow = () => {

    const deleteSeveralMessages = e => {
        console.log(e.target);
    };

    const chooseMessages = e => {
        setChooseIsChecked(!chooseIsChecked)
    };

    const [chooseIsChecked, setChooseIsChecked] = useState(false);
    const [highlightIsChecked, setHighlightIsChecked] = useState(false);

    return (
        <section className="gmail-row">
            <div className="container">
                <div className="row" style={{justifyContent: 'space-between'}}>
                    <div className="col-xl-3 gmail-row__left">
                        <div className="gmail-row__title">
                            <span>Gmail</span>
                            <i className="fas fa-sort-down"></i>
                        </div>
                    </div>
                    <div className="col-xl-9 gmail-row__right">
                        <div className="gmail-row__config">
                            <div className="square link link-left">
                                <i
                                    onClick={() => setHighlightIsChecked(!highlightIsChecked)}
                                    className={highlightIsChecked ? 'fas fa-check-square' : 'far fa-square square'}></i>

                                <i className="fas fa-sort-down" onClick={chooseMessages}></i>
                                {
                                    chooseIsChecked ?
                                        <HighlightMessages /> :
                                        null
                                }
                            </div>
                            <div className="sort-down link">
                                <i className="fas fa-spinner"></i>
                            </div>
                            <div className="link">
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <DeleteMessages
                                deleteSeveralMessages={deleteSeveralMessages}
                            />

                        </div>
                        <div className="gmail-row__config">
                            <div className="square link">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            <div className="sort-down link">
                                <i className="fas fa-chevron-right"></i>
                            </div>

                            <div className="square link link-right">
                                <i className="fas fa-cog"></i>

                                <i className="fas fa-sort-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default GmailRow;