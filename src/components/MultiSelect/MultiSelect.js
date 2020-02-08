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

  const selectedItem = (data || []).filter(e => e.selected);
  const thePlaceholder = selectedItem.length > 0 ? selectedItem.map(e => e.label).join(', ') : placeholder
  
  return (
    <div className="wrapper-generic-multiSelect">
      <div className="wrapper-multiSelect-placeholder">
        <input readOnly ref={ref => theInput = ref} value={thePlaceholder} onBlur={handleBlur} onFocus={() => setVisible(true)}/>
      </div>
      {
        visible &&
        <div onMouseLeave={() => setDontBlur(false)} onMouseEnter={() => setDontBlur(true)} className="flex f-column wrapper-content-multiselect">
          {
            (data || []).map(e => (
              <label key={e.key}>
                {e.label}
                <input type="checkbox" checked={e.selected} onChange={() => handleClick(e.key)}/>
              </label>
            ))
          }
        </div>
      }
    </div>
  )
}
