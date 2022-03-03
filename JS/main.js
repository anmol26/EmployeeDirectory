// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })

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

function openEmployeeForm() {
    document.getElementById("myForm").style.display = "block";
  }
function closeEmployeeForm(){
    document.getElementById("myForm").style.display = "none";
}
function clearsearch(){
    document.getElementById("search").value="";
}