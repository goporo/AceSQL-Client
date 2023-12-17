import api from 'config/axios'

// export const updateProductDetailsRequest = (
//   id: string,
//   data: UpdateDetailRequest
// ): ApiResponse<GetProductDetailResponse> => api.put(`/Products/${id}`, data);

// export const createProductRequest = (
//   data: CreateProductRequest
// ): ApiResponse<GetProductDetailResponse> => api.post('/Products/', data);

export const getProductsRequest = () => api.get('/product/')

export const getProductDetailRequest = (data) => api.get(`/product/${data.id}`)

// export const deleteProductDetailsRequest = (
//   id: string
// ): ApiResponse<GetProductDetailResponse> => api.delete(`/Products/${id}`);
