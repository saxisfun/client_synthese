// contenu du fichier ???zzz



// écran d'observation

function show_ecran_de_l_observation()
{
	ecran_observation = document.getElementById('ecran_observation');
	show_element(ecran_observation);
}

function hide_ecran_de_l_observation()
{
	ecran_observation = document.getElementById('ecran_observation');
	hide_element(ecran_observation);
}


// liste d'observations

function showObservationListView()
{
  [].forEach.call(document.querySelectorAll("div.list_View_Observ"), function(el) {
    show_element(el);
  });
}

function hideObservationListView()
{
  // Remove the hash sign from the start of the id.    
  // Find all div.screen elements and hide them.
  [].forEach.call(document.querySelectorAll("div.list_View_Observ"), function(el) {
    hide_element(el);
  }); 
}


// écran des setting

function show_settings()
{
	x = document.getElementById('a_setting');
	show_element(x);
}

function hide_settings()
{
	x = document.getElementById('a_setting');
	hide_element(x);
}


// écran recherche dans le dictionnaire

function show_dicti()
{
	x = document.getElementById('ecran_recherche');
	show_element(x);
}

function hide_dicti()
{
	x = document.getElementById('ecran_recherche');
	hide_element(x);
}



// écran recherche dans le dictionnaire

function show_dicti2()
{
	x = document.getElementById('ecran_recherche2');
	show_element(x);
}

function hide_dicti2()
{
	x = document.getElementById('ecran_recherche2');
	hide_element(x);
}


// écran chronomètre ???zzz

function show_chrono()
{
	x = document.getElementById('ecran_timer');
	show_element(x);
}

function hide_chrono()
{
	x = document.getElementById('ecran_timer');
	hide_element(x);
}




// écran géolocalisation

function show_geolocalisation()
{
	x = document.getElementById('ecran_geolocalisation');
	show_element(x);
}

function hide_geolocalisation()
{
	x = document.getElementById('ecran_geolocalisation');
	hide_element(x);
}



// bouton BACK BUTTON

function show_back_button()
{
	back_button = document.getElementById('back_button');
	show_element(back_button);
}

function hide_back_button()
{
	back_button = document.getElementById('back_button');
	hide_element(back_button);
}



// liste dex fichiers

function show_liste_des_fichiers()
{
  [].forEach.call(document.querySelectorAll("div.la_liste1"), function(el) {
    show_element(el);
  });
}

function hide_liste_des_fichiers()
{
  // Remove the hash sign from the start of the id.    
  // Find all div.screen elements and hide them.
  [].forEach.call(document.querySelectorAll("div.la_liste1"), function(el) {
    hide_element(el);
  }); 
}






// Écran Menu 1

function hide_menu1()
{
  my_menu1 = document.getElementById("le_menu1");
  hide_element(my_menu1);
}

function show_menu1()
{
  my_menu1 = document.getElementById("le_menu1");
  show_element(my_menu1);
}




// CACHER LES ÉCRANS

function hide_all()
{
	//hide_liste_observs();
	//alert("CACHER LES ÉCRANS");
	hide_settings();
	objListViewObservations.removeAllObservFromListView();		
	removeAllFichiersFromListView();
	
	hide_menu1();
	//hide_liste_des_fichiers();
	
	hide_dicti()	
	hide_dicti2()	
	hide_chrono()
	hide_geolocalisation()	
	hideLogin();
	
	

		
	hide_ecran_de_l_observation();

	document.getElementById("tool_button_ajouter").style.visibility="hidden";
	document.getElementById("tool_button_rechercher").style.visibility="hidden";
	document.getElementById("tool_button_seconnecter").style.visibility="hidden";
	

	
	
	

}

		
function effacer_ligne_div_photo(le_idx)
{
	
	
	VConfirm=''
	VConfirm=VConfirm+'Êtes-vous certain de vouloir effacer cette observation?\n\n'
	if (confirm(VConfirm))
	{	
		objListViewObservations.deleteObservsFromListViewButton(le_idx);
		
		objListViewObservations.saveObservToLocalStorage();
		
	
		/*
			var observObject2 = new ClasseObservation();		
			observObject2.arrObservArrayLesObjetsAutresPhotos = objListViewObservations.myListViewObservArray[le_index_oui].arrObservArrayLesObjetsAutresPhotos;	
			observObject2.ajouterUneAutrePhotoALobservation("Photo 1",varGlobalNomImage,dataUrl_img_strignified);
		*/

		
		
	}else
	{
	
	}
	
	
}		

		
function effacer_ligne_div(le_idx)
{
	
	
	VConfirm=''
	VConfirm=VConfirm+'Êtes-vous certain de vouloir effacer cette observation?\n\n'
	if (confirm(VConfirm))
	{	
		objListViewObservations.deleteObservsFromListViewButton(le_idx);
		
		objListViewObservations.saveObservToLocalStorage();
		
	}else
	{
	
	}
	
	
}		
// écran login
		
