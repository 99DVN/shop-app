import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import Accordion from '@components/Accordion/Accordion';
import { useEffect, useState } from 'react';
import InfomationProduct from '@/pages/DetailsProduct/components/Infomation';
import ReviewProduct from '@/pages/DetailsProduct/components/Review';
import Footer from '@components/Footer/Footer';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import cls from 'classnames';
import { getDetailProduct } from '@/apis/productService';

const temDataSize = [
    {
        name: 'S',
        amount: '1000'
    },
    {
        name: 'M',
        amount: '1000'
    },
    {
        name: 'L',
        amount: '1000'
    }
];

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

function DetailProduct() {
    const {
        container,
        navigateSection,
        contentSection,
        price,
        imageBox,
        infoBox,
        description,
        boxSize,
        size,
        titleSize,
        functionInfo,
        boxBtn,
        incrementAmount,
        orSection,
        addFunc,
        info,
        active,
        clear,
        activeDisableBtn
    } = styles;

    const [menuSelected, setMenuSelected] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();

    const dataAccordion = [
        {
            id: 1,
            titleMenu: 'ADITIONAL INFORMATIOON',
            content: <InfomationProduct />
        },
        {
            id: 2,
            titleMenu: 'REVIEW (0)',
            content: <ReviewProduct />
        }
    ];

    const handleMenuSelected = (id) => {
        setMenuSelected(id);
    };

    const temDataSlider = [
        {
            image: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg',
            name: 'Test Product 1',
            price: '1000',
            size: [{ name: 'L' }, { name: 'S' }]
        },
        {
            image: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg',
            name: 'Test Product 1',
            price: '1000',
            size: [{ name: 'L' }, { name: 'S' }]
        },
        {
            image: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg',
            name: 'Test Product 1',
            price: '1000',
            size: [{ name: 'L' }, { name: 'S' }]
        }
    ];

    const dataImageDetails = [
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg',
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg',
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg',
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg'
    ];

    const handelRenderZoomImage = (src) => {
        return (
            <ReactImageMagnifier
                srcPreview={src}
                srcOriginal={src}
                width={295}
                height={350}
                className='max-w-xs bg-gray-200 rounded-lg md:max-w-none max-h-80 md:max-h-none'
                objectFit='contain'
            />
        );
    };

    const handleSelectSize = (size) => {
        setSelectedSize(size);
    };

    const handleClearSize = () => {
        setSelectedSize('');
    };

    const handleSetQuantity = (type) => {
        setQuantity((prev) =>
            type === INCREMENT ? (prev += 1) : quantity === 1 ? 1 : (prev -= 1)
        );
    };

    const fetchDataDetail = async () => {
        try {
            const data = await getDetailProduct(
                '7fe1061c-4078-4630-a4e3-b5e3ed04fc46'
            );
            setData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchDataDetail();
    }, []);

    console.log('data:', data);

    return (
        <div>
            <Header />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div className='' style={{ cursor: 'pointer' }}>
                            {'<'} Return to previous page{' '}
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imageBox}>
                            {dataImageDetails.map((src) =>
                                handelRenderZoomImage(src)
                            )}
                        </div>
                        <div className={infoBox}>
                            <h1>Title Product</h1>
                            <p className={price}>$1,879.99</p>
                            <p className={description}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>

                            <p className={titleSize}>Size {selectedSize}</p>
                            <div className={boxSize}>
                                {temDataSize.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={cls(size, {
                                                [active]:
                                                    selectedSize === item.name
                                            })}
                                            onClick={() =>
                                                handleSelectSize(item.name)
                                            }
                                        >
                                            {item.name}
                                        </div>
                                    );
                                })}
                            </div>

                            {selectedSize && (
                                <p className={clear} onClick={handleClearSize}>
                                    clear
                                </p>
                            )}

                            <div className={functionInfo}>
                                <div className={incrementAmount}>
                                    <div
                                        onClick={() =>
                                            handleSetQuantity(DECREMENT)
                                        }
                                    >
                                        -
                                    </div>
                                    <div>{quantity}</div>
                                    <div
                                        onClick={() =>
                                            handleSetQuantity(INCREMENT)
                                        }
                                    >
                                        +
                                    </div>
                                </div>

                                <div className={boxBtn}>
                                    <Button
                                        content={'Add to cart'}
                                        customClassname={
                                            !selectedSize && activeDisableBtn
                                        }
                                    />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div></div>
                                <span>OR</span>
                                <div></div>
                            </div>

                            <div>
                                <Button
                                    content={'Buy Now'}
                                    customClassname={
                                        !selectedSize && activeDisableBtn
                                    }
                                />
                            </div>

                            <div className={addFunc}>
                                <div>
                                    <CiHeart />
                                </div>

                                <div>
                                    <TfiReload />
                                </div>
                            </div>

                            <div>
                                <PaymentMethods />
                            </div>

                            <div className={info}>
                                <div>
                                    Brand: <span>Brand 03</span>
                                </div>

                                <div>
                                    SKU: <span>87654</span>
                                </div>

                                <div>
                                    Category: <span>Men</span>
                                </div>
                            </div>
                            {dataAccordion.map((item, index) => (
                                <Accordion
                                    titleMenu={item.titleMenu}
                                    contentJsx={item.content}
                                    key={index}
                                    onClick={() => handleMenuSelected(item.id)}
                                    isSelected={menuSelected === item.id}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className=''>Related Products</h2>
                        <SliderCommon
                            data={temDataSlider}
                            isProductItem={true}
                            showItem={4}
                        />
                    </div>
                </MainLayout>
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduct;
