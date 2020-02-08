import React from 'react'
import './TextField.scss';
export default function TextField({value, onChange, placeholder, dataKey}) {
  return (
    <div className="wrapper-text-field">
      <input data-key={dataKey} onChange={onChange} placeholder={placeholder} value={value}/>
    </div>
  )
}