function showLogin()
{
	le_ecran_login = document.getElementById('ecran_login');
	show_element(le_ecran_login);
}		

function hideLogin()
{
	le_ecran_login = document.getElementById('ecran_login');
	hide_element(le_ecran_login);
}



function get_lang_callback(le_str_output) 
{ 
	
//	alert('get_lang_callback:  '+le_str_output);
	
	localString = JSON.parse(le_str_output);
	
	document.getElementById("id_bouton_liste_fichiers1").innerHTML = localString['str_bouton_liste_des_fichiers'];
	document.getElementById("id_bouton_liste_des_observations").innerHTML = localString['str_bouton_liste_des_observs'];
	document.getElementById("id_bouton_setting").innerHTML = localString['str_bouton_parametres'];
	document.getElementById("id_utilisateur_label").innerHTML = localString['str_label_utilisateur'];
	document.getElementById("id_motDePasse_label").innerHTML = localString['str_label_motDePasse'];
	document.getElementById("id_actualiser").innerHTML = localString['str_bouton_actualiser'];
	document.getElementById("id_bouton_ajout_observation").innerHTML = localString['str_bouton_ajout_observation'];
	
	
//	alert('JSON.parse(...):  '+localString['str_label_motDePasse']);
	
	
}



function onClickBoutonSaveObservation() 
{ 
	var le_titre = document.getElementById('id_ObservTitre_data').value;
	var le_resume = document.getElementById('id_ObservResume_data').value;
	

	var le_NoAutoGenereParlaDB = document.getElementById('id_ObservNoAutoGenereParlaDB_data').value;
	var le_NoDeLusager = document.getElementById('id_ObservNoDeLusager_data').value;	
	
	
	var le_PositionGPS_lat = document.getElementById('id_ObservLaPositionGPS_lat_data').value;
	var le_PositionGPS_long = document.getElementById('id_ObservLaPositionGPS_long_data').value;
	
	
	
	
	
	
	
	
	
	
	/*
	var le_nom_de_limage = "";
	if(document.getElementById('take-picture')){
		le_nom_de_limage = document.getElementById('take-picture').value;	
	}
	*/
	
	var id_cell_index = document.getElementById('id_cell_index').innerHTML;
	

	//alert("id_cell_index:"+id_cell_index);
	
	
	if (objListViewObservations.checkSiIndexExiste(id_cell_index)!="1") {	
		//Index n'existe pas ca veut dire qu'on insert
		
	
		var test6432 = "";

		try {
			 //if (true) {
			 //      throw "An error";
			 // }
	
			  var test5434 = laCamera1.agImgToCanvasToDataURL();
			  test6432 = JSON.stringify(test5434);
			  return true;
		 } catch (e) {
			  alert (e);
			  return true;
		 } finally {
			//do cleanup, etc here
			//On sauvegarde le reste des données quand même si pas de photo  
			
			//alert("444444:"+varGlobalNomImage);

			
			var observObject3 = new ClasseObservation();

			observObject3.strObservNoAutoGenereParlaDB = le_NoAutoGenereParlaDB;
			observObject3.strObservNoDeLusager = le_NoDeLusager;
			observObject3.strObservTitre = le_titre;
			observObject3.strObservResume = le_resume;
			observObject3.strObservDiskName = varGlobalNomImage;
			observObject3.strObservDataURLPicture = test6432;
			observObject3.strObservLaPositionGPS_lat = le_PositionGPS_lat;
			observObject3.strObservLaPositionGPS_long = le_PositionGPS_long;
			observObject3.strObservFlagInsertUpdate = "";
			
			objListViewObservations.ajouterUneObservationDans_myListViewObservArray(observObject3);
			
			objListViewObservations.saveObservToLocalStorage();  
		 }	
			
	
	
	}else{	
	
		
		//Si index existe ca veut dire qu'on modifie

		
	
		
		
		objListViewObservations.myListViewObservArray[id_cell_index].strObservNoAutoGenereParlaDB=le_NoAutoGenereParlaDB;
		objListViewObservations.myListViewObservArray[id_cell_index].strObservNoDeLusager=le_NoDeLusager;
		
		
		
		
		objListViewObservations.myListViewObservArray[id_cell_index].strObservTitre=le_titre;
		objListViewObservations.myListViewObservArray[id_cell_index].strObservResume=le_resume;
		
		objListViewObservations.myListViewObservArray[id_cell_index].strObservDiskName=varGlobalNomImage;
		objListViewObservations.myListViewObservArray[id_cell_index].strObservDataURLPicture=JSON.stringify(laCamera1.agImgToCanvasToDataURL());	

		
		objListViewObservations.myListViewObservArray[id_cell_index].strObservLaPositionGPS_lat=le_PositionGPS_lat;
		objListViewObservations.myListViewObservArray[id_cell_index].strObservLaPositionGPS_long=le_PositionGPS_long;
			
	

		objListViewObservations.myListViewObservArray[id_cell_index].strObservFlagInsertUpdate="";


		
		objListViewObservations.saveObservToLocalStorage();
	}
	

	
	
}



