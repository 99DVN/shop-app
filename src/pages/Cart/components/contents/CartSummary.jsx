import React, { useContext } from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Loading from '@/pages/Cart/components/Loading';

const CartSummary = () => {
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        space,
        containerMethods,
        titleMethods,
        imgMethods,
        boxImgMethods,
        containerRight,
        textSecure
    } = styles;

    const { listProductCart, isLoading } = useContext(SideBarContext);

    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];

    const toTal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);
    console.log(toTal);

    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTAL</div>

                <div className={cls(boxTotal, subTotal)}>
                    <div>Subtotal</div>
                    <div className={price}>${toTal.toFixed(2)}</div>
                </div>
                <div className={cls(boxTotal, totals)}>
                    <div>TOTAL</div>
                    <div className={price}>${toTal.toFixed(2)}</div>
                </div>

                <Button content={'PROCEED TO CHECKOUT'} />
                <div className={space} />
                <Button content={'CONTINUE SHOPPING'} isPrimary={false} />

                {isLoading && <Loading />}
            </div>
            <div className={containerMethods}>
                <div className={titleMethods}>
                    Guarenteed <span>safe</span> checkout
                </div>

                <div className={boxImgMethods}>
                    {srcMethods.map((src, index) => {
                        return (
                            <img
                                src={src}
                                alt={src}
                                className={imgMethods}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={textSecure}>Your Payment is 100% Secure</div>
        </div>
    );
};

export default CartSummary;
