let menu = {
  _meal: '',
  _price: 0,

//to check valid food entry
set meal(mealToCheck) {
  if (typeof mealToCheck === 'string'){
    return this._meal = mealToCheck;
  }
},
//to check valid price entry  
set price(priceToCheck) {
  if (typeof priceToCheck === 'number') {
    return this._price = priceToCheck;
  }
  }, 
//to return The Special  
 get todaysSpecial () {
   if (this._meal && this._price) {
     return `Today's Meal is ${this._meal} for ${this._price} dollars!`
   } else return 'Meal or price was not set correctly!'
 }
};
//to set the meal and the price
menu.meal = 'Pizza',
menu.price = 8;
//to print the meal+price
console.log(menu.todaysSpecial)






