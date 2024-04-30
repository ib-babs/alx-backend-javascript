import groceriesList from './9-groceries_list.js';
export default function updateUniqueItems(mapObj) {
  for (let index = 0; index < mapObj.size; index++) {
    console.log(mapObj.keys());
    console.log('Hey');
  }
}

const map = groceriesList();

updateUniqueItems(map);
console.log(map);
