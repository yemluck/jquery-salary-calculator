$(document).ready( onReady )

function onReady(){
    console.log('in onReady');

    $('#salaryForm').on('submit', recordSalary)
}

function recordSalary(event){
    // Prevent form from causing app to reload
    event.preventDefault();
    console.log('salary record added');
    
}