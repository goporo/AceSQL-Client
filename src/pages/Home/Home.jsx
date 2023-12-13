import React, { useState, useEffect } from 'react';
import { getProductsRequest } from 'requests/product.request';
import ProductItem from 'components/section/product/ProductItem';

const Home = () => {
  const [response, setResponse] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);




  useEffect(() => {
    const handleFetchProjects = async () => {
      if (fetchLoading) return;

      setFetchLoading(true);
      try {
        const fetchResult = await getProductsRequest();
        const data = fetchResult?.data;
        setResponse(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setFetchLoading(false);
      }
    };

    handleFetchProjects();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className=''>
      <div className='p-12'>
        <div className="flex flex-col gap-6">
          <ProductItem response={response} fetchLoading={fetchLoading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
