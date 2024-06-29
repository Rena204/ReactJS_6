import React from 'react';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';

const App = () => {
  return (
    <div>
      <h1>Product Catalog Management</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default App;
