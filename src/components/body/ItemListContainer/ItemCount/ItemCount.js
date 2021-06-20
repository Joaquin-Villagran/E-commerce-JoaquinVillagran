import React, { useState } from "react";
import { Grid, Segment } from 'semantic-ui-react'
import './ItemCount.css'
import { Button } from "semantic-ui-react";

function ItemCount() {
  const [number, setNumber] = useState(0);
  const handleUp = () => {
    setNumber(number + 1);
  };
  const handleDown = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <Grid columns='1' centered    >       
        <Grid.Column width={3} >
          <Segment>
              <h1 className="btn" >Contador</h1>
            <Button primary   onClick={handleUp}>+</Button >
            <p className="btn" >{number}</p>
            <Button secondary onClick={handleDown}>-</Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
export default ItemCount;
