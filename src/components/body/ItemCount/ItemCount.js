import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './ItemCount.css'

class ItemCount extends Component {
    constructor() {
        super();
        this.state = {
          counter: 0,
        };
    
        //this.handleCounterUp = this.handleCounterUp.bind(this);
      }
    handleCounterUp = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    handleCounterDown = () => {
        this.setState({ counter: this.state.counter - 1 });
    }
    render() {
        return (
            <div className='centrar'>
          <h3>CONTADOR</h3>
          <div className='btn'>
            <Button  positive onClick={this.handleCounterUp} >
              +
            </Button>
            <span className='span-counter'>{this.state.counter}</span>
            <Button negative onClick={this.handleCounterDown}>
              -
            </Button>
          </div>
        </div>
        )
    }
}
export default ItemCount;