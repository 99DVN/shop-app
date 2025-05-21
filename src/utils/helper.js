import { addProductTocart } from '@/apis/cartService';

export const handleAddProductTocartCommon = (
    userId,
    setIsOpen,
    setType,
    toast,
    sizeChoose,
    productId,
    quantity,
    setIsLoading,
    handleGetListProductsCart
) => {
    if (!userId) {
        setIsOpen(true);
        setType('login');
        toast.warning('Please login to add to cart!');

        return;
    }
    if (!sizeChoose) {
        toast.warning('Please choose size!');
        return;
    }

    const data = {
        userId,
        productId,
        quantity,
        size: sizeChoose
    };
    setIsLoading(true);
    addProductTocart(data)
        .then((res) => {
            setIsOpen(true);
            setType('cart');

            // toast.success('Add Product to cart successfully!');
            setIsLoading(false);
            handleGetListProductsCart(userId, 'cart');
        })
        .catch((err) => {
            console.log(err);
            toast.error('Add Product to cart failed!');
            setIsLoading(false);
        });
};
