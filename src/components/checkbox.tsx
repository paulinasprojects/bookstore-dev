import { useState } from 'react';
import { Checkbox } from 'react-aria-components';



const SellectAllCheckbox = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Checkbox
      className="react-aria-Checkbox"
      isSelected={enabled}
      onChange={setEnabled}
    >
      <div className="checkbox">
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <polyline points="1 9 7 14 15 4" />
      </svg>
      </div>
    </Checkbox>
  )
}

export default SellectAllCheckbox;