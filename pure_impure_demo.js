// Constant array 
const defaultCart = [];
function addItem(cart, item){
	cart.push(item)
	return cart;
}







// Constant array 
const defaultCart = [];
// updating the array
function addItem(cart, item){
    cart[cart.length] = item;
	return cart;
}

// Not altering the array but creating a copy
const defaultCart = [];
function addItem(cart, item){
	userCart = [...cart];
	userCart.push(item);
	return userCart;
}


function addItem(arr, item){
    return [...arr, item];
}




// What if the function does not return anything?
function hello(name){
    helloName = 'hello ' + name;
}




function toUpperCase(arr){
    copyArr = [...arr];
    for(i = 0; i < copyArr.length; i++){
        copyArr[i] = copyArr[i].toUpperCase();
    } 

    return copyArr;
}






function toUpperCase(arr){
    return arr.map((element) => element.toUpperCase() );
}


// What about Random?

function randomWithId(name){
    return Math.random() + name;
}


// I/O Operation
function giveNumber(){
    console.log(number);
    return number;
}
