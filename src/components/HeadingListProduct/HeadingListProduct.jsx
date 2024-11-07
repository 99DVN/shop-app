import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer.jsx/CountdownTimer';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

const HeadingListProduct = () => {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate} /> */}
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadingListProduct;
