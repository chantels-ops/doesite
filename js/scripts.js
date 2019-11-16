
var users = [{"name" : "Alec Dozac", "user" : "a.dozac"}, {"name" :  "Jane Wright", "user"  :  "j.wright" }, {"name" : "Sandra Wilhelm", "user"  : "s.wilhelm"},  {"name" : "Amanda Jeel", "user"  : "a.jeel"}, {"name" : "Jennifer Bowler", "user"  : "j.bowler"}, {"name" : "Scott Harlem", "user"  : "s.harlem"}, {"name" : "Andrea Thompson", "user"  : "a.thompson"},  {"name" : "Josh Bile", "user"  : "j.bile"}, {"name" : "Shannon Bott", "user"  : "s.bott"}, {"name" : "Ben Cakely", "user"  : "b.cakely"}, {"name" : "Karen Holmes", "user"  : "k.holmes"}, {"name" : "Simon Smith", "user"  : "s.smith"}, {"name" : "Brad Wells", "user"  : "b.wells"}, {"name" : "Lisa Delrose", "user"  : "l.delrose"}, {"name" : "Steven Jobs", "user"  : "s.jobs"}, {"name" : "Chuck Wheeler", "user"  : "c.wheeler"}, {"name" : "Michael Haynes", "user"  : "m.haynes"}, {"name" : "Susan Taylor", "user"  : "s.taylor"}, {"name" : "Crystal Licht", "user"  : "c.licht"}, {"name" : "Nate Kevans", "user"  : "n.kevans"}, {"name" : "Ted Fritz", "user"  : "t.fritz"}, {"name" : "Daniel Brady", "user"  : "d.brady"}, {"name" : "Patricia Emerson", "user"  : "p.emerson"}, {"name" : "Frank Castle", "user"  : "f.castle"}, {"name" : "Paulina Luther", "user"  : "p.luther2"}, {"name" : "Holly Peterson", "user"  : "h.peterson"}, {"name" : "Piotre Luther", "user"  : "p.luther"}, {"name" : "James Hoyt", "user"  : "j.hoyt"}, {"name" : "Ronald Variable", "user"  : "r.variable"} ];

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

		if(obj["user"] == users[i]["user"]){
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
