import CartTalbe from '@/pages/Cart/components/contents/CartTalbe';
import styles from '../../styles.module.scss';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';

const Contents = () => {
    const { containerContent } = styles;
    return (
        <div className={containerContent}>
            <div>
                <CartTalbe />
            </div>

            <CartSummary />
        </div>
    );
};

export default Contents;
