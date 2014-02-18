//Section pour l'affichage et le téléchargement des fichiers 



function addFichiersListViewCell(le_id, le_non_fich, le_url, la_descrip, la_date_eng)
{			
	var newDiv1 = document.createElement("div");
	newDiv1.setAttribute("class", "la_liste1");
	newDiv1.setAttribute("align", "left");
	
	newDiv1.id="id_div_liste_fichiers1";	
	
	//newDiv1.addEventListener('click', test55, false)
	newDiv1.addEventListener('click',function(){affichePageFichier(le_id, le_non_fich, le_url, la_descrip, la_date_eng)},false);
	
	var newH2 = document.createElement("h2");
	var newH2Content = document.createTextNode(le_non_fich);
	newH2.appendChild(newH2Content);
	
	var newP = document.createElement("p");
	var newPContent = document.createTextNode(le_url);
	newP.appendChild(newPContent);	

	newDiv1.appendChild(newH2);	
	newDiv1.appendChild(newP);	
	
	
				
	my_mainDiv = document.getElementById("main");  
	my_mainDiv.appendChild(newDiv1);
	
	
		
}



function remplir_le_list_view_des_fichiers(le_str_output) 
{ 
	localString = JSON.parse(le_str_output);

	//alert(localString.result.length);

	//alert(localString['id']);
	//alert(localString['jsonrpc']);
	//var JSONstring=[{"key1":"value1","key2":"value2"},{"key3":"value3"}];

	for(var i=0;i<localString.result.length;i++){
	var obj = localString.result[i];
		
		
		/*
		alert(localString.result[i].id);
		alert(localString.result[i].filename);
		alert(localString.result[i].url);
		alert(localString.result[i].description);
		alert(localString.result[i].registered);	
		*/		
		
		
		addFichiersListViewCell(localString.result[i].id, localString.result[i].filename, localString.result[i].url, localString.result[i].description, localString.result[i].registered)
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

function affichePageFichier(id_id_d_2, id_filename_d_2, id_url_d_2, id_description_d_2, id_registered_d_2) 
{ 
	//alert("affichePageFichier:"+id_id_d_2);
	hide_all();
	
	
	document.getElementById("id_id_d").innerHTML = id_id_d_2;
	document.getElementById("id_id_d2").innerHTML = "";
	document.getElementById("id_filename_d").innerHTML = id_filename_d_2;
	document.getElementById("id_url_d").innerHTML = id_url_d_2;
	

	document.getElementById("id_description_d").innerHTML = id_description_d_2;
	document.getElementById("id_registered_d").innerHTML = id_registered_d_2;
	
	varGlobal2=id_url_d_2;
	
	
	
	
	
	le_element = document.getElementById("id_bouton_telech_fichier");
	le_element.setAttribute("href", id_url_d_2);
	
	//location.href=sessionStorage.getItem("url_du_fichier_a_ouvrir_apres_position_trouve");
	//location.href=id_url_d_2;
	
	
	
}


function removeAllFichiersFromListView(le_url) 
{ 	
	var element = document.getElementById("main");
	//alert("removeAllFichiersFromListView");
	//alert("removeAllFichiersFromListView: "+element.childNodes.length);
	for (var i=0; i < element.childNodes.length; i++){
		var theObject = element.childNodes[i];		
		
		//alert(theObject.className);
		if(theObject.className == "la_liste1"){
			//alert(theObject.className);
			theObject.parentNode.removeChild(theObject);
			i=-1;		
			//element.removeChild(theObject);
		}
	}
}

