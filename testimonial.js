function addTestiment(){
var userName = document.getElementById('personName').value;
var userTestiment = document.getElementById('testimonial').value;
database.ref('users/'+newUserKey+'/testiment').set(userTestiment);
database.ref('users/'+newUserKey+'/name').set("~"+userName+"~");
window.alert("Testiment has been created.");
}
