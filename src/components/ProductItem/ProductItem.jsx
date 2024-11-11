import React from 'react';
import styles from './styles.module.scss';
import rotateIcon from '@icons/svgs/rotateicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';

const ProductItem = ({ src, prevSrc, name, price }) => {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceBox
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt='image' />
                <img
                    src={prevSrc}
                    alt='prevImage'
                    className={showImgWhenHover}
                />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='icon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='icon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={rotateIcon} alt='icon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='icon' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceBox}>${price}</div>
        </div>
    );
};

export default ProductItem;
