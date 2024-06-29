import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleAvailability } from './store';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability({ id }));
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Available: {product.available ? 'Yes' : 'No'}</p>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
          <button onClick={() => handleToggleAvailability(product.id)}>Toggle Availability</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
