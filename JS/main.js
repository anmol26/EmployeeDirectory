
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
        firstName:'Vaibhav',
        department: 'MD',
        office:'Seattle',
        jobTitle:'Business Analyst'
    }
];

let displayEmployees = employees;

const filters=[
	{
		type: 'departments',
		names: [
			{
				name: 'it'
			},
			{
				name: 'hr'
			},
			{
				name: 'md'
			},
			{
				name: 'sales'
			},
		],
	},
	{
		type: 'offices',
		names: [
			{
				name: 'seattle'
			},
			{
				name: 'india'
			},
		],
	},
	{
		type: 'jobTitles',
		names: [
			{
				name: 'sph'
			},
			{
				name: 'ndl'
			},
			{
				name: 're'
			},
			{
				name: 'bi'
			},
			{
				name: 'ba'
			},
		],
	},
];

function openEmployeeForm() {
    document.getElementById("myForm").style.display = "block";
  }
function closeEmployeeForm(){
    document.getElementById("myForm").style.display = "none";
}
function clearsearch(){
    document.getElementById("search").value="";
}
//////////////nkjbk/////////////
function addEmployee(){
    displayEmployees.push({firstName:'dfg',department: 'Sales',office:'Seattle',jobTitle:'BI Developer'})
    updateCount();
}
/////////////////njnk/////////////

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

// function updateLeftSideBar(){
//     document.getElementById("itNo").innerHTML= displayEmployees[0].firstName;
// }