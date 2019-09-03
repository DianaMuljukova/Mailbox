import React from 'react';

const GmailRow = () => {
    return (
        <section className="gmail-row">
            <div className="container">
                <div className="row" style={{justifyContent: 'space-between'}}>
                    <div className="col-xl-5 gmail-row__left">
                        <div className="gmail-row__title">
                            <span>Gmail</span>
                            <a href="" className="gmail-row__title__sort">
                                <i className="fas fa-sort-down"></i>
                            </a>
                        </div>

                        <div className="gmail-row__config">
                            <a href="#" className="square link link-left">
                                    <a href="">
                                        <i className="far fa-square"></i>
                                    </a>
                                    <a href="">
                                        <i className="fas fa-sort-down"></i>
                                    </a>
                            </a>
                            <a href="#" className="sort-down link">
                                <i className="fas fa-spinner"></i>
                            </a>
                            <a href="#" className="link">
                                <i className="fas fa-ellipsis-v"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-5 gmail-row__right">
                        <div className="gmail-row__config">
                            <a href="#" className="square link">
                                <i className="fas fa-chevron-left"></i>
                            </a>
                            <a href="#" className="sort-down link">
                                <i className="fas fa-chevron-right"></i>
                            </a>

                            <a href="#" className="square link link-right">
                                <a href="">
                                    <i className="fas fa-cog"></i>
                                </a>
                                <a href="">
                                    <i className="fas fa-sort-down"></i>
                                </a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default GmailRow;