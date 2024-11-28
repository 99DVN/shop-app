import React from 'react';
import styles from '../styles.module.scss';
import CountdownTimer from '@components/CountdownTimer.jsx/CountdownTimer';
import Button from '@components/Button/Button';

const Banner = () => {
    const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;

    const targetDate = '2025-12-31T00:00:00';
    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        {' '}
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                    <div className={title}>The Classics Make A Comeback</div>
                    <div className={boxBtn}>
                        <Button content={'Buy now'} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
