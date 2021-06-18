import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import "./ItemCount.css";

function ItemCount() {
  const [number, setState] = useState([]) 
  const handleUp = () => {
    setState(number + 1);
  };

  const handleDown = () => {
    setState(number - 1);
  }; 



  return (
    <>
      <div className="centrar">
        <h3>CONTADOR</h3>
        <div className="btn">
          <Button negative onClick={handleDown}>
            -
          </Button>

          <p className="span-counter">{number}</p>
          <Button positive onClick={handleUp}>
            +
          </Button>
        </div>
      </div>
    </>
  );
}
export default ItemCount;
