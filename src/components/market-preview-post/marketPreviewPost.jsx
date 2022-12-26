

import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MarketPreviewBoxWrap } from './marketpreviewboxstyle'
import IconMarketPostUpload from '../../assets/icon/market-plus.png'
import { MarketPreviewModal } from '../modal/modal'
import { AxiosProductList } from '../../reducers/getProductListSlice'
import IconClova from '../../assets/icon/sns용-클로바-disabled.png'




export const MarketPreviewPost = ({ marketPostsData }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const myAccountName = localStorage.getItem('Account Name');
  const { id } = useParams();



export const MarketPreviewPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accountName = localStorage.getItem("Account Name");
  const {id} = useParams()
  const product = useSelector(state => state.productListSlice.productList);
  const dispatch = useDispatch();
  const URLProduct = `https://mandarin.api.weniv.co.kr/product/${id}`;

  console.log('뿌려줄거!!!!', product);




  useEffect(()=>{
    dispatch(AxiosProductList(URLProduct));
  },[])

 

  return (
    <MarketPreviewBoxWrap>
          <div className='headingWrap'>
            <h2>
              <strong>{id}</strong>님이 찾는 럭킷 메이트✨
            </h2>
            {id === myAccountName ?
            <NavLink to='/upload'>
              <img src={IconMarketPostUpload} alt='마켓 게시글 등록 버튼' />
            </NavLink>
            : <></>}
          </div>
          <ul>
            {marketPostsData.length === 0 &&
            <div className='noPostBox'>
              <img src={IconClova} alt=''/>
              <p>게시물이 없습니다.</p>
            </div>
            }
            {marketPostsData &&
              marketPostsData.map((post) => {
                return (
                  <li key={post.id}>
                      <NavLink to={`/marketpost/${id}`}>
                        <p>{post.itemName}</p>
                        <img src={post.itemImage} />
                      </NavLink>
                  </li>
                );
              })}
          </ul>
        
    </MarketPreviewBoxWrap>
  );
};
