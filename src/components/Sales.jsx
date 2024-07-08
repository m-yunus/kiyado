import React, { useState } from 'react';
import Items from './utils/Items';
import Title from './utils/Title';
import useProducts from '../hooks/useProducts';

const Sales = ({ ifExists }) => {
  const { products, category, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getFilteredProducts = () => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <div className='sales nike-container mt-10 w-full'>
        <Title title={'Product List'} />
        <div className='filter-controls mt-4 flex justify-between'>
          <div className='category-select'>
            <label htmlFor='category'>Choose Category: </label>
            <select
              id='category'
              value={selectedCategory}
              onChange={handleCategoryChange}
              className='border p-2 rounded'
            >
              <option value=''>All</option>
              {category.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className='search-box sm:w-1/3'>
            <label htmlFor='search'>Search: </label>
            <input
              id='search'
              type='text'
              value={searchTerm}
              onChange={handleSearchChange}
              className='border p-2 rounded'
            />
          </div>
        </div>
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
          ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <Items key={product.id} {...product} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
