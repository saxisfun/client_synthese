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




// écran ecran_dun_commentaire

function show_ecran_commentaire()
{
	
	
	
	
	x = document.getElementById('ecran_dun_commentaire');
	show_element(x);
}

function hide_ecran_commentaire()
{
	x = document.getElementById('ecran_dun_commentaire');
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





// écran chronomètre ???zzz

function show_chrono()
{
	x = document.getElementById('ecran_TEMPO');
	show_element(x);
}

function hide_chrono()
{
	x = document.getElementById('ecran_TEMPO');
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

function affiche_ecran_commentaire(un_timestamp, un_observ_id, un_usager_id, un_resume, lindx){


	hide_all();
	show_ecran_commentaire();
	
	
	
	
	
	document.getElementById('id_comm_timestamp_data').value = un_timestamp;
	document.getElementById('id_comm_observ_id_data').value = un_observ_id;
	document.getElementById('id_comm_usager_data').value = un_usager_id;
	document.getElementById('id_comm_resume_data').value = un_resume;	
	
	
	
	show_back_button();

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


// liste dex Comm

function show_liste_des_comm()
{
  [].forEach.call(document.querySelectorAll("div.la_liste1"), function(el) {
    show_element(el);
  });
}

function hide_liste_des_comm()
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
	objListViewComm.removeAllCommFromListView();
	
	hide_menu1();
	//hide_liste_des_comm();
	

	hide_dicti();
	hide_ecran_commentaire();
	hide_chrono();
	hide_geolocalisation();	

	hideLogin();
	
	

		
	hide_ecran_de_l_observation();

	
	
document.getElementById("tool_button_ajouter_comm").style.visibility="hidden";
	
	document.getElementById("tool_button_ajouter_observ").style.visibility="hidden";
	//document.getElementById("tool_button_rechercher").style.visibility="hidden";
	//document.getElementById("tool_button_seconnecter").style.visibility="hidden";
	

	
	
	

}

	
		
function effacer_ligne_div(le_idx)
{
	
	
	VConfirm=''
	VConfirm=VConfirm+'Êtes-vous certain de vouloir effacer cette observation?\n\n'
	if (confirm(VConfirm))
	{	
		objListViewObservations.deleteUneObservationFromListViewButton(le_idx);
		
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
	
	document.getElementById("id_bouton_liste_commentaires").innerHTML = localString['str_bouton_liste_des_comm'];
	document.getElementById("id_bouton_liste_des_observations").innerHTML = localString['str_bouton_liste_des_observs'];
	document.getElementById("id_bouton_setting").innerHTML = localString['str_bouton_parametres'];
	document.getElementById("id_utilisateur_label").innerHTML = localString['str_label_utilisateur'];
	document.getElementById("id_motDePasse_label").innerHTML = localString['str_label_motDePasse'];
	document.getElementById("id_actualiser").innerHTML = localString['str_bouton_actualiser'];
	
	
	
//	alert('JSON.parse(...):  '+localString['str_label_motDePasse']);
	
	
}



function onClickBoutonSaveObservation() 
{ 
	var le_titre = document.getElementById('id_ObservTitre_data').value;
	var le_resume = document.getElementById('id_ObservResume_data').value;
	

	var le_NoAutoGenereParlaDB = document.getElementById('id_ObservNoAutoGenereParlaDB_data').value;
	var le_NoDeLusager = document.getElementById('id_ObservNoDeLusager_data').value;	
	
	var le_id_de_loiseau = document.getElementById('id_Observ_id_oiseau_data').value;	

	
	
	
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
			
			
			observObject3.strObservFlagInsertUpdate = "I";
			
			
			/*
			Losrsque l'application démarre, elle fonctionne avec le localstorage uniquement.
			C'est seulement losqu'on pèse sur "synchro" que ces deux opérations se produisent
			
				1-l'application client upload vers le serveur des nouvelles observations et des observations modifiées.
					A-Si l'observation contien un NoAutoGenParLaDB ca veut dire qu'elle n'est pas nouvelle et doit être modifiée. 
						Étant donné que le nombre de photos peut changer l'ors d'une modification je suggère qu'on 
						efface l'observation au complet sur la DB et qu'on la ré-insert à nouveau. Puisque les photos sont dans l'observation et probablement les commentaires aussi.					
					
					B-Si l'observation ne contien pas un NoAutoGenParLaDB ca veut dire qu'elle est nouvelle et doit être insérée.
				
				2-Download les 20 dernières observations en ordre de dates décroissantes incluant celles qu'on vient juste de créer.
			

			
			remarque: le NoAutoGenParLaDB est un numéro qui sera automatiquement généré par la base de données à 
			la création d'une nouvelle observation et qui nous sera retourné.
			*/
			
			
			
			var tempDate = new Date().getTime();
			tempDate = parseFloat(tempDate); 

			
			observObject3.strObserv_DateObservation = tempDate;
			
			
			
			
			alert("Date: "+observObject3.strObserv_DateObservation);
			
			observObject3.strObserv_Id = parseInt(le_NoAutoGenereParlaDB, 10);
			observObject3.strObserv_IDOiseau = parseInt(le_id_de_loiseau, 10);
			observObject3.strObserv_IDUsager = parseInt(le_NoDeLusager, 10);
			observObject3.strObserv_Titre = le_titre;
			observObject3.strObserv_Resume = le_resume;
			observObject3.strObserv_Position_lat = parseFloat(le_PositionGPS_lat);
			observObject3.strObserv_Position_long = parseFloat(le_PositionGPS_long);
			
			objListViewObservations.ajouterUneObservationDans_myListViewObservArray(observObject3);
			
			objListViewObservations.saveObservToLocalStorage();  
		 }	
			
	
	
	}else{	
	
		
		//Si index existe ca veut dire qu'on modifie

		
	
		
		objListViewObservations.myListViewObservArray[id_cell_index].strObservFlagInsertUpdate="U";
		
		
		var tempDate = new Date().getTime();
		tempDate = parseFloat(tempDate); 
		
		
		objListViewObservations.myListViewObservArray[id_cell_index].strObserv_DateObservation=tempDate;
			
		
		objListViewObservations.myListViewObservArray[id_cell_index].strObserv_Id=parseInt(le_NoAutoGenereParlaDB, 10);
		objListViewObservations.myListViewObservArray[id_cell_index].strObserv_IDOiseau=parseInt(le_id_de_loiseau, 10);		
		objListViewObservations.myListViewObservArray[id_cell_index].strObserv_IDUsager=parseInt(le_NoDeLusager, 10);
		

		
		
		objListViewObservations.myListViewObservArray[id_cell_index].strObserv_Titre=le_titre;
		objListViewObservations.myListViewObservArray[id_cell_index].strObserv_Resume=le_resume;
		
		//objListViewObservations.myListViewObservArray[id_cell_index].strObservDiskName=varGlobalNomImage;
		//objListViewObservations.myListViewObservArray[id_cell_index].strObservDataURLPicture=JSON.stringify(laCamera1.agImgToCanvasToDataURL());	

		
		objListViewObservations.myListViewObservArray[id_cell_index].strObserv_Position_lat=parseFloat(le_PositionGPS_lat);
		objListViewObservations.myListViewObservArray[id_cell_index].strObserv_Position_long=parseFloat(le_PositionGPS_long);
			
	

		


		
		objListViewObservations.saveObservToLocalStorage();
	}
	

	
	
}



function onClickAjouterUneAutrePhoto() 
{ 
	var id_cell_index = document.getElementById('id_cell_index').innerHTML;
	prendreLImageDuCanvasEtLAjouterDansLesPhotosDunObservation(id_cell_index);
	
	//vider le ul
	removeAllPhotosFromUL();
	//ré-insérer les photos dans le UL et afficher					
	remplirEtAfficheLeULDesPhotos(id_cell_index);
}

function prendreLImageDuCanvasEtLAjouterDansLesPhotosDunObservation(le_index_oui) 
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
	

		
			observObject2.arrObservLesPhotos = objListViewObservations.myListViewObservArray[le_index_oui].arrObservLesPhotos;
			observObject2.strObserv_Id = objListViewObservations.myListViewObservArray[le_index_oui].strObserv_Id;

			//str_la_Id, dataURL_la_Photo, str_la_Photo_Descrip, str_la_IDObservation, str_la_ImageMiniature, str_la_Photo_Commentaire
		
		
			observObject2.ajouterUneAutrePhotoALobservation(0, dataUrl_img_strignified, "La descrip", observObject2.strObserv_Id, "",  varGlobalNomImage);
			
			
	
		
			
			
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
	//hide_element(back_button);	
	
	varGlobal_UserConnected = "0";
	
}

