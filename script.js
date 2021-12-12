$(document).ready( onReady )

// Global employee list
let employeeList = []




function onReady(){
    //console.log('in onReady');

    // handle submit button
    $('#salaryForm').on('submit', recordSalary);

    // handle delete button
    //$('.deleteButton').on('click', deleteEmployee)
    $(document).on('click', '.deleteButton', deleteEmployee);


} // end function onReady

function deleteEmployee() {
    console.log('in deleteEmployee');
    $(this).parents('tr').remove();
} // end function deleteEmployee




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
    }; // end employee object

    // add each employee to the employeeList
    employeeList.push(employee);

    // Empty <tbody> before rendering into it
    $('#employeeListId').empty();

    // console.log('employee', employee);

    // Render the employee List
    // Loop through employee list array
    // Render each employee as a <tr>

    for (staff of employeeList){
        $('#employeeListId').append(`
            <tr>
                <td>${staff.firstName}</td>
                <td>${staff.lastName}</td>
                <td>${staff.id}</td>
                <td>${staff.title}</td>
                <td>$${staff.annualSalary}</td>
                <td> <button class="deleteButton"> Delete</button> </td>
            </tr>
        `)
    }
    
} // end function recordSalary