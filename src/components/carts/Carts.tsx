import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { removeCarts, selectCarts, totalCart } from './cartsSlice'
import './Carts.css'
import Cart from './Cart'
import Assets from '../../assets'
import { history, Routes } from '../../Router'

export interface CartProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Carts: React.FC<CartProps> = (props: CartProps) => {
  const carts = useAppSelector(selectCarts)
  const dispatch = useAppDispatch()
  const total = useAppSelector(totalCart)

  const handlerRemoveCart = useCallback(
    id => {
      const cartInfo = carts.find(cart => cart.id === id)
      if (cartInfo) {
        dispatch(removeCarts([cartInfo]))
      }
    },
    [carts]
  )

  return (
    <div>
      <div className='quantity-cart-wrapper'>
        <button type='button' className="shopping-cart-btn" onClick={() => history.push(Routes.products.path)}>
          <img src={Assets.shoppingCart} alt='shopping cart' />
          <p>{total}</p>
        </button>
      </div>
      <div>
        {carts.map(cart => (
          <Cart {...cart} onRemoveCart={handlerRemoveCart} key={cart.id} />
        ))}
      </div>
    </div>
  )
}

export default Carts