function onClickBoutonSeConnecter() 
{ 
	hide_all();
	showLogin();
	
	document.getElementById('tool_button_deconnecter').style.visibility='visible';
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


function onClickBoutonAjouterObservation(le_id_de_loiseau) 
{ 


	if (varGlobal_UserConnected == "1"){
		/*document.getElementById("img-tag-show-picture").setAttribute("src", "http://www.groupeallumage.com/templates/mytech-et/images/logo.png");*/

		hide_all();
		
		var valNum1 = objListViewObservations.getObservArrayLength();
		var valNum2 = objListViewObservations.myListViewObservArray.length;


		var observObject7 = new ClasseObservation();
		
		observObject7.strObservFlagInsertUpdate = "";
		
	var tempDate = new Date().getTime();
	tempDate = parseFloat(tempDate); 
	
	
		
		
		observObject7.strObserv_DateObservation = tempDate;
		observObject7.strObserv_Id = 0;
		observObject7.strObserv_IDOiseau = parseInt(le_id_de_loiseau, 10);
		observObject7.strObserv_IDUsager = parseInt(document.getElementById("id_utilisateur_d").value);		
		observObject7.strObserv_Titre = "";
		observObject7.strObserv_Resume = "";
		observObject7.strObserv_Position_lat = 0;
		observObject7.strObserv_Position_long = 0;		
	
		//objListViewObservations.ajouterUneObservationDans_myListViewObservArray(observObject2);
		
		afficheEcranObservations(observObject7, valNum2);


	}else{
		alert("Vous devez être connecté pour pouvoir ajouter des observations!");
	
	}




	
}


//a discuter avec la couche donnee
//Dans chacune des requetes il y aura le login et le mot de passe sauf pour les non loggés


	
function onClickButtonLogin()
{


	vUtil = document.getElementById("id_utilisateur_d").value;
	vPass = document.getElementById("id_motDePasse_d").value;
	
	//alert(vUtil+"/"+vPass);
	
	if(vUtil=="1111" && vPass=="bbbb"){
		//alert("onClickButtonLogin");
		hideLogin();
		//show_menu1();
		onClickButtonMenuListViewObserv();
		varGlobal_UserConnected = "1";
		
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


	afficherJsonDansTextarea();
	
	
	
	
	document.getElementById("tool_button_ajouter_comm").style.visibility="hidden";
	
	document.getElementById("tool_button_ajouter_observ").style.visibility="visible";

	document.getElementById("tool_button_rechercher").style.visibility="visible";
	document.getElementById("tool_button_seconnecter").style.visibility="visible";
	
	
	
	show_back_button();

}			


function getIndex(node){
  var childs = node.parentNode.childNodes;
  for (i = 0; i < childs.length; i++){
   //alert("i:"+i+", childs.length:"+childs.length);
   if (node == childs[i]) break;
  }
  return i;
}


function insererUnePhotoDansLeUL(indexObserv, indexPhoto) 
{ 
	//jjjjjjjjjjjjjjjjjjj
	
		
	var objUL = document.getElementById("id_ul_les_photos");
		
	var objLI = document.createElement('li');
	objLI.setAttribute('class', 'li_de_ul_des_photos');
		
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
	newRadio1.addEventListener('click',function(){effacerUnePhotoDuULListViewPhotos(indexObserv, getIndex(objLI))},false);	

	
	
	
	
	
	var dataPhoto2=objListViewObservations.myListViewObservArray[indexObserv].arrObservLesPhotos[indexPhoto].strPhoto_Image;
	
	
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



function afficheEcranObservations(un_observation_ici, la_index) 
{ 
	

	
	
	removeAllPhotosFromUL();
	  
	
	
	//document.getElementById('idTRInputDeLaPhoto').style.display='block';

	//varGlobal1=id_data_URLPic;
	hide_all();
	show_ecran_de_l_observation();
	//alert("la_index:"+la_index);
	//alert(id_ObservDescrip+"/"+id_ObservDiskName);
	
		
	document.getElementById('id_ObservFlagInsertUpdate_data').value = un_observation_ici.strObservFlagInsertUpdate;
	
	document.getElementById('id_ObservNoAutoGenereParlaDB_data').value = parseInt(un_observation_ici.strObserv_Id, 10);
	document.getElementById('id_ObservNoDeLusager_data').value = parseInt(un_observation_ici.strObserv_IDUsager, 10);
	document.getElementById('id_Observ_id_oiseau_data').value = parseInt(un_observation_ici.strObserv_IDOiseau, 10);		

		
	document.getElementById('id_ObservLaPositionGPS_lat_data').value = parseFloat(un_observation_ici.strObserv_Position_lat);
	document.getElementById('id_ObservLaPositionGPS_long_data').value = parseFloat(un_observation_ici.strObserv_Position_long);
	
	
	document.getElementById("id_ObservTitre_data").value = un_observation_ici.strObserv_Titre;
	document.getElementById("id_ObservResume_data").value = un_observation_ici.strObserv_Resume;
	

	var tempDate = parseFloat(un_observation_ici.strObserv_DateObservation); 
	
	
	document.getElementById("id_ObservTimeStamp_data").value = tempDate;
	document.getElementById("id_cell_index").innerHTML = la_index;	

	// objNode1 = document.getElementById("img-tag-show-picture");
	
	
	
	//var dataPhoto1=objListViewObservations.myListViewObservArray[la_index].strObservDataURLPicture;
	
	
	//alert("22222222222222222");
	
	showPicture1 = document.querySelector("#img-tag-show-picture");
	showPicture1.src = "";
		
	
	
	/*
	if(dataPhoto1!=null && dataPhoto1!=""){
		document.getElementById('img-tag-show-picture').setAttribute('src', JSON.parse(dataPhoto1));	
		 //alert("33333333333333333");		
	}
	*/
	
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
	array_les_photos = objListViewObservations.myListViewObservArray[la_index].arrObservLesPhotos;
	
	
	
	for (var i=0; i < array_les_photos.length; i++){
		//var dataPhoto2=objListViewObservations.myListViewObservArray[la_index].arrObservLesPhotos[i].strPhoto_Image;
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