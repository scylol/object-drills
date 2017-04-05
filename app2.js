const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water/this.flour)*100;
  }
};

console.log(`flour: ${loaf.flour}\nwater: ${loaf.water}`);
console.log("hydration level is " +loaf.hydration());


const myObject = {
	foo: "1",
	bar: "2",
	fum: "3",
	quux: "4",
	spam: "5"
}

for(d in myObject) {
	console.log(myObject[d]);
}



const mealObj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log("Meal: " + mealObj.meals[3]);




var myArray = [{name: "Donald", job_title:"Unemployed"},
{name: "Zach", job_title:"Chef"},
{name: "Rich", job_title:"Teacher"},];

myArray.forEach(function(value) {
	console.log(`${value.name}: ${value.job_title}`);
});


