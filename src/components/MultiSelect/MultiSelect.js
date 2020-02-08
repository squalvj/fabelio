import React, {useState} from 'react'
import './MultiSelect.scss';
export default function MultiSelect({data, handleClick, placeholder}) {
  const [visible, setVisible] = useState(false);
  const [dontBlur, setDontBlur] = useState(false);
  let theInput;
  
  const handleBlur = e => {
    if (dontBlur){
      e.stopPropagation()
      theInput.focus()
      return;
    } 
    setVisible(false)
  }
  
  return (
    <div className="wrapper-generic-multiSelect">
      <div className="wrapper-multiSelect-placeholder">
        <input ref={ref => theInput = ref} value={placeholder} onBlur={handleBlur} onFocus={() => setVisible(true)}/>
      </div>
      {
        visible &&
        <div onMouseLeave={() => setDontBlur(false)} onMouseEnter={() => setDontBlur(true)} className="flex f-column wrapper-content-multiselect">
          {
            (data || []).map(e => (
              <label>
                {e.label}
                <input type="checkbox" checked={e.selected} onClick={() => handleClick(e.key)}/>
              </label>
            ))
          }
        </div>
      }
    </div>
  )
}
