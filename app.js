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