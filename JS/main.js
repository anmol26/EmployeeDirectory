

let employees = [
	{
		firstName: 'Anmol',
		lastName: 'Khandelwal',
		preferredName: 'Anmol Khandelwal',
		email: 'a.khandelwal2672001@gmail.com',
		jobTitle: '.Net Development Lead',
		office: 'India',
		department: 'IT',
		phoneNumber: '9045436009',
		skypeId: 'anmol1234',
		photo: 'user.jpg',
	},
];

let displayEmployees = employees;


function openEmployeeForm() {
    let formPopup = document.getElementById("myForm");
    formPopup.style.display = "flex";
    formPopup.style.zIndex=999;

  }
function closeEmployeeForm(){
    document.getElementById("myForm").style.display = "none"; 
}
function clearsearch(){
    document.getElementById("search").value="";
    getHtmlForEmployeeList();   
}


function updateCount(){
    let dCount=0;
    let hCount=0;
    let mCount=0;
    let sCount= 0;
    let seattleCount=0;
    let indiaCount=0;
    let sphCount=0;
    let ndlCount=0;
    let reCount=0;
    let biCount=0;
    let baCount=0;
    for(let i in displayEmployees)
    {
        if(displayEmployees[i].department == 'IT')
        {
          dCount= dCount + 1;  
        }
        else if(displayEmployees[i].department == 'Human Resources')
        {
          hCount+= 1;  
        }
        else if(displayEmployees[i].department == 'MD')
        {
          mCount+= 1;  
        }
        else if(displayEmployees[i].department == 'Sales')
        {
          sCount+= 1;  
        }
        if(displayEmployees[i].office == 'Seattle')
        {
          seattleCount+= 1;  
        }
        else if(displayEmployees[i].office == 'India')
        {
          indiaCount+= 1;  
        }
        if(displayEmployees[i].jobTitle == 'SharePoint Practice Head')
        {
          sphCount+= 1;  
        }
        else if(displayEmployees[i].jobTitle == '.Net Development Lead')
        {
          ndlCount+= 1;  
        }
        else if(displayEmployees[i].jobTitle == 'Recruiting Expert')
        {
          reCount+= 1;  
        }
        else if(displayEmployees[i].jobTitle == 'BI Developer')
        {
          biCount+= 1;  
        }
        else if(displayEmployees[i].jobTitle == 'Business Analyst')
        {
          baCount+= 1;  
        }
    }
    document.getElementById("itNo").innerHTML= dCount;
    document.getElementById("hrNo").innerHTML= hCount;
    document.getElementById("mdNo").innerHTML= mCount;
    document.getElementById("salesNo").innerHTML= sCount;
    document.getElementById("seattleOffice").innerHTML= seattleCount;
    document.getElementById("indiaOffice").innerHTML= indiaCount;
    document.getElementById("sphNo").innerHTML= sphCount;
    document.getElementById("ndlNo").innerHTML= ndlCount;
    document.getElementById("reNo").innerHTML= reCount;
    document.getElementById("biNo").innerHTML= biCount;
    document.getElementById("baNo").innerHTML= baCount;
}

function getHtmlForEmployeeList() {
    var finalHtml = '';
    for (let a in displayEmployees)
    {
        var emp = displayEmployees[a];
        var employee = `<div class="employee">
        <img src="../Images/user.jpg" alt="Employee Image"/>
        <div class= "employee-details" >
        <h3>${emp.preferredName}</h3>
        <p>${emp.jobTitle}</p>
        <p>${emp.department} Department</p>
			<div class="icons">
			<ion-icon name="call"></ion-icon>
			<ion-icon name="mail"></ion-icon>
			<ion-icon name="text"></ion-icon>
			<ion-icon name="star"></ion-icon>
			<ion-icon name="heart"></ion-icon>
			</div>
		</div>
		</div>`;
		finalHtml += employee;
    }
    document.getElementById('employeeListSpace').innerHTML = finalHtml;
    updateCount();
}

function addEmployee(){
    displayEmployees.push(
        {   firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            preferredName:document.getElementById('preferredName').value,
            email:document.getElementById('email').value,
            jobTitle:document.getElementById('jobTitle').value,
            department: document.getElementById('department').value,
            office:document.getElementById('office').value,
            phoneNumber:document.getElementById('phoneNumber').value,
            skypeId:document.getElementById('skypeId').value,
        });
    closeEmployeeForm();
    updateCount();
    getHtmlForEmployeeList();
}

