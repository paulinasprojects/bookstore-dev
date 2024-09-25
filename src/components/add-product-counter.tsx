import { useState } from "react"
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";

import "@/styles/add-product-count.scss";


const AddProductCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
};

    const handleClick2 = () => {
      setCounter(counter - 1);

      if (counter === 0) {
        setCounter(counter)
      }
  };

  return (
    <div className="add-product-counter-container">
      <div>
        <HiOutlineMinusSmall className="minus-icon" onClick={handleClick2}/>
      </div>
      <span className="counter-number">{counter}</span>
      <div>
        <HiOutlinePlusSmall className="plus-icon" onClick={handleClick1} />
      </div>
    </div>
  )
}

export default AddProductCounter