import React from 'react'
import './Dropdown.scss';
export default function Dropdown({option, selected, onChange, dataKey}) {
  return (
    <div className="wrapper-generic-dropdown">
      <select data-key={dataKey} value={selected} onChange={onChange}>
       {(option || []).map(e => (
          <option key={e.value} value={e.value}>{e.label}</option>
       ))}
      </select>
    </div>
  )
}
