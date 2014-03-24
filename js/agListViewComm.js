//Section pour l'affichage et le téléchargement des fichiers 



function ClasseListViewComm(myName) {
	//alert(myName);
	this.myListViewCommName = "777";
	this.myListViewCommArray = [];
}



ClasseListViewComm.prototype.agXMLHttpReqComm = function(le_url) {



	var storageFiles = JSON.parse(localStorage.getItem("storageFilesFichiers3")) || {},
		storageFilesDate = storageFiles.date1,
		date = new Date(),
		//todaysDate = (date.getMonth() + 1).toString() + date.getDate().toString();
		todaysDate = agConvertDate2(date);

	//alert(storageFilesDate+"/"+todaysDate); 
	// Vérifier si fichier existe et n'est pas trop vieux 
	//Télécharger seulement une fois par jour. Si pas date d'aujourd'hui on télécharge
	//if (typeof storageFilesDate === "undefined" || storageFilesDate != todaysDate)
	//if (typeof storageFilesDate === "undefined")
	//{

	//alert(le_url);
	try {
		var resourcePath = le_url;

		var request = new XMLHttpRequest();

		request.open("GET", resourcePath, true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				if (request.status == 200 || request.status == 0) {

					str_output = request.responseText;

					storageFiles.date1 = todaysDate;
					storageFiles.output = str_output;
					try {
						localStorage.setItem("storageFilesFichiers3", JSON.stringify(storageFiles));
					} catch (e) {
						alert("Storage failed: " + e);
					}

					objListViewComm.fillCommListView(str_output);

				}
			}
		}
		request.send();

	} catch (e) {
		//errorEvent(e);
	}
	//}
	// else {
	//   str_output = storageFiles.output;
	//   objListViewComm.fillCommListView(str_output); 
	//storageFiles.output = str_output;
	//}
}





ClasseListViewComm.prototype.addCommListViewCell = function(la_comm_id, la_timestamp, la_observ_id, la_usager_id, la_resume, l_in_dex) {


	var newDiv1 = document.createElement("div");
	newDiv1.setAttribute("class", "la_liste1");
	newDiv1.setAttribute("align", "left");

	newDiv1.id = "id_div_liste_commentaires";

	//newDiv1.addEventListener('click', test55, false)
	//newDiv1.addEventListener('click',function(){affichePageXXXXX(le_id, le_non_fich, le_url, la_descrip, la_date_eng)},false);

	une_date = convertTimeStampToDate(la_timestamp);

	var em_timestamp = document.createElement("em");
	var em_timestamp_content = document.createTextNode("Date: " + une_date);
	em_timestamp.setAttribute("class", "lvc_em_timestamp");
	em_timestamp.appendChild(em_timestamp_content);



	var em_usager_id = document.createElement("em");
	var em_usager_id_content = document.createTextNode("Usager: " + la_usager_id);
	em_usager_id.setAttribute("class", "lvc_em_usager");
	em_usager_id.appendChild(em_usager_id_content);


	var newP = document.createElement("p");
	var newPContent = document.createTextNode(la_resume);
	newP.appendChild(newPContent);

	var newDivTouch = document.createElement("div");
	newDivTouch.setAttribute("class", "divTouch");
	newDivTouch.addEventListener('click', function() {
		affiche_ecran_commentaire(la_comm_id, la_timestamp, la_observ_id, la_usager_id, la_resume, l_in_dex)
	}, false);








	newDiv1.appendChild(newDivTouch);

	newDiv1.appendChild(em_usager_id);
	newDiv1.appendChild(em_timestamp);


	newDiv1.appendChild(newP);



	my_mainDiv = document.getElementById("div_main");
	my_mainDiv.appendChild(newDiv1);



}


ClasseListViewComm.prototype.fillCommListView = function(le_str_output) {


	var localString = JSON.parse(le_str_output);



	/*
    alert(le_str_output);
	alert('le_str_output.length ' + le_str_output.length);
    alert('localString.result.length ' + localString.result.length);
	alert('id ' + localString['id']);
	alert('jsonrpc ' + localString['jsonrpc']);
	alert('total ' + localString['total']);
	alert('result ' + localString['result']);
	*/


	//var JSONstring=[{"key1":"value1","key2":"value2"},{"key3":"value3"}];

	for (var i = 0; i < localString.result.length; i++) {
		var obj = localString.result[i];



		/*
		alert(localString.result[i].id);
		alert(localString.result[i].filename);
		alert(localString.result[i].url);
		alert(localString.result[i].description);
		alert(localString.result[i].registered);	
			
		*/
		//la_timestamp, la_observ_id, la_usager_id, la_resume ,l_in_dex

		/*		
	document.getElementById('id_comm_id_data').value = un_timestamp;
	document.getElementById('id_comm_timestamp_data').value = un_timestamp;
	document.getElementById('id_comm_observ_id_data').value = un_observ_id;
	document.getElementById('id_comm_usager_data').value = un_usager_id;
	document.getElementById('id_comm_resume_data').value = un_resume;	
	*/

		objListViewComm.addCommListViewCell(localString.result[i].un_comm_id, localString.result[i].un_timestamp, localString.result[i].un_observ_id, localString.result[i].un_usager_id, localString.result[i].un_resume, i)
		/*
		 for(var key in obj){
				 var attrName = key;
				 var attrValue = obj[key];
				if(attrName=="id"){alert(attrName+"/"+attrValue);}
				if(attrName=="filename"){alert(attrName+"/"+attrValue);}
				//alert(attrName+"/"+attrValue);
				
				
			}
		*/
	}

}






ClasseListViewComm.prototype.removeAllCommFromListView = function(le_url) {


	var element = document.getElementById("div_main");
	//alert("removeAllCommFromListView");
	//alert("removeAllCommFromListView: "+element.childNodes.length);
	for (var i = 0; i < element.childNodes.length; i++) {
		var theObject = element.childNodes[i];

		//alert(theObject.className);
		if (theObject.className == "la_liste1") {
			//alert(theObject.className);
			theObject.parentNode.removeChild(theObject);
			i = -1;
			//element.removeChild(theObject);
		}
	}
}
