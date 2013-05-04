var clickCount = 0;

var tracker = -1;

var filled = true;

var height = "";

var width = "";

var message = "";

var bgColor = "";

var bWidth = "";

var bColor = "";

var init = function() {

}

var sampleClick = function() {

	var input = new Array();
	input[0] = Number(document.forms["boxInput"]["height"].value);
	input[1] = Number(document.forms["boxInput"]["width"].value);
	input[2] = document.forms["boxInput"]["message"].value;

	for(j=0; j<3; j++) {
		if (input[j] == "" || input[j] == 0) {
			filled = false;
		}else if(input[0] != 0 && input[1] != 0 && input[2] != "") {
			filled = true;
		}
	}

	
	if(isNaN(input[0]) == true || isNaN(input[1]) == true) {
		alert("Please use numbers only.");
	}else if(input[2] == "") {
		alert("Please input a message.");
	}else if (filled == false){
		alert("Please fill out all the boxes.");
	}else if(isNaN(input[0]) == false && isNaN(input[1]) == false && input[2] != ""){

		if(input[0] < 100 || input[0] >380){
			alert("Please fill in a Height between 100 and 380");
		}else if(input[1] < 150 || input[1] >450) {
			alert("Please fill in a Width between 150 and 450");
		}else {

			height= input[0];
			width= input[1];
			message= input[2];

			var radio = new Array();
			radio[0] = document.getElementById('RedBlk');
			radio[1] = document.getElementById('YlwBlk');
			radio[2] = document.getElementById('OrgRed');
			radio[3] = document.getElementById('BluGrn');
		
			for (i=0; i<4; i++) {
				if(radio[i].checked == true) {
					tracker = i;
				}
			}

			if(tracker == -1) {
				alert("Choose a color first.");
			}else if(tracker > -1) {
				if(document.getElementById('RedBlk').checked) {
					bgColor= "#8A0808";
					bWidth= 2;
					bColor= "#000000";
				}else if(document.getElementById('YlwBlk').checked) {
					bgColor= "#AEB404";
					bWidth= 5;
					bColor= "#000000";
				}else if(document.getElementById('OrgRed').checked) {
					bgColor= "#FF8000";
					bWidth= 3;
					bColor= "#B40404";
				}else if(document.getElementById('BluGrn').checked) {
					bgColor= "#2E9AFE";
					bWidth= 4;
					bColor= "#0B3B0B";
				}

				clickCount ++;

				sample.target = document.createElement("div");
				sample.target.style.borderStyle= "solid";
				sample.target.style.margin= "0 auto 5px";
				sample.target.style.position= "relative";
				sample.target.style.backgroundColor= bgColor;
				sample.target.style.borderWidth= bWidth + "px";
				sample.target.style.borderColor= bColor;
				sample.target.style.height= height - (bWidth * 2) + "px";
				sample.target.style.width= width - (bWidth * 2) + "px";

				document.getElementById('sample').appendChild(sample.target);

				var newP = document.createElement("p");
				newP.style.padding= "20px 30px";
				newP.innerHTML = message;

				sample.target.appendChild(newP);

				var newC = document.createElement("p");
				newC.textAlign= "right";
				newC.style.position= "absolute";
				newC.style.bottom= "0px";
				newC.style.right= "0px";
				newC.innerHTML = "Sample" + " " + clickCount;

				sample.target.appendChild(newC);

			}

		}

	}
	
}
