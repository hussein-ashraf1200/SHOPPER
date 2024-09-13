import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrums from '../commpents/Breadcrums/Breadcrums';
import ProductDisplay from '../commpents/ProductDisplay/ProductDisplay'
import DiscriptionBox from '../commpents/DiscriptionBox/DiscriptionBox'
import RelatedProducts from "../commpents/RelatedProducts/RelatedProducts"
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const Product = all_product.find((e)=> e.id ===Number (productId))
  return (
    <div>
      <Breadcrums product = {Product}/>
      <ProductDisplay product  ={Product}/>
      <DiscriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
export default Product