import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import Steps from '@/pages/Cart/components/steps/Steps';
import Contents from '@/pages/Cart/components/contents/Contents';
import Footer from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout';

const Cart = () => {
    const { container } = styles;
    return (
        <>
            <Header />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <Contents />
                </MainLayout>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