function getEmployeeByAttr(x){
    var finalHtml='';
    for(let b in displayEmployees)
    {
        var emp = displayEmployees[b];
        var name= emp.firstName;
        if(name.charAt(0) == x){
        var employee = `<div class="employee">
        <img src="../Images/user.jpg" alt="Employee Image"/>
        <div class= "employee-details" >
        <h3>${emp.preferredName}</h3>
        <p>${emp.jobTitle}</p>
        <p>${emp.department} Department</p>
			<div class="icons">
			<ion-icon name="call"></ion-icon>
			<ion-icon name="mail"></ion-icon>
			<ion-icon name="text"></ion-icon>
			<ion-icon name="star"></ion-icon>
			<ion-icon name="heart"></ion-icon>
			</div>
		</div>
		</div>`;
		finalHtml += employee;
        }
    }
    document.getElementById("employeeListSpace").innerHTML=finalHtml;

}

function getEmployeeByDetail(x){
    var finalHtml='';
    for(let c in displayEmployees)
    {
        var emp = displayEmployees[c];
        var employee = `<div class="employee">
        <img src="../Images/user.jpg" alt="Employee Image"/>
        <div class= "employee-details" >
        <h3>${emp.preferredName}</h3>
        <p>${emp.jobTitle}</p>
        <p>${emp.department} Department</p>
			<div class="icons">
			<ion-icon name="call"></ion-icon>
			<ion-icon name="mail"></ion-icon>
			<ion-icon name="text"></ion-icon>
			<ion-icon name="star"></ion-icon>
			<ion-icon name="heart"></ion-icon>
			</div>
		</div>
		</div>`;
        if(document.getElementById("filter").value=='firstName')
        {
        if(emp.firstName.includes(x))
        {
		finalHtml += employee;
        }
        }
    
        else if(document.getElementById("filter").value=='lastName')
        {
        if(emp.lastName.includes(x))
        {
		finalHtml += employee;
        }
        }

        else if(document.getElementById("filter").value=='preferredName')
        {
        if(emp.preferredName.includes(x))
        {
		finalHtml += employee;
        }
        }
        
        else if(document.getElementById("filter").value=='email')
        {
        if(emp.email.includes(x))
        {
		finalHtml += employee;
        }
        }

        else if(document.getElementById("filter").value=='jobTitle')
        {
        if(emp.jobTitle.includes(x))
        {
		finalHtml += employee;
        }
        }

        else if(document.getElementById("filter").value=='office')
        {
        if(emp.office.includes(x))
        {
		finalHtml += employee;
        }
        }

        else if(document.getElementById("filter").value=='department')
        {
        if(emp.department.includes(x))
        {
		finalHtml += employee;
        }
        }

        else if(document.getElementById("filter").value=='phoneNumber')
        {
        if(emp.phoneNumber.includes(x))
        {
		finalHtml += employee;
        }
        }

        else if(document.getElementById("filter").value=='skypeId')
        {
        if(emp.skypeId.includes(x))
        {
		finalHtml += employee;
        }
        }
    }
    document.getElementById("employeeListSpace").innerHTML=finalHtml;
}

function viewMore(){
    document.getElementById("viewMore").style.display="block";
    document.getElementById("aViewMore").style.display="none";
    document.getElementById("viewLess").style.display="block";  
}

function viewLess(){
    document.getElementById("viewMore").style.display="none";
    document.getElementById("aViewMore").style.display="block";
    document.getElementById("viewLess").style.display="none";  
}

function getEmployeeByFilter(y){
    var finalHtml='';
    for(let b in displayEmployees)
    {
        var emp = displayEmployees[b];
        var department= emp.department;
        var jobTitle= emp.jobTitle;
        var office= emp.office;
        if(department == y || jobTitle == y || office == y){
        var employee = `<div class="employee">
        <img src="../Images/user.jpg" alt="Employee Image"/>
        <div class= "employee-details" >
        <h3>${emp.preferredName}</h3>
        <p>${emp.jobTitle}</p>
        <p>${emp.department} Department</p>
			<div class="icons">
			<ion-icon name="call"></ion-icon>
			<ion-icon name="mail"></ion-icon>
			<ion-icon name="text"></ion-icon>
			<ion-icon name="star"></ion-icon>
			<ion-icon name="heart"></ion-icon>
			</div>
		</div>
		</div>`;
		finalHtml += employee;
        }
    }
    document.getElementById("employeeListSpace").innerHTML=finalHtml;
}
/////////////////////////////////////////////////////////////////////

// const target = document.querySelector('#alphabetSearchButtons')

// document.addEventListener('click', (event) => {
//   const withinBoundaries = event.composedPath().includes(target)

//   if (withinBoundaries) {
    
//   } else {
//     getHtmlForEmployeeList();
//   } 
// })