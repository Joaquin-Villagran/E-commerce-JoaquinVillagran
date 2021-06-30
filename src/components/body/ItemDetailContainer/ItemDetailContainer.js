import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import axios from 'axios';
//LINK ROUTER DOM
import { Link } from 'react-router-dom';
import './ItemDetailContainer.css';


function ItemDetailContainer({match}) {
	const [characters, setCharacters] = useState([]);
  let charID = match.params.id;


  useEffect(() => {

    axios(`https://breakingbadapi.com/api/characters/${charID}`).then((res) => {
        // console.log(res.data);
        setCharacters(res.data);
    });
}, [charID]);

	return (
		<div className='CharacterDetail'>
      <h1>DETALLES DEL PRODUCTO</h1>
			{characters.map((char) => {
				// console.log('id', char.char_id);
				return (
					<div key={char.id} className='CharacterCard-Container'>
						<Link to={`/detail/${char.id}`}>
							<ItemDetail data={char} />
						</Link>
					</div> //ITEM DETAIL
				);
			})}
		</div>
	);
}

export default ItemDetailContainer;
