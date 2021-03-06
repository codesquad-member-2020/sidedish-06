import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { lnbList, menuList } from 'utils/mockData';
import Header from 'components/Header/Header';
import ProductList from 'components/ProductList/ProductList';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import MoreButton from 'components/MoreButton';
import GlobalStyle from 'components/GlobalStyle';

const App = () => {
  const [isMoreBtnClicked, setIsMoreBtnClicked] = useState(false);
  const [targetProductHash, setTargetProductHash] = useState(null);
  const moreBtnClickHandler = () => setIsMoreBtnClicked(true);
  const productClickHandler = (hash = null) => setTargetProductHash(hash);

  useEffect(() => {
    targetProductHash ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [targetProductHash]);

  return (
    <>
      <GlobalStyle />
      {targetProductHash && <ProductDetail productType={'detail'} hash={targetProductHash} onClick={productClickHandler} />}
      <Header lnbList={lnbList} menuList={menuList} />
      <ProductList productType={'side'} onClick={productClickHandler} />
      <ProductList productType={'main'} onClick={productClickHandler} />
      {isMoreBtnClicked ? <ProductList productType={'soup'} onClick={productClickHandler} /> : <MoreButton onClick={moreBtnClickHandler} />}
      <FooterDiv />
    </>
  );
};

const FooterDiv = styled.div`
  height: 10rem;
`;

export default App;
