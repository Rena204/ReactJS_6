// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  products: [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10, available: true },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20, available: false }
  ]
};

// Создание слайса для продуктов
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, name, description, price } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.description = description;
        existingProduct.price = price;
      }
    },
    toggleAvailability: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      if (existingProduct) {
        existingProduct.available = !existingProduct.available;
      }
    }
  }
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default configureStore({ reducer: productsSlice.reducer });
