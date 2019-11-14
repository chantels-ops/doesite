window.onload = function(){

	var button = document.querySelector("[type='submit']");
	button.addEventListener("click", login);
	
	
};


function login(btn){
	btn.preventDefault();
	var form = document.querySelector("form");
	var obj = {};
	obj["user"] = form.un.value;
	obj["password"] = form.pw.value;
	
	info.push(obj);

}