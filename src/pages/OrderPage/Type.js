import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './Products';
import ErrorBanner from '../../components/ErrorBanner';
import Options from './Options';

function Type({ orderType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }
  const ItemComponent = orderType === 'product' ? Products : Options;
  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });
  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>
      <div
        style={{
          display: 'flex',
          flexDirection: orderType === 'options' && 'column',
        }}
      ></div>
      <div>{optionItems}</div>
    </>
  );
}

export default Type;
