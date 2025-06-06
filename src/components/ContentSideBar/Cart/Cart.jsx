import React, { useContext } from 'react';
import styles from './styles.module.scss';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import cls from 'classnames';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {
        container,
        total,
        boxBtn,
        isEmpty,
        boxEmpty,
        boxBtnEmpty,
        containerListItem
    } = styles;
    const navigate = useNavigate();

    const { listProductCart, isLoading, setIsOpen } =
        useContext(SideBarContext);

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const handleNavigateToCart = () => {
        navigate('/cart');
        setIsOpen(false);
    };

    return (
        <div
            className={cls(container, {
                [isEmpty]: !listProductCart.length
            })}
        >
            <HeaderSideBar
                icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                title={'CART'}
            />
            {listProductCart.length ? (
                <>
                    <div className={containerListItem}>
                        <div>
                            {isLoading ? (
                                <LoadingTextCommon />
                            ) : (
                                listProductCart.map((item, index) => {
                                    return (
                                        <ItemProduct
                                            key={index}
                                            src={item.images[0]}
                                            nameProduct={item.name}
                                            sizeProduct={item.size}
                                            quantity={item.quantity}
                                            priceProduct={item.price}
                                            skuProduct={item.sku}
                                            productId={item.productId}
                                            userId={item.userId}
                                        />
                                    );
                                })
                            )}
                        </div>
                    </div>
                    <div>
                        <div className={total}>
                            <p>SUBTOTAL:</p>
                            <p>${subTotal.toFixed(2)}</p>
                        </div>
                        <div className={boxBtn}>
                            <Button
                                content={'VIEW CART'}
                                onClick={() => handleNavigateToCart()}
                            />
                            <Button content={'CHECK OUT'} isPrimary={false} />
                        </div>
                    </div>
                </>
            ) : (
                <div className={boxEmpty}>
                    <div>No products in the cart.</div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
