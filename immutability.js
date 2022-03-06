const defaultCart = [];

function addItem(cart, item){
	cart.push(item);
	return cart;
}

console.log(addItem(defaultCart, 'Pencil'));
