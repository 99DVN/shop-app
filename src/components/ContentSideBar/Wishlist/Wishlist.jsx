import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { BsHeart } from 'react-icons/bs';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

const Wishlist = () => {
    const { container, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<BsHeart style={{ fontSize: '30px' }} />}
                    title='WISHTIST'
                />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <Button content={'WIEW WISHTLIST'} />
                <Button content={'ADD ALL TO CART'} isPrimary={false} />
            </div>
        </div>
    );
};

export default Wishlist;
