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



function decode(string) {
	let result = '';
	const decoder = {
	"a": 2,
	"b": 3,
	"c": 4,
	"d": 5
	}

var wordArray = string.split(" ");

	for(i=0; i<wordArray.length;i++) {

		if(wordArray[i][0] === 'a') {
		result += wordArray[i][decoder.a-1];
		}
		else if(wordArray[i][0] === 'b') {
		result += wordArray[i][decoder.b-1];
		}
		else if(wordArray[i][0] === 'c') {
		result += wordArray[i][decoder.c-1];
		}
		else if(wordArray[i][0] === 'd') {
		result += wordArray[i][decoder.d-1];
		}
		else {
		result += " ";
		}


	}
		return result;
}

var test = decode('craft block argon meter bells brown croon droop');

console.log(test);

function createCharacter(name,nick,race,origin,attack,defense){

  return {
    name,nick,race,origin,attack,defense,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin}.`
    },
    evaluateFight: function(character){
      var damageGiven = (this.attack - character.defense);
      damageGiven < 0 ? damageGiven=0 : damageGiven= damageGiven;
      var damageTaken = (character.attack - this.defense);
      damageTaken < 0 ? damageTaken=0 : damageTaken= damageTaken;

      return `Your opponent takes ${damageGiven} damage and you receive ${damageTaken} damage`;
    }
  }
}

var characters = [createCharacter("Gandalf the White","gandalf","Wizard","Middle Earth", 10, 6),
                  createCharacter("Bilbo Baggins", "bilbo", "Hobbit","The Shire", 2, 1),
                  createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
                  createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
                  createCharacter()
                ]
