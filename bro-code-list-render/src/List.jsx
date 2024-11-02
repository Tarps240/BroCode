/* eslint-disable react/jsx-key */


function List() {

const fruits = [{id: 1 name: "Guava", calories: 45},
                {id: 2 name: "Papaya", calories: 90},
                {id: 3 name: "Dragon Fruit", calories: 50},
                {id: 4 name: "Mango", calories: 30},
                {id: 5 name: "Coconut", calories: 159}];

const listItems = fruits.map(fruit => <li key = {fruit.id}>{fruit.name}</li>);

return(<ol>{listItems}</ol>);

};

export default List;