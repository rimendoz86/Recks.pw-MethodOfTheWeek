//basic representation of the class that will be used in the example
class Person{
    constructor(){
        this.Name = null;
        this.DOB = null;
        this.Height = null;
        this.Gender = null;
    }
}

class PersonCS{
    constructor(initializer = {}){
        this.Name = null;
        this.DOB = null;
        this.Height = null;
        this.Gender = null;
        this.SSN = null;
        Object.assign(this, initializer);
    }
}

let person = new PersonCS({
    Name: "John Doe",
    DOB: new Date("01/23/2019"),
    Height: 5.5,
    Gender: "M"
})
console.log(person);



//simulation of an API response
var API = {
    response = () => { return }
}

