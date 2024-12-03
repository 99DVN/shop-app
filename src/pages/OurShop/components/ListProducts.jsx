import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';

const ListProducts = () => {
    const { products, isShowGrid } = useContext(OurShopContext);
    const { containerProduct } = styles;

    return (
        <>
            <MainLayout>
                <div className={isShowGrid ? containerProduct : ''}>
                    {products.map((item) => (
                        <ProductItem
                            key={item._id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                            isHomepage={false}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
};

export default ListProducts;
