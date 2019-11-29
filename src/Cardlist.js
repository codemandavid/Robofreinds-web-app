import React from 'react';
import Card from './card';

const Cardlist =({robots})  => {
const CardComponent = robots.map((user, i) => {
return  <Card 
key={i} 
id={robots[i].id} 
name={robots[i].name} 
email={[0].email } />
})
	return (

<div>
	{CardComponent}
	</div>







		);
}
export default Cardlist;