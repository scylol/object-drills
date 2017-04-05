function createMyObject() {
	// body...
	return {
		foo: 'bar',
		answerToUniverse: 42,
		'olly olly': 'oxen free',
		sayHello: function() {
			return("hello");
		}
	}
}

function updateObject(obj){
	obj.foo = "foo";
	obj.bar = 'bar';
	obj.bizz = 'bizz';
	obj.bang = 'bang';
}


function personMaker() {
	var person = {
	firstName: 'Paul',
	lastName: 'Jones',
	foo: "sdsdfgsdfg",
	// replace `null` with a function that uses self reference to return
	// full name
	fullName: function(){
	return `${this.firstName} ${this.lastName}`
	}

	};
	return person;
}

function keyDeleter(obj){
	delete(obj.foo);
	delete(obj.bar);
}


//-------------------------------------------------------------------------------

function makeStudentsReport(data) {
	return data.map(function(d){
		return `${d.name}: ${d.grade}`

	});
}

var testData = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
  ];



 function findById(items, idNum) {
 	return items.find(item => item.id === idNum)
 }

 var testData = [
    {id: 1, foo: 'bar'},
    {id: 2, foo: 'bizz'},
    {id: 3, bang: 'boo'}
  ];


	//VALIDATE KEYS DRILL

	var objectA = {
  id: 2,
  name: 'Jane Doe',
  city: 'Chicago',
  age: 34,

 
}

// running the function with `objectA` and `expectedKeys`
// should return `false`
var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var expectedKeys = [
  'id', 'name', 'age', 'city'
];




function validateKeys(object, expectedKeys) {
 // your code here

if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  return expectedKeys.every(k => object[k] !== undefined);

	// var sortArr = expectedKeys.sort();
	// var sortArr2 = Object.keys(object).sort();
	// console.log(sortArr);
	// console.log(sortArr2);


	// return sortArr.every(function(el, ind){
		
	// return el === sortArr2[ind];
	// })

}

console.log("A: " + validateKeys(objectA,expectedKeys));
console.log("B: " + validateKeys(objectB,expectedKeys));


function makeToDos(owner, toDos) {
   // your code here
   return {
   	owner: owner,
   	toDos: toDos,
   	generateHtml: function() {

   		this.toDos.forEach(function(todo){
   			let html = '<li>' + todo + '</li>';
   			document.getElementById('main-list').insertAdjacentHTML('beforeend', html);
   		});
   		
   	}
   }
}



var toDos = ['get milk', 'walk dog', 'pay bills', 'eat dinner'];
var owner = 'Steve';
var myToDos = makeToDos(owner, toDos);