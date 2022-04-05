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
    {
		firstName: 'Siva',
		lastName: 'Siddam',
		preferredName: 'Siva Siddam',
		email: 'siva.s@technovert.com',
		jobTitle: 'SharePoint Practice Head',
		office: 'Seattle',
		department: 'MD',
		phoneNumber: '6789453240',
		skypeId: 'siva1234',
		photo: 'user.jpg',
	},
    {
		firstName: 'Balaji',
		lastName: 'Kummari',
		preferredName: 'Balaji Kummari',
		email: 'balaji.k@technovert.com',
		jobTitle: 'Business Analyst',
		office: 'Seattle',
		department: 'Sales',
		phoneNumber: '8749453240',
		skypeId: 'balaji1234',
		photo: 'user.jpg',
	},
    {
		firstName: 'Koni',
		lastName: 'Aruva',
		preferredName: 'Koni Reddy Aruva',
		email: 'koni.a@technovert.com',
		jobTitle: 'BI Developer',
		office: 'India',
		department: 'IT',
		phoneNumber: '7849453240',
		skypeId: 'koni1234',
		photo: 'user.jpg',
	},
];

let displayEmployees = employees;


function closeEmployeeForm(){
    $("#myForm").hide();
}

function clearsearch(){
    $("#search").val("");
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
    $("#itNo").html(dCount);
    $("#hrNo").html(hCount);
    $("#mdNo").html(mCount);
    $("#salesNo").html(sCount);
    $("#seattleOffice").html(seattleCount);
    $("#indiaOffice").html(indiaCount);
    $("#sphNo").html(sphCount);
    $("#ndlNo").html(ndlCount);
    $("#reNo").html(reCount);
    $("#biNo").html(biCount);
    $("#baNo").html(baCount);
}

function getHtmlForEmployeeList() {
    var finalHtml = '';
    for (let a in displayEmployees)
    {
        var emp = displayEmployees[a];
        var employee = `<div class="employee col">
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
    $("#employeeListSpace").html(finalHtml);
    updateCount();
}

function addEmployee(){
    displayEmployees.push(
        {   
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            preferredName: $("#preferredName").val(),
            email: $("#email").val(),
            jobTitle: $("#jobTitle").val(),
            department: $("#department").val(),
            office: $("#office").val(),
            phoneNumber: $("#phoneNumber").val(),
            skypeId: $("#skypeId").val(),
        });
    $(".close").click();
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
    $("#employeeListSpace").html(finalHtml);

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
        if( $("#filter").val()=='firstName')
        {
        if(emp.firstName.includes(x))
        {
		finalHtml += employee;
        }
        }
        else if( $("#filter").val()=='lastName')
        {
        if(emp.lastName.includes(x))
        {
		finalHtml += employee;
        }
        }
        else if( $("#filter").val()=='preferredName')
        {
        if(emp.preferredName.includes(x))
        {
		finalHtml += employee;
        }
        }
        else if( $("#filter").val()=='email')
        {
        if(emp.email.includes(x))
        {
		finalHtml += employee;
        }
        }
        else if( $("#filter").val()=='jobTitle')
        {
        if(emp.jobTitle.includes(x))
        {
		finalHtml += employee;
        }
        }
        else if( $("#filter").val()=='office')
        {
        if(emp.office.includes(x))
        {
		finalHtml += employee;
        }
        }
        else if( $("#filter").val()=='department')
        {
        if(emp.department.includes(x))
        {
		finalHtml += employee;
        }
        }
        else if( $("#filter").val()=='phoneNumber')
        {
        if(emp.phoneNumber.includes(x))
        {
		finalHtml += employee;
        }
        }
        else if( $("#filter").val()=='skypeId')
        {
        if(emp.skypeId.includes(x))
        {
		finalHtml += employee;
        }
        }
    }
    $("#employeeListSpace").html(finalHtml);

}

function viewMore(){
    $("#viewMore").show();
    $("#aViewMore").hide();
    $("#viewLess").show();
}

function viewLess(){
    $("#viewMore").hide();
    $("#aViewMore").show();
    $("#viewLess").hide();
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
    $("#employeeListSpace").html(finalHtml);
}

function getEmployeeByButton(){
    const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var finalHtml='';
    for(let a in alpha){
        var x= ` <button
        type="button"
        class="btn rounded-0 btn-sm mt-1"
        id=${alpha[a]}
        onclick="getEmployeeByAttr('${alpha[a]}')"
      >
      ${alpha[a]}
      </button>`;
      finalHtml += x;
    }
    $("#buttonListSpace").html(finalHtml);
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            var invalidOptions = document.querySelectorAll(".form-control:invalid");

            invalidOptions.forEach(function (element) {
              element.parentNode.childNodes.forEach(function (node) {
                if (node.className == 'valid-feedback') {
                  node.classList.add('d-none');
                }
              });
            });
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();