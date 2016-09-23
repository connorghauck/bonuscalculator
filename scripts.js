// Each employee array should become an instance of an object (probably called something like Person).
// This will also mean that you need to adjust the rest of the logic to accept properties rather than array index.
// The original employees array that was used to store each person does not need to be converted to an object. Meaning that you can put your new Person objects inside of an array.
// Once you are complete, post to GitHub and submit via this app.


var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];



function person(employees){
    this.empName = employees[0];
    this.empId = employees[1];
    this.sal = parseInt(employees[2]);
    this.rat = employees[3];
}

var atticus = new person(arrayAtticus);
var jem = new person(arrayJem);
var boo = new person(arrayBoo);
var scout = new person(arrayScout);

var employees = [atticus, jem, boo, scout];




for (var i = 0; i < employees.length; i++) {
    var report = employeeReport(employees[i]);
    console.log(report);
}


function employeeReport(employee) {
    var employeeName = employee.empName;
    var employeeId = employee.empId;
    var salary = parseInt(employee.sal);
    var rating = employee.rat;
    var bonus = 0;




    var output = [];

    output[0] = employeeName;


    bonus = calcBonus(rating, employeeId, salary);
    output[1] = bonus;


    output[2] = salary + (bonus * salary);


    output[3] = Math.round(bonus * salary);

    return output;
}

function calcBonus(rating, id, salary) {
    var bonus = 0;



    switch (rating) {
      case 5:
        bonus = 0.1;
        break;
      case 4:
        bonus = 0.06;
        break;
      case 3:
        bonus = 0.04;
        break;
      default:
        bonus = 0;
    }


    if (id.length == 4) {
      bonus += 0.05;
    }


    if (salary > 65000) {
      bonus -= 0.01;
    }

    if (bonus > 0.13) {
      bonus = 0.13;
    }

    return bonus;
}
