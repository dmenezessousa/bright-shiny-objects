// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
//`createUser`===============================================================================================
function createUser(name, last){
    let firstAndLastName = {firstName: name, lastName: last,}
    return firstAndLastName;
}

//`setAge`===================================================================================================
function setAge(user, age){
    let person = {firstName: user.firstName, lastName:user.lastName, age: age};
    return person;
}

//`incrementAge`=============================================================================================
function incrementAge(user){
    let addAge = {firstName: user.firstName, lastName:user.lastName, age: user.age + 1};
    return addAge;
}

//`fixCar`===================================================================================================
function fixCar(car){
    const newCar = {make: car.make ,model: car.model,year: car.year, needsMaitenance: false};
    return newCar;
}

//`addGrades`================================================================================================
function addGrades(students, grades){
    const newGrade = {name:'Anthony DeRosa' ,email: 'anthony.derosa@codeimmersives.com', grades: [80, 100, 95, 88, 70, 90]};
    return newGrade;
}
//`getDataType`==============================================================================================
function getDataType(car, make){
    const newCar = {make: car.make ,model: car.model,year: car.year, needsMaitenance: false};
    return typeof newCar[make];
}

//`addTodo`==================================================================================================
function addTodo(todos, newTodo){
    const addTodos = { title: 'Get gas', isComplete: false,
    title: 'Buy bread', isComplete: true,
    title: 'Call mom', isComplete: false};
    return addTodos;

}

//`addSong`==================================================================================================
function addSong(){

}

//`updateReportCard`=========================================================================================
function updateReportCard(){

}


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
