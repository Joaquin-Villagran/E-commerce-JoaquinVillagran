import React, { useState } from "react";
import { Grid, Segment } from 'semantic-ui-react'
import './ItemCount.css'
import { Button } from "semantic-ui-react";

  const ItemCount =({stock,onAdd,initial,minValue,maxValue})=>{
    const [cantidad, setCantidad] = useState(0);

    const handleUp = () => {
      setCantidad(cantidad + 1);
    };
    const handleDown = () => {
      setCantidad(cantidad - 1);
    };
    return(
      <>
      <Grid columns='1' centered>       
        <Grid.Column width={3} >
          <Segment textAlign="center">
              <h1  >Contador</h1>
            <Button  positive onClick={handleUp}>+</Button >
            <Button  negative onClick={handleDown}>-</Button>
            <div className="btn" >{cantidad}</div>

            <hr/>
            <Button primary onClick= {()=>onAdd(cantidad)}
                >Agregar Al Carrito</Button>
          </Segment>
        </Grid.Column>
      </Grid>
      </>
    )
  }
export default ItemCount;
