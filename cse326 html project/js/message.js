function send_msg(){
	var fname = document.getElementById("first_name");
	var lname = document.getElementById("last_name");
	var email = document.getElementById("email");
	var phone = document.getElementById("phone_no");
	var msg = document.getElementById("message-text");
	var send_btn = document.getElementById("send_btn");
	
	if(fname.value == ""){
	   alert("Please enter your First Name");
	   return;
	 }
	 
	if(email.value == ""){
	   alert("Please enter your Email Id");
	   return;
	 }
	 
	if(msg.value == ""){
	   alert("Please enter your Message");
	   return;
	 }
	
	var name = fname.value+"";
    var firstLetter = name.substring(0,1).toUpperCase();
    var remLetters = name.substring(1).toLowerCase();
    
	name = firstLetter+remLetters;
	alert(name+", your message has been sent successfully!");
	
	fname.value = ""
	lname.value = ""
	email.value = ""
	phone.value = ""
	msg.value = "" 
	
}