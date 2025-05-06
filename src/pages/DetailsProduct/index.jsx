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
import { getDetailProduct, getRelatedProduct } from '@/apis/productService';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { toast } from 'react-toastify';

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
        activeDisableBtn,
        loading,
        emtyData
    } = styles;

    const [menuSelected, setMenuSelected] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [dataRelated, setDataRelated] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const param = useParams();
    const navigate = useNavigate();

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

    const handleNavigateToShop = () => {
        navigate('/shop');
    };

    const fetchDataDetail = async (id) => {
        setIsLoading(true);
        try {
            const data = await getDetailProduct(id);
            setData(data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            toast.error('Có Lỗi Khi Tải Dữ Liệu!!');
            setIsLoading(false);
        }
    };

    const fetchDataRelatedProduct = async (id) => {
        setIsLoading(true);
        try {
            const data = await getRelatedProduct(id);
            setDataRelated(data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            toast.error('Có Lỗi Khi Tải Dữ Liệu!!');
            setDataRelated([]);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
            fetchDataRelatedProduct(param.id);
        }
    }, [param]);

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

                    {isLoading ? (
                        <div className={loading}>
                            <LoadingTextCommon />
                        </div>
                    ) : (
                        <>
                            {!data ? (
                                <div className={emtyData}>
                                    <p>No Results</p>
                                    <div onClick={() => handleNavigateToShop()}>
                                        <Button content='Back To Our Shop' />
                                    </div>
                                </div>
                            ) : (
                                <div className={contentSection}>
                                    <div className={imageBox}>
                                        {data?.images.map((src) =>
                                            handelRenderZoomImage(src)
                                        )}
                                    </div>
                                    <div className={infoBox}>
                                        <h1>{data?.name}</h1>
                                        <p className={price}>${data?.price}</p>
                                        <p className={description}>
                                            {data?.description}
                                        </p>

                                        <p className={titleSize}>
                                            Size {selectedSize}
                                        </p>
                                        <div className={boxSize}>
                                            {data?.size.map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={cls(size, {
                                                            [active]:
                                                                selectedSize ===
                                                                item.name
                                                        })}
                                                        onClick={() =>
                                                            handleSelectSize(
                                                                item.name
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {selectedSize && (
                                            <p
                                                className={clear}
                                                onClick={handleClearSize}
                                            >
                                                clear
                                            </p>
                                        )}

                                        <div className={functionInfo}>
                                            <div className={incrementAmount}>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            DECREMENT
                                                        )
                                                    }
                                                >
                                                    -
                                                </div>
                                                <div>{quantity}</div>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            INCREMENT
                                                        )
                                                    }
                                                >
                                                    +
                                                </div>
                                            </div>

                                            <div className={boxBtn}>
                                                <Button
                                                    content={'Add to cart'}
                                                    customClassname={
                                                        !selectedSize &&
                                                        activeDisableBtn
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
                                                    !selectedSize &&
                                                    activeDisableBtn
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
                                                onClick={() =>
                                                    handleMenuSelected(item.id)
                                                }
                                                isSelected={
                                                    menuSelected === item.id
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {dataRelated.length ? (
                        <div>
                            <h2 className=''>Related Products</h2>
                            <SliderCommon
                                data={dataRelated}
                                isProductItem={true}
                                showItem={4}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </MainLayout>
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduct;
