
var users = [
	{"name" : "Alec Dozac", "user" : "a.dozac"}, 
	{"name" : "Amanda Jeel", "user"  : "a.jeel"}, 
	{"name" : "Andrea Thompson", "user"  : "a.thompson"},  
	{"name" : "Ben Cakely", "user"  : "b.cakely"}, 
	{"name" : "Brad Wells", "user"  : "b.wells"}, 
	{"name" : "Chuck Wheeler", "user"  : "c.wheeler"}, 
	{"name" : "Crystal Licht", "user"  : "c.licht"}, 
	{"name" : "Daniel Brady", "user"  : "d.brady"}, 
	{"name" : "Frank Castle", "user"  : "f.castle"}, 
	{"name" : "Holly Peterson", "user"  : "h.peterson"}, 
	{"name" : "James Hoyt", "user"  : "j.hoyt"}, 
	{"name" : "Jane Wright", "user"  :  "j.wright" }, 
	{"name" : "Jennifer Bowler", "user"  : "j.bowler"}, 
	{"name" : "Josh Bile", "user"  : "j.bile"}, 
	{"name" : "Karen Holmes", "user"  : "k.holmes"}, 
	{"name" : "Lisa Delrose", "user"  : "l.delrose"}, 
	{"name" : "Michael Haynes", "user"  : "m.haynes"}, 
	{"name" : "Nate Kevans", "user"  : "n.kevans"}, 
	{"name" : "Patricia Emerson", "user"  : "p.emerson"}, 
	{"name" : "Paulina Luther", "user"  : "p.luther2"}, 
	{"name" : "Piotre Luther", "user"  : "p.luther"}, 
	{"name" : "Ronald Variable", "user"  : "r.variable"},
	{"name" : "Sandra Wilhelm", "user"  : "s.wilhelm"},  
	{"name" : "Scott Harlem", "user"  : "s.harlem"}, 
	{"name" : "Shannon Bott", "user"  : "s.bott"}, 
	{"name" : "Simon Smith", "user"  : "s.smith"}, 
	{"name" : "Steven Jobs", "user"  : "s.jobs"}, 
	{"name" : "Susan Taylor", "user"  : "s.taylor"}, 
	{"name" : "Ted Fritz", "user"  : "t.fritz"}, 
	];


var passwordsLOL = [
"9EfEsxCpUFXyqoj",
"zK2EWknpeP9iKPd",
"Zhu95Alz6oDOL8v",
"3o6nrWFnbt8YWSD",
"A7uFGxF2NEjXRl5",
"LsWwYTIT2AJKR52",
"8VxMCRFmoiHV6jx",
"i7EeXnqAQW8w7Ka",
"3IGOF2KOcU3iced",
"LXB4LsTqp6bR2pe",
"e89VcH0Qzpt5JMw",
"a90ARMBzj8NxHFu",
"ltxvgyfbD0RU1sh",
"XvpWJEolmSu9LTv",
"tzZPmNH3owIaSNU",
"7LFOcjYM6kARRRJ",
"wkcrVlfR6X4Dkua",
"BEh181ySEEncOFJ",
"7mANPIkjD8ttAEO",
"RHXAa0eTImoGqTB",
"I2Sm94dZrXleVkH",
"diLvIkEtXppj4In",
"eMty8wfy83zXGM0",
"7NKKrDC00X8nL7r",
"gyGHJSlzla9jcvr",
"WqIV6WRuXcK9bwF",
"fCmCRop7acUFGvy",
"thSfMxtlcQ8r6pf",
"oIBr9qw5OwX9JEX"];

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
	var resp = document.createElement("h3");
	resp.id = "resp";
	var z = false;
	for(var i = 0; i < users.length; i++){

		if(obj["user"] == users[i]["user"] && obj["password"] == passwordsLOL[i]){
		   while (form.firstChild) {
				form.firstChild.remove();
			}
			resp.innerHTML = "Welcome " + users[i]["name"];
			var x = document.createElement("button");
			var y = document.createElement("p");
			z = true;
			x.setAttribute("type", "button");
			x.innerHTML = "Check";
			y.innerHTML = "Check device status on HMI";
			y.style.textAlign = "center";
			x.addEventListener("click", serverStatus);
			form.appendChild(resp);
			form.appendChild(y);
			form.appendChild(x);
			break;
		   }else{
			   
		   	resp.innerHTML = "Invalid credentials, try again.";
			   	if(!document.getElementById("resp"))
			   form.appendChild(resp);

		   }
	}

}

function serverStatus(){

	if(!document.getElementById("status")){
		var x = document.createElement("p");
		x.innerHTML = "Server Response: 200. Service is running.";
		x.id = "status";
		x.style.color = "green";
		var form = document.querySelector("form");
		form.appendChild(x);
	}

}
