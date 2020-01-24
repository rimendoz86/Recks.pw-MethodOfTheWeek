class PersonCS{
    constructor(initializer = {}){
        this.FirstName = null;
        this.LastName = null;
        this.DOB = null;
        this.Height = null;
        this.GetFullName = function (){
            return `${this.FirstName} ${this.LastName}`
        }
        Object.assign(this, initializer);
    }
}
let person = new PersonCS({
    FirstName: "John",
    LastName: "Doe",
    DOB: new Date("01/23/2019")
})
console.log(person);

function Teacher(){
    Object.assign(this, new PersonCS());
    this.TeacherID = 0;
    this.PrimarySubject = "English"
}
console.log(new Teacher());

function Student(){
    Object.assign(this, new PersonCS());
    this.StudentID = 0;
}
console.log(new Student());


var API  = {
    Response: () => {return JSON.parse('[{"FirstName":"John","LastName":"Doe","DOB":"2019-01-23T08:00:00.000Z","Height":5.5},{"FirstName":"Mary","LastName":"Jane","DOB":"1982-05-30T07:00:00.000Z","Height":5.7}]')}
}

var response = API.Response();

var models = response.map(element => {
    return Object.assign(new PersonCS(), element);
});
console.log(models[0].GetFullName());