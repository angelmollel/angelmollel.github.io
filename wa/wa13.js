

// Problem 1
const employee1 = { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true };
const employee2 = { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true };
const employee3 = { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false };

// Problem 2
const company = { companyName: 'Tech Stars', website: 'www.techstars.site', employees: [employee1, employee2, employee3] };

// Problem 3
const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

// Problem 4
const totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);
console.log('Total Salary for all employees:', totalSalary);

// Problem 5
function giveRaise(employee) {
    if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
    }
}

company.employees.forEach(giveRaise);

console.log('Company after salary raise:', company);

// Problem 6
const workingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
});

console.log('Company after updating WFH status:', company);
