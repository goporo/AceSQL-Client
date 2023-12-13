import UiSpinning from 'components/common/ui/UiSpinning/UiSpinning';
import React from 'react'
import { Link } from 'react-router-dom';

const renderProductItem = (product, idx) => {
    const { productID, name, avatar } = product;
    return (
        <Link key={idx} to={`product/${productID}`}>
            <div className='h-28 bg-white flex flex-row p-4 gap-2 min-w-[250px]'>
                <div className='flex-shrink-0'>
                    <img src={avatar} alt="logo" className='h-16 min-w-16 min-w-16' />
                </div>
                <div className=''>
                    <div className='text-lg font-bold'>
                        {name ?? "Life Vantage"}
                    </div>
                    <p className='line-clamp-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi eligendi blanditiis facere distinctio reiciendis, inventore obcaecati autem sed assumenda. Ad consequatur eum saepe quas, dolorum rerum voluptatem possimus quasi aecati autem shred res?</p>
                </div>
            </div>
        </Link>
    )
}

const ProductItem = ({
    response,
    fetchLoading = false,
}) => {

    return (
        <>
            {
                !fetchLoading ?
                    response.map((product, idx) =>
                        renderProductItem(product, idx)
                    )
                    : <UiSpinning />
            }
        </>
    )
}

export default ProductItem