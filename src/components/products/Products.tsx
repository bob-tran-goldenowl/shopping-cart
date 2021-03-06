import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { selectProducts, IProduct, addProduct } from './productsSlice'
import Product from './Product'
import './Products.css'
import { addCarts, totalCart } from '../carts/cartsSlice'
import Assets from '../../assets'
import { history, Routes } from '../../Router'

const productContanst: IProduct[] = [
  {
    id: 1,
    icon: Assets.Typescript,
    price: 99,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh`,
    productName: 'Typescript',
  },
  {
    id: 2,
    icon: Assets.Go,
    price: 39,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh`,
    productName: 'Go',
  },
  {
    id: 3,
    icon: Assets.Javascript,
    price: 79,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh`,
    productName: 'Javascript',
  },
  {
    id: 4,
    icon: Assets.Java,
    price: 909,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh`,
    productName: 'Java',
  },
  {
    id: 5,
    icon: Assets.C,
    price: 9,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh`,
    productName: 'C',
  },
  {
    id: 6,
    icon: Assets.Angular,
    price: 9999,
    description: 'Angular',
    productName: 'Angular',
  },
  {
    id: 7,
    icon: Assets.Github,
    price: 39,
    description: 'Github',
    productName: 'Github',
  },
  {
    id: 8,
    icon: Assets.Node,
    price: 79,
    description: 'Node',
    productName: 'Node',
  },
  {
    id: 9,
    icon: Assets.React,
    price: 909,
    description: 'React',
    productName: 'React',
  },
  {
    id: 10,
    icon: Assets.Slack,
    price: 9,
    description: 'Slack',
    productName: 'Slack',
  },
  {
    id: 11,
    icon: Assets.Vue,
    price: 99,
    description: 'Vue',
    productName: 'Vue',
  },
]

const Products: React.FC = () => {
  const products = useAppSelector(selectProducts)
  const total = useAppSelector(totalCart)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!products.length) {
      dispatch(addProduct(productContanst))
    }
  }, [])
  const handlerAddCart = useCallback(
    id => {
      const productInfo = products.find(product => product.id === id)
      if (productInfo) {
        dispatch(addCarts([productInfo]))
      }
    },
    [products]
  )
  return (
    <div>
      <div className='quantity-cart-wrapper'>
        <button type='button' className="shopping-cart-btn" onClick={() => history.push(Routes.carts.path)}>
          <img src={Assets.shoppingCart} alt='shopping cart'/>
          <p>{total}</p>
        </button>
      </div>

      <div>
        {products.map(product => (
          <Product {...product} onAddCart={handlerAddCart} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Products
