import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../css/ShopButton.module.css'

export default function ShopButton({ text }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  }
  return (
    <button className={classes.shopButton} onClick={handleClick}>
      {text}
    </button>
  )
}