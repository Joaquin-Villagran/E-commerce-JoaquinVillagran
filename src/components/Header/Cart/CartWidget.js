import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import '../Cart/CartWidget.css';

function CartWidget() {
    return  <Button animated='vertical' className='BtnCart'>
    <Button.Content hidden>Comprar</Button.Content>
    <Button.Content visible>
      <Icon name='shop' />
    </Button.Content>
  </Button>
}

export default CartWidget;