function onClickAjouterUneAutrePhoto() 
{ 
	var id_cell_index = document.getElementById('id_cell_index').innerHTML;
	prendreLImageDuCanvasEtLAjouterDansLesAutresPhotosDunObjetObservation(id_cell_index);
	
	//vider le ul
	removeAllPhotosFromUL();
	//ré-insérer les photos dans le UL et afficher					
	remplirEtAfficheLeULDesPhotos(id_cell_index);
}

function prendreLImageDuCanvasEtLAjouterDansLesAutresPhotosDunObjetObservation(le_index_oui) 
{ 

	var test6432 = "";
	
	

	//if (objListViewObservations.checkSiIndexExiste(le_index_oui)!="1") {	
		//si Index n'existe pas ca veut que ca bug
	//}else{
		//Index existe alors on retrouve l'objet "Observation" et on insert une nouvelle photos (provenant du canvas) dans l'observation
		
		try {
			 //if (true) {
			 //      throw "An error";
			 // }
			
			  var dataUrl_img = laCamera1.agImgToCanvasToDataURL();
			  var dataUrl_img_strignified = JSON.stringify(dataUrl_img);
			  return true;
		 } catch (e) {
			  alert (e);
			  return true;
		 } finally {
		 
			
			var observObject2 = new ClasseObservation();
	

/*
			observObject2.strObservNoAutoGenereParlaDB = objListViewObservations.myListViewObservArray[le_index_oui].strObservNoAutoGenereParlaDB;
			observObject2.strObservNoDeLusager = objListViewObservations.myListViewObservArray[le_index_oui].strObservNoDeLusager;
			observObject2.strObservTitre = objListViewObservations.myListViewObservArray[le_index_oui].strObservTitre;
			observObject2.strObservResume = objListViewObservations.myListViewObservArray[le_index_oui].strObservResume;
		
	
			observObject2.strObservDiskName = objListViewObservations.myListViewObservArray[le_index_oui].strObservDiskName;

			observObject2.strObservDataURLPicture = objListViewObservations.myListViewObservArray[le_index_oui].strObservDataURLPicture;
	*/			
			observObject2.arrObservArrayLesObjetsAutresPhotos = objListViewObservations.myListViewObservArray[le_index_oui].arrObservArrayLesObjetsAutresPhotos;
/*
			observObject2.strObservLaPositionGPS_lat = objListViewObservations.myListViewObservArray[le_index_oui].strObservLaPositionGPS_lat;
			observObject2.strObservLaPositionGPS_long = objListViewObservations.myListViewObservArray[le_index_oui].strObservLaPositionGPS_long;						
			observObject2.strObservFlagInsertUpdate = objListViewObservations.myListViewObservArray[le_index_oui].strObservFlagInsertUpdate;
	*/
		
			
			//var dataPhoto2=objListViewObservations.myListViewObservArray[indexObserv].arrObservArrayLesObjetsAutresPhotos[indexPhoto].dataURLPhoto;
			//this.myListViewObservArray.push(observObject1);		
							
				
			//alert("strObservDiskName:"+observObject2.strObservDiskName);
			//objListViewObservations.ajouterUnObservationALobjetListViewObservations(le_titre, le_resume, varGlobalNomImage, test6432);
	
		
		
		
		
		
			observObject2.ajouterUneAutrePhotoALobservation("Photo 1",varGlobalNomImage,dataUrl_img_strignified);
			
			
	
		
			
			
			//objListViewObservations.saveObservToLocalStorage(); 

		}
		
	//}	
		
	
	
}







 


function onClickBoutonSupprimer() 
{ 
	//hide_all();
	//showLogin();
	
	objListViewObservations.removeSelectedObservsFromListView();
	objListViewObservations.saveObservToLocalStorage();
	
	
	
}


function onClickBoutonDeconnecter() 
{ 
	hide_all();
	//showLogin();
	//showObservationListView();
	
	onClickButtonMenuListViewObserv();
	
	
	document.getElementById('tool_button_deconnecter').style.visibility='hidden';
	document.getElementById('tool_button_seconnecter').style.visibility='visible';
	hide_element(back_button);	
}

function onClickBoutonSeConnecter() 
{ 
	hide_all();
	showLogin();
	
	document.getElementById('tool_button_deconnecter').style.visibility='hidden';
	document.getElementById('tool_button_seconnecter').style.visibility='hidden';
	hide_element(back_button);	
}



function onClickBoutonAjouterPhoto() 
{ 
	
	//document.getElementById('idTRInputDeLaPhoto').style.display='block'
	
	
	var objTD = document.getElementById("idTDInputDeLaPhoto");
	//document.getElementById("idTDInputDeLaPhoto").innerHTML = id_id_d_2;
		
	var input = document.createElement('input');
	/*input.class = 'classInputPhoto';*/
	input.type = 'file';
	input.accept = 'image/*';
	input.id = 'take-picture';


	var takePicture2 = document.querySelector("#take-picture");

    if (takePicture2 ) {
		//alert("Input existe")
	}else
	{	
		objTD.appendChild(input);
		//alert("Input existe pas");
	}
	
	
	
	

	laCamera1.activateCamera();

	//html5 createElement input appendChild accept image/*
	
}


function destroyTagInputFilePourLaPhotoPrincipale() 
{ 
	var objTD = document.getElementById("idTDInputDeLaPhoto");
	var olddiv = document.getElementById('take-picture');
	objTD.removeChild(olddiv);
	//html5 createElement input appendChild accept image/*
	
}


function onClickBoutonAjouterObservation() 
{ 


	/*document.getElementById("img-tag-show-picture").setAttribute("src", "http://www.groupeallumage.com/templates/mytech-et/images/logo.png");*/

	hide_all();
	
	var valNum1 = objListViewObservations.getObservArrayLength();
	var valNum2 = objListViewObservations.myListViewObservArray.length;


	
	
	afficheEcranObservations("", "","", "", "","","","","", valNum2);

	
}


//a discuter avec la couche donnee
//Dans chacune des requetes il y aura le login et le mot de passe sauf pour les non loggés


	
function onClickButtonLogin()
{


	vUtil = document.getElementById("id_utilisateur_d").value;
	vPass = document.getElementById("id_motDePasse_d").value;
	
	//alert(vUtil+"/"+vPass);
	
	if(vUtil=="aaaa" && vPass=="bbbb"){
		//alert("onClickButtonLogin");
		hideLogin();
		//show_menu1();
		onClickButtonMenuListViewObserv();
		varGlobal_UserConnected=true;
		
		document.getElementById("tool_button_deconnecter").style.visibility="visible";
		document.getElementById("tool_button_seconnecter").style.visibility="hidden";
		
		
		
	}else
	{
		//hideLogin();
		//show_menu1();
		//document.getElementById("tool_button_deconnecter").style.visibility="visible";
		
		alert("Accès refusé!\nle nom d'utilisateur est: aaaa\nle mot de passe est: bbbb");
	
	
	}


}		


function onClickTelechargerLeFichier()
{			
	

	id_id_d =  document.getElementById("id_id_d").innerHTML;
	id_filename_d =  document.getElementById("id_filename_d").innerHTML;
	id_registered_d =  document.getElementById("id_registered_d").innerHTML;
	id_gps_position =  "47.786e, -141.567w";	
			
			
	leGps1.getPosOnly(id_filename_d, id_gps_position, id_registered_d);
			
	
	
	
		//alert("appendGpsPosition");
}


		  
function onClickButtonMenuListViewObserv()
{
	

	hide_all();
	
	objListViewObservations.fillObservsListView();


	document.getElementById("tool_button_ajouter").style.visibility="visible";

	document.getElementById("tool_button_rechercher").style.visibility="visible";
	document.getElementById("tool_button_seconnecter").style.visibility="visible";
	
	
	
	show_back_button();

}			

		  
function onClickButtonMenu_ReadJsonInArrayListViewObserv()
{
	hide_all();
	
	var le_output_json = objListViewObservations.agXMLHttpRequestObservations();
	
	le_output_json_parsed = JSON.parse(le_output_json);
		
	for(var i=0; i < le_output_json_parsed.result.length;i++){

		var titVar = le_output_json_parsed;
		
		//alert(titVar.result[i].filename);
	
		//ClasseListViewObservations.prototype.ajouterUneObservationDans_myListViewObservArray = function("","",strObservTitre, strObservResume, strObservDiskName, the_pic_dataURL)
		
		
		
		var observObject2 = new ClasseObservation();

		observObject2.strObservNoAutoGenereParlaDB = "";
		observObject2.strObservNoDeLusager = "";
		observObject2.strObservTitre = titVar.result[i].filename;
		observObject2.strObservResume = titVar.result[i].description;
		observObject2.strObservDiskName = titVar.result[i].url;
		observObject2.strObservDataURLPicture = "";
		observObject2.strObservLaPositionGPS_lat = "";
		observObject2.strObservLaPositionGPS_long = "";		
		observObject2.strObservFlagInsertUpdate = "";
	
		objListViewObservations.ajouterUneObservationDans_myListViewObservArray(observObject2);
		
	







	/*
		alert(localString.result[i].id);
		alert(localString.result[i].filename);
		alert(localString.result[i].url);
		alert(localString.result[i].description);
		alert(localString.result[i].registered);	
		*/		
		
		
		//objListViewFichiers.addFichiersListViewCell(localString.result[i].id, localString.result[i].filename, localString.result[i].url, localString.result[i].description, localString.result[i].registered)
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
			

	
	
	objListViewObservations.fillObservsListView();


	document.getElementById("tool_button_ajouter").style.visibility="visible";
	document.getElementById("tool_button_rechercher").style.visibility="visible";
	document.getElementById("tool_button_seconnecter").style.visibility="visible";
	
	
	
	
	show_back_button();

}		




function insererUnePhotoDansLeUL(indexObserv, indexPhoto) 
{ 
	//jjjjjjjjjjjjjjjjjjj
	
		
	var objUL = document.getElementById("id_ul_les_photos");
		
	var objLI = document.createElement('li');
	var objDiv = document.createElement('div');
	objDiv.setAttribute('class', 'div_cellule_autres_photos');
	
	var objIMG1 = document.createElement('img');
	objIMG1.setAttribute('width', '100%');
	
	objIMG1.setAttribute("class", "img_autres_photos");
	
	
	
	//var newRadio1 = document.createElement("input");
	//newRadio1.setAttribute("type", "checkbox");
	//newRadio1.setAttribute('checked', '');
	//newRadio1.setAttribute("class", "checkbox_autres_photos");


		var newRadio1 = document.createElement("input");
	newRadio1.setAttribute("type", "button");
	//newRadio1.setAttribute('checked', '');
	newRadio1.setAttribute("class", "delete_button_photos");
	newRadio1.setAttribute("value", "Effacer");
	newRadio1.setAttribute("id", "bouton_effacer_ligne");
	newRadio1.addEventListener('click',function(){effacer_ligne_div_photo(le_index)},false);	

	
	
	
	
	
	var dataPhoto2=objListViewObservations.myListViewObservArray[indexObserv].arrObservArrayLesObjetsAutresPhotos[indexPhoto].dataURLPhoto;
	
	
	if(dataPhoto2!=null && dataPhoto2!=""){
		
		objIMG1.setAttribute('src', JSON.parse(dataPhoto2));
	}
	//insérer image dans le div
	

	objDiv.appendChild(objIMG1);
objDiv.appendChild(newRadio1);	

	//insérer div dans une ligne
	objLI.appendChild(objDiv);
	
	
	//insérer ligne dans le UL 
	objUL.appendChild(objLI);

}



function afficheEcranObservations(id_NoAutoGenereParlaDB, id_ObservNoDeLusager, id_ObservTitre, id_ObservDescrip, id_ObservDiskName, id_data_URLPic,id_FlagInsertUpdate, id_PositionGPS_lat, id_PositionGPS_long, la_index) 
{ 
	
	
	
	
	removeAllPhotosFromUL();
	  
	
	
	//document.getElementById('idTRInputDeLaPhoto').style.display='block';

	varGlobal1=id_data_URLPic;
	hide_all();
	show_ecran_de_l_observation();
	//alert("la_index:"+la_index);
	//alert(id_ObservDescrip+"/"+id_ObservDiskName);
	
		

	document.getElementById('id_ObservNoAutoGenereParlaDB_data').value = id_NoAutoGenereParlaDB;
	document.getElementById('id_ObservNoDeLusager_data').value = id_ObservNoDeLusager;
			

		
	document.getElementById('id_ObservLaPositionGPS_lat_data').value=id_PositionGPS_lat;
	document.getElementById('id_ObservLaPositionGPS_long_data').value=id_PositionGPS_long;
	

	
	
	
	
	document.getElementById("id_ObservTitre_data").value = id_ObservTitre;
	document.getElementById("id_ObservResume_data").value = id_ObservDescrip;
	document.getElementById("id_ObservDiskName_data").value = id_ObservDiskName;
	document.getElementById("id_cell_index").innerHTML = la_index;	

	// objNode1 = document.getElementById("img-tag-show-picture");
	
	
	
	var dataPhoto1=objListViewObservations.myListViewObservArray[la_index].strObservDataURLPicture;
	
	
	//alert("22222222222222222");
	
	showPicture1 = document.querySelector("#img-tag-show-picture");
	showPicture1.src = "";
		
	
	
	
	if(dataPhoto1!=null && dataPhoto1!=""){
		
		//context.clearRect(0, 0, canvas.width, canvas.height);
		//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

		
		
		
		
		
		document.getElementById('img-tag-show-picture').setAttribute('src', JSON.parse(dataPhoto1));
		
		 //alert("33333333333333333");
		
		
	}
	
	
	remplirEtAfficheLeULDesPhotos(la_index);
	
	
	
	
//jjjjjjjjjjjjjjjjjjjjj
	
	/*
	if(varGlobal1!=null && varGlobal1!=""){
		timer8  = window.setInterval( "window.clearInterval(timer8),document.getElementById('img-tag-show-picture').setAttribute('src', JSON.parse(varGlobal1))", 500 );
	}
	*/
	
	
		
	
	
}


function remplirEtAfficheLeULDesPhotos(la_index) 
{ 
	
	var objLeULDesPhotos = document.getElementsByClassName('id_ul_les_photos');
	//alert(objLeULDesPhotos.length+"/"+this.myListViewObservArray.length);
	
	//
	array_les_photos = objListViewObservations.myListViewObservArray[la_index].arrObservArrayLesObjetsAutresPhotos;
	
	
	
	for (var i=0; i < array_les_photos.length; i++){
		//var dataPhoto2=objListViewObservations.myListViewObservArray[la_index].arrObservArrayLesObjetsAutresPhotos[i].dataURLPhoto;
		//alert("remplirEtAfficheLeULDesPhotos:"+la_index);
		insererUnePhotoDansLeUL(la_index,i); 	
	}	
}



function removeAllPhotosFromUL()  {	
	
	var obj_LeULDesPhotos = document.getElementById("id_ul_les_photos");

	//alert("removeAllObservFromListView: "+obj_LeULDesPhotos.childNodes.length);
	for (var i=0; i < obj_LeULDesPhotos.childNodes.length; i++){
		var theObject = obj_LeULDesPhotos.childNodes[i];		
		theObject.parentNode.removeChild(theObject);
			i=-1;
	}
}

















// Execute the provided anonymous function when the DOM is ready.

/*

document.addEventListener("DOMContentLoaded", function() {
  var back_button = document.getElementById('back_button');
  // Set the switch_screen callback for the toolbar back button.
  set_click(back_button, function(e) { switch_screen(e.getAttribute('href')); });
  // Bind each of the buttons on the home screen to a switch_screen callback.
  [].forEach.call(document.querySelectorAll("ul.buttons a.switch_screen"), function(el) {
    set_click(el, function(e) { switch_screen(e.getAttribute('href')); });
  });
});


*/