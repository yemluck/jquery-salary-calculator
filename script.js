$(document).ready( onReady )

// Global employee list
let employeeList = []




function onReady(){
    //console.log('in onReady');

    // handle submit button
    $('#salaryForm').on('submit', recordSalary);
    // You want the total salary to run on both addition
    // of staff and removal of staff
    $('#salaryForm').on('submit', totalSalary);
    

    // handle delete button
    //$('.deleteButton').on('click', deleteEmployee)
    $(document).on('click', '.deleteButton', deleteEmployee);
    $(document).on('click', '.deleteButton', totalSalary);


} // end function onReady

function totalSalary() {
    console.log('in function totalSalary');
    let sum = 0;
    for (let i = 0; i < employeeList.length; i++){
        sum += employeeList[i].annualSalary
    }
    console.log('total sum is', sum)
    // make sure to empty the spot
    $('#total').text('')
    // append to the empty slot

    let totalMonthly = Math.round(sum / 12);
    $('#total').append(totalMonthly)

    // Add a red background color, if total is more than $20,000
    if (totalMonthly > 20000) {
        $('#total').css('background', 'red');
    }
        // or better yet, use a CSS class to style the element
       // $('#total').addClass('overBudget');
 
    
} // end function totalSalary

function deleteEmployee() {
    //console.log('in deleteEmployee');
    $(this).parents('tr').remove();
    // delete record from global variable employeeList
    employeeList.splice($(this),1); // proud of myself. hehe
    // hehe, not so proud after finding the bug
    // I'm thinking it is the $(this) sythax that is messing it up
    // never trust the computer. Almost didn't catch the bug
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
    $('#fName').val('');
    $('#lName').val('');
    $('#id').val('');
    $('#annualSalary').val('');
    
} // end function recordSalary