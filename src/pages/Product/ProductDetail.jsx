import UiButton from 'components/common/ui/UiButton/UiButton';
import UiModal from 'components/common/ui/UiModal/UiModal';
import UiSpinning from 'components/common/ui/UiSpinning/UiSpinning';
import NotFound from 'pages/404/NotFound';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetailRequest } from 'requests/product.request';

const ProductDetail = () => {
    const [response, setResponse] = useState([]);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { productId } = useParams();

    useEffect(() => {
        const handleFetchProjectDetail = async () => {
            if (fetchLoading) return;
            setFetchLoading(true);
            try {
                const fetchResult = await getProductDetailRequest({ id: productId });
                const data = fetchResult?.data;
                setResponse(data);
            } catch (error) {
                console.log(error);
                setFetchError(true);
            } finally {
                setFetchLoading(false);
            }
        };

        handleFetchProjectDetail();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);

    const handleCloseModal = () => {
        setIsModalVisible(false);
    }


    // temp return in case product not found
    if (fetchError) return (<NotFound />)

    return (
        <>
            <UiModal visible={isModalVisible} onConfirm={handleCloseModal} onclose={handleCloseModal} onCancel={handleCloseModal} headerTitle="Modal Title">Test modal</UiModal>

            {
                !fetchLoading ?
                    <div className='m-8 bg-white p-12 shadow-sm min-w-[400px] overflow-hidden'>
                        <h2>ProductDetail</h2>
                        <pre>{JSON.stringify(response, null, 2)}</pre>
                        <div className='flex justify-center flex-row'>
                            <UiButton
                                onClick={() => { setIsModalVisible(!isModalVisible) }}

                            >Enroll Now</UiButton>
                        </div>
                    </div>
                    : <UiSpinning />
            }
        </>


    );
};

export default ProductDetail;
