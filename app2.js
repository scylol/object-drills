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




var myArray = [{name: "Donald", job_title:"Unemployed", boss: "Rich"},
{name: "Zach", job_title:"Chef", boss: "Rich"},
{name: "Rich", job_title:"Teacher"},];

myArray.forEach(function(value) {
  if(value.hasOwnProperty("boss")&&value.boss != undefined){
  console.log(`${value.job_title}: ${value.name} reports to ${value.boss}!`);
}else{
  console.log(`${value.job_title}: ${value.name} is the boss`);
}

});
