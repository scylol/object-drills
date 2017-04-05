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
  age: 34,
  city: 'Chicago'
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
return expectedKeys.every(k => object[k] !== undefined);

return expectedKeys.every(function(el, ind){
	return el === Object.keys(object)[ind];
})

}

console.log("A: " + validateKeys(objectA,expectedKeys));
console.log("B: " + validateKeys(objectB,expectedKeys));
