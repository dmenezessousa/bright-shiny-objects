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
    user.age = age;
    return user;
}

//`incrementAge`=============================================================================================
function incrementAge(user){
    user.age++;
    return user;
}

//`fixCar`===================================================================================================
function fixCar(car){
    car.needsMaitenance = false;
    return car;
}

//`addGrades`================================================================================================
function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
    return student;

}
//`getDataType`==============================================================================================
function getDataType(car, key){
    return typeof car[key];

}

//`addTodo`==================================================================================================
function addTodo(todos, newTodo){
    todos.push(newTodo);
    return todos;

}

//`addSong`==================================================================================================
function addSong(playlist, newSong){
    playlist.songs.push(newSong);
    playlist.duration += newSong.duration;
    return playlist;
}

//`updateReportCard`=========================================================================================
function updateReportCard(reportCard, newGrades){
    reportCard.grades.push(newGrade);
    if(newGrades < reportGrades.lowestGrades){
        reportCard.lowestGradse = newGrades;
    }else if(newGrades > reportGrades.highestGrade){
        reportCard.highestGrade = newGrade;
    }
    let totalGrade = 0;
    for (let i = 0 ; i < reportCard.grades; i++){
        gradeSum += grade;
    }

    return reportCard;

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
