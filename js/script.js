// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addForm');
    const employeeTable = document.getElementById('employee-table');
    const employeeCountOutput = document.getElementById('empCount');
    let employeeCount = 0;

    // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    function updateEmployeeCount() {
        employeeCountOutput.textContent = employeeCount;
    }

// ADD EMPLOYEE
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submitted!");


        const empId = document.getElementById('id').value;
        const empName = document.getElementById('name').value;
        const empExtension = document.getElementById('extension').value;
        const empEmail = document.getElementById('email').value;
        const empDepartment = document.getElementById('department').value;
        console.log("Employee Data: ", empId, empName, empExtension, empEmail, empDepartment);

        
        if (!empId || !empName || !empExtension || !empEmail || !empDepartment) {
            alert("All fields are required.");
            return;  
        }

        
        const existingRows = employeeTable.rows;
        for (let i = 1; i < existingRows.length; i++) {  
            const existingEmpId = existingRows[i].cells[0].textContent;
            if (existingEmpId === empId) {
                alert('Employee ID already exists!');
                return;  
            }
        }

        // Create a new row for the employee
        const newRow = employeeTable.insertRow();

        // Insert the employee details into new cells
        const cellId = newRow.insertCell();
        cellId.appendChild(document.createTextNode(empId));

        const cellName = newRow.insertCell();
        cellName.appendChild(document.createTextNode(empName));

        const cellExtension = newRow.insertCell();
        cellExtension.appendChild(document.createTextNode(empExtension));

        const cellEmail = newRow.insertCell();
        cellEmail.appendChild(document.createTextNode(empEmail));

        const cellDepartment = newRow.insertCell();
        cellDepartment.appendChild(document.createTextNode(empDepartment));

     // DELETE EMPLOYEE
        const cellDelete = newRow.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', function() {
            console.log(`Delete clicked for Employee ID: ${empId}`);
            const confirmation = confirm(`Are you sure you want to delete Employee ID: ${empId}?`);
            if (confirmation) {
                newRow.remove(); 
                employeeCount--;  
                updateEmployeeCount(); 
            }
        });
        cellDelete.appendChild(deleteButton);

        // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
        employeeCount++;
        updateEmployeeCount();
        
    // RESET THE FORM
        form.reset();
        document.getElementById('id').focus();  
    });
});