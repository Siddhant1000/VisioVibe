import React from 'react'
import Button from './Button'


export const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Soccer"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="News"/>
      <Button name="Olympics"/>
    </div>
  )
}
