import React from 'react'
import './TextField.scss';
export default function TextField({value, onChange, placeholder}) {
  return (
    <div className="wrapper-text-field">
      <input onChange={onChange} placeholder={placeholder} value={value}/>
    </div>
  )
}
