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
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                    alt=''
                />
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
                    alt=''
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
            <div className={title}>10K Yellow Gold</div>
            <div className={priceBox}>$99.99</div>
        </div>
    );
};

export default ProductItem;
