import CountdownTimer from '@components/CountdownTimer.jsx/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

const CountdownBanner = () => {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <h1 className={title}>The Classics Make A Comeback</h1>
            <div className={boxBtn}>
                <Button content={'Buy now'} />
            </div>
        </div>
    );
};
export default CountdownBanner;
