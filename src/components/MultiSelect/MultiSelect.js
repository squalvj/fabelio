import React from 'react'
import './MultiSelect.scss';
export default function MultiSelect({data, handleClick}) {
  return (
    <div className="wrapper-generic-multiSelect">
      <div className="wrapper-content-multiselect">
        {
          (data || []).map(e => (
            <label>
              {e.label}
              <input type="checkbox" checked={e.selected} onClick={() => handleClick(e.key)}/>
            </label>
          ))
        }
      </div>
    </div>
  )
}
