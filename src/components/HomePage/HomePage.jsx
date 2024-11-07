import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';

const HomePage = () => {
    const { container } = styles;
    return (
        <>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct />
                <div
                    style={{
                        height: '200px'
                    }}
                ></div>
            </div>
        </>
    );
};

export default HomePage;
