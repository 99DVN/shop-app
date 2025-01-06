import React, { useState } from 'react';
import styles from './styles.module.scss';
import cls from 'classnames';
import { RiArrowDownWideLine } from 'react-icons/ri';
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const Accordion = () => {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        borderBottom
    } = styles;

    const [isSeleted, setIsSeleted] = useState(false);

    const handleToggle = () => {
        setIsSeleted(!isSeleted);
    };

    return (
        <div className={container}>
            <div
                className={cls(title, {
                    [activeTitle]: isSeleted
                })}
                onClick={handleToggle}
            >
                {isSeleted ? (
                    <TfiLayoutLineSolid style={{ fontSize: '20px' }} />
                ) : (
                    <RiArrowDownWideLine style={{ fontSize: '20px' }} />
                )}{' '}
                ADDITIONAL INFORMATION
            </div>

            <div
                className={cls(contentMenu, borderBottom, {
                    [isVisibility]: isSeleted
                })}
            >
                <div>Size ---------- L, M, S</div>
            </div>
        </div>
    );
};

export default Accordion;
