$(document).ready( onReady )

// Global employee list
let employeeList = []




function onReady(){
    //console.log('in onReady');

    $('#salaryForm').on('submit', recordSalary)
}

function recordSalary(event){
    // Prevent form from causing app to reload
    event.preventDefault();
    console.log('salary record added');

    // grab data from form inputs

    let fName = $('#fName').val();
    let lName = $('#lName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = Number($('#annualSalary').val());

    let employee = {
        firstName: fName,
        lastName: lName,
        id: id,
        title: title,
        annualSalary: annualSalary
    };

    // add each employee to the employeeList
    employeeList.push(employee);

    console.log('employee', employee)
    
}