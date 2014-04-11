
/*





http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/Alerte/2


http://www.w3schools.com/html/html5_intro.asp

HTML5 - nouveau standard du HTML
Adapté spécifiquement pour livrer un contenu riche sans avoir besoin de plugin
-Animation graphique
-musique
-film
Et peut aussi être utiliser pour developper des Applications Web plus compliqués

Le version précédente  
HTML 4.01 arrivée en 1999

Nouvelles règles établies pour le HTML5:

    New features should be based on HTML, CSS, DOM, and JavaScript
    The need for external plugins (like Flash) should be reduced
	HTML5 should be device-independent


Qu'est qu'on a exploité du HTML5
	<canvas> 
		Resizer les images
		Transformé en base64
				
	<audio> 
		Sons d'oiseaux
		
	Le CSS
		Utilisation du GPU (visibility: hidden, visible)
		
	Local Storage
		Pour le Mode Hors connection
		
		
Alors comment c'est fait ?


Le HTML (Pseudo code)

Une page seulement (index.html)
	Pour donner le Look and feel d'une app native

<head>
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black"> 
    
	<!-- icons   -->
    <link rel="apple-touch-icon" sizes="57x57" href="img/Harfang_57x57" />
</head>


<body id="id_body" style="text-align:center;" >
	<div id="div_main" role="main">
		<div id="toolbar">
		<div id="le_menu1" class="screen hidden">
		<div id="ecran_login" style="" class="screen hidden">
		<div id="ecran_observation" class="screen hidden">
		<div id="ecran_dun_commentaire" class="screen hidden">
		<div id="liste_observation1" class="screen hidden">
		<div id="liste_commentaires" class="screen hidden">
		<div id="liste_especes" class="screen hidden">
		<div id="ecran_recherche" class="screen hidden">
		<div id="ecran_geolocalisation" class="screen hidden">
		<div id="ecran_notification" >
		<div id="ecran_settings" class="screen hidden">	
	</div>
</body>
	
Le Javascript
	
	<script type="text/javascript" src="js/main.js"></script>  				Exécution de l'app, Affichage des écrans, boutons
	<script type="text/javascript" src="js/agListViewObserv.js"></script>	ListView - Observation
	<script type="text/javascript" src="js/agListViewComm.js"></script>		ListView - Commentaires
	<script type="text/javascript" src="js/agTakePic.js"></script>			Conversion en base64, resize
	<script type="text/javascript" src="js/agOnOffLine.js"></script>		Détection de la connection
	<script type="text/javascript" src="js/agPhoto.js"></script>			Classe - Une photo
	<script type="text/javascript" src="js/agUneObserv.js"></script>		Classe - Une observation
	<script type="text/javascript" src="js/agULListViewPhotos.js"></script>	ListView - Photos dans l'observation
	<script type="text/javascript" src="js/ddDictJQ.js"></script>			ListView - Espèces
	<script type="text/javascript" src="js/ddListViewDict.js"></script>		ListView - Espèces
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true" ></script>	Google Map
	<script type="application/javascript" src="js/agWCFGetPost.js"></script> Call ajax vers le wcf	

	

	
Le CSS
	Coloration
	Affichage
	Animation - Blinking
	Animation - Menu en phase-in
		
	function show_element(el) {
		el.className = el.className.replace(/ ?hidden/gi, '');
	}

		

Présentation 
synchronisation
	faire démo de flush localstorage
cache fichier manifest
responsive design
traduction 2 langues json
les api utilisé
dictionnaire en json pour permettre le localstorage et l'utilisation en mode déconnecté
pour faire fonctionner en localstorage




1-
		
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
			

http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/Login/
http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/GetUsager/1


http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/GetObservation/1

http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/observation/1

http://periodiqco1.web703.discountasp.net/WCF_Synthese/ServiceWCF_Synthese.svc/observation

http://periodiqco1.web703.discountasp.net/WCF_Synthese/ServiceWCF_Synthese.svc/getOiseau/0/1
http://periodiqco1.web703.discountasp.net/WCF_Synthese/ServiceWCF_Synthese.svc/getOiseau/0/1


http://periodiqco1.web703.discountasp.net/WCF_Synthese/ServiceWCF_Synthese.svc/commentaire/1


http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/Alerte/
http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/deleteObservation/67

http://periodiqco1.web703.discountasp.net/WCF_Synthese/web/index2.html#


"NetworkError: 400 Bad Request - http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/deleteObservation/67"




Format de date
Date dans commentaire
Insert Observation
Delete Observation
Insert Commentaire
Delete commentaire




*/
function Callback(result) {
    alert(result); // string
    alert(result.d.Company);
    alert(result.d.ProjectEntities[1].CustomerEntity.LastName);
}
function onError(error) {
    alert("Error: " + error.message);
}
function init() {
    canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        contexte = canvas.getContext("2d");
        setInterval(draw, 1000);
    }
}

var ID;
function wcf_GetUsager() {
    ID = 1;
    
	//alert("1111122222");
	
	$.ajax({
        cache: false,
        type: "GET",
        async: false,
        dataType: "json",
        jsonp:true,
        url: "/WCF_Synthese/servicewcf_synthese.svc/GetUsager/" +ID,
        contentType: "application/json; charset=utf-8",
        processData: false,
        statusCode: {
            default: function () {
                //alert(status);
				document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------wcf_GetUsager statusCode--------\n"+obj+"\n\n";

				
            }
        },
        success: function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
			//alert("wcf_GetUsager success:"+obj);
			document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------wcf_GetUsager success--------\n"+obj+"\n\n";

			
			
            return obj;
           
                   },
        ajaxSuccess: function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
			//alert("wcf_GetUsager ajaxSuccess:"+obj);
 			document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------wcf_GetUsager ajaxSuccess--------\n"+obj+"\n\n";

			return obj;
           
                   },
        ajaxError: function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
			//alert("wcf_GetUsager ajaxError:"+obj);
			document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------wcf_GetUsager ajaxError--------\n"+obj+"\n\n";
		   
		   return obj;
           
                   },
        ajaxComplete:function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
             //alert("wcf_GetUsager ajaxComplete:"+obj);
			document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------wcf_GetUsager ajaxComplete--------\n"+obj+"\n\n";

			return obj;
           
                   }, 
        complete :function (data) {
            //obj = JSON.stringify(data);
            //alert("wcf_GetUsager complete:"+obj);
            document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------wcf_GetUsager complete--------\n"+obj+"\n\n";
			return obj;
           
                   },
        error: function (xhr, textStatus) {
            document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------wcf_GetUsager error:--------\n"+xhr.responseText+"\n\n";

			//alert("wcf_GetUsager error:"+xhr.responseText);
			
        }
    });

}

function wcf_Login( pUserName, pPassword) {
   
    data = pUserName+"/"+pPassword;
  



   $.ajax({
        cache: false,
        type: "GET",
        async: false,
        dataType: "json",
        jsonp: true,
        url: "/WCF_Synthese/servicewcf_synthese.svc/Login/" + data,
        contentType: "application/json; charset=utf-8",
        processData: false,
        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
           
			//obj = JSON.stringify(data, null, "\t");	
            //obj = JSON.parse(data);
			callBack_du_login(data);
		
			return data;

        },
        error: function (xhr, textStatus) {
            alert(xhr.responseText);
					
			//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "" +xhr.responseText;
	
			
			
        }
    });

}
function wcf_Logout() {

    $.ajax({
        cache: false,
        type: "GET",
        async: false,
        dataType: "json",
        jsonp: true,
        url: "/WCF_Synthese/servicewcf_synthese.svc/Logout",
        contentType: "application/json; charset=utf-8",
        processData: false,
        statusCode: {
            default: function () {
                alert(status);
            }
        },
        error: function (xhr, textStatus) {
            alert(xhr.responseText);
        }
    });

}

function dba_InsertUsager() {
 	

	/*
	
{"DateObservation":"2014-01-01","IDOiseau":1,"IDUsager":1,"Id":0,"Latitude":123,"Longitude":345,"Titre":"sdada"}




	 */		
	datas = {};
			
	datas.Courriel = v_dba_Courriel;			
	datas.EstAdministrateur = false;
	datas.MotDePasse = v_dba_txtMotDePasse;	
	//datas.MotDePasse = v_txtMotDePasse_verif;		
	datas.Nom = v_dba_txtNom;		
	datas.NomUsager = v_dba_TextNomUsager;	
	
	
		
	
    dataToSend = JSON.stringify(datas, null, "\t");
    //jsonp: true, processData: true,
	
	
	
	alert(dataToSend);
	
	
	
    $.ajax({
        type: "POST",
        dataType: "json",        
        url: "/WCF_Synthese/servicewcf_synthese.svc/InsertUsager",
        contentType: "application/json; charset=utf-8",
        data: dataToSend,
        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
            obj = JSON.stringify(data, null, "\t");
           /*
		   var msg = obj.valueOf('MessageErreur');
            if (msg != null){
                alert(obj.valueOf('MessageErreur'));
            }*/
           
			//alert("dba_InsertUsager response success :"+obj);
			//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "" +obj;
		   return obj;
			
			
			

        },
        error: function (xhr, textStatus) {
            
			  alert("dba_InsertUsager response error 13212"+xhr.responseText);
			//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "" +xhr.responseText;
			
			
        }
    });

}
/*
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
*/
function wcf_InsertLesPhotos(le_id_de_lobservation, un_observ2) {


	var str_un_observ2 = JSON.stringify(un_observ2, null, "\t");
	
	
	//document.getElementById("id_textarea_01").value=document.getElementById("id_textarea_01").value+"\n-----------------------str_un_observ2-----------------------\n"+str_un_observ2+"\n";

	
	//construire le json pour envoyer au wcf
	var obj_json_les_photos_a_envoyer = {};	
	obj_json_les_photos_a_envoyer.IDObservation = parseInt(le_id_de_lobservation, 10);
	obj_json_les_photos_a_envoyer.photoList = [];
	
	
	//prendre les images en base64 d'une observations et les mettre dans le json à envoyer
	//alert("un_observ2.arrObservLesPhotos.length:"+un_observ2.arrObservLesPhotos.length);
	if(un_observ2.arrObservLesPhotos.length > 0){
	
		for (var i=0; i < un_observ2.arrObservLesPhotos.length; i++){
			//pour chacune des objet ClassePhoto on prend ce qu'on a de besoin à envoyer
			var observ_une_photo = un_observ2.arrObservLesPhotos[i];
			//on a seulement besoin de la photo le reste on en a pas besoin
			
			
			
			
			
			var str_le_base64 = observ_une_photo.strPhoto_Image;
			
			//Je convertie le base64 comme Gabriel le veut
			str_le_base64 = str_le_base64.replace("data:image/png;base64,", "");
			str_le_base64 = str_le_base64.replace('\"', '');
			str_le_base64 = str_le_base64.replace('\"', '');
			
			//yea ca fonctionne	
			//str_le_base64 = Regex.Replace(str_le_base64, "\"", ""); 
			//str_le_base64 = Regex.Replace(str_le_base64, "\"", ""); 
			//       "\"iV        CC\""
			//str_le_base64 = str_le_base64+"==";
			
			


			var temp9876 ="";
			
			if (str_le_base64.length > 300){
				var temp9876 = str_le_base64.substr(0,23);
				//seulement pour afficher pour voir si il y a quelque chose
				//alert("ok yess go: "+temp9876);
				//observ_une_photo.strPhoto_url_big;
			
				//remplir le array de photos à envoyer au wcf seulement s'il y a un base 64 dedans
				//S'il n'y a pas de base64 dedans ca veut dire que cette photo on l'a recu du serveur avec un url et que l'image n'est pas dans notre mobile
				//donc on a pas besoin de l'envoyer elle a déja été envoyé
				obj_json_les_photos_a_envoyer.photoList.push(str_le_base64);		
			}
			
		} 
		
		//afficher le json des photos à envoyer dans le textarea
		var str_json_des_photos = JSON.stringify(obj_json_les_photos_a_envoyer);	
		//document.getElementById("id_textarea_01").value=document.getElementById("id_textarea_01").value+"\n-----------------------str_json_des_photos-----------------------\n"+str_json_des_photos+"\n";

		/*	
		Pour l'insertion d'une image :

		l'url du service :

		http://periodiqco1.web703.discountasp.net/WCF_Synthese/ServiceWCF_Synthese.svc/image
		Json :

		{"IDObservation":1,"photoList":["R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="]}

		Affichage d'une image :

		http://periodiqco1.web703.discountasp.net/WCF_Synthese/ServiceWCF_Synthese.svc/image/observation/4
		*/	

		//vérif s'il y a des photos a envoyer et les envoyer s'il y a lieu		
		
		//alert("33333333333333333333333: "+obj_json_les_photos_a_envoyer.photoList.length);
		
		//if(obj_json_les_photos_a_envoyer.photoList.length > 0){
		
		  $.ajax({
				type: "POST",
				dataType: "json",        
				url: "http://periodiqco1.web703.discountasp.net/WCF_Synthese/ServiceWCF_Synthese.svc/image",
				contentType: "application/json; charset=utf-8",
				data: str_json_des_photos,
				statusCode: {
					default: function () {
						alert(status);
					}
				},
				success: function (data) {
					var str_obj_succes_response = JSON.stringify(data, null, "\t");
					
					envoyer_au_serveur_les_observations_avec_photos();
					//alert("wcf_InsertLesPhotos str_obj_succes_response:\n"+str_obj_succes_response);
					
					//alert("wcf_InsertObservation response success:\n"+str_obj);
					//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "\n----str_obj_succes_response----------\n" +str_obj_succes_response;		
					

				},
				error: function (xhr, textStatus) {
				
					//alert("wcf_InsertLesPhotos response error:\n"+xhr.responseText);	
					document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "\n-----error booooo----------\n" +xhr.responseText;		
					envoyer_au_serveur_les_observations_avec_photos();
				}
			});		
		//}	
	
	
	
	}else{
	
		//continuer_le_loopage
		envoyer_au_serveur_les_observations_avec_photos();
	}

}





function wcf_InsertObservation(un_observ1) {
 	//http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/observation/1
	
	//Faire une copie du json importé avant de le modifier	
	var str_copie_observ_Object = JSON.stringify(un_observ1, null, "\t");
	
	//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "\n-----str_copie_observ_Object----------\n" +str_copie_observ_Object;		
	var copie_observ_Object = JSON.parse(str_copie_observ_Object);			

	un_observ2 ={"DateObservation":"2014-02-25","IDOiseau":1,"IDUsager":1,"Id":0,"Latitude":123,"Longitude":345,"Detail":"11aa1111111","Titre":"22ss222222"}	
	un_observ3 ={"IDUsager":1,"Id":0, "DateObservation":"2014-04-01 12:13:14", "Latitude":123, "Longitude":456, "IDOiseau":1, "Titre":"Mon observation", "Detail":"Vraiment cool"}	
	un_observ4 ={"IDUsager":1,"Id":0, "DateObservation":"2014-04-01 12:13:14", "Latitude":46.9218747, "Longitude":-71.37613929999999, "IDOiseau":1, "Titre":"Mon observation", "Detail":"Vraiment cool float"}

	un_observ1.strObserv_DateObservation = convertTimeStampToDate(un_observ1.strObserv_DateObservation);
	un_observ1.strObserv_IDOiseau = parseInt(un_observ1.strObserv_IDOiseau, 10);
	
	//alert("------strObserv_IDUsager--val------: "+un_observ1.strObserv_IDUsager);
	
	if(un_observ1.strObserv_IDUsager == "0" || un_observ1.strObserv_IDUsager == 0 || un_observ1.strObserv_IDUsager == ""){
		//alert("------strObserv_IDUsager---<1-----:"+un_observ1.strObserv_IDUsager.length);
		un_observ1.strObserv_IDUsager=varGlobal_UserConnected;
	}
	
	
	//un_observ1.strObserv_IDUsager = parseInt(un_observ1.strObserv_IDUsager, 10);
	
	
	
	
	
	//strObs_Ois_Nom
	//strObs_Ois_Espece
	//strObs_Usr_NomUsager
	//strObs_Usr_NomComplet
	
	
	un_observ1.strObserv_Position_lat = parseFloat(un_observ1.strObserv_Position_lat);
	un_observ1.strObserv_Position_long = parseFloat(un_observ1.strObserv_Position_long);
	//delete un_observ1["strObserv_Resume"];
	delete un_observ1["strObservFlagInsertUpdate"];
	delete un_observ1["arrObservLesPhotos"];
	delete un_observ1["strObserv_Oiseau"];
	delete un_observ1["strObserv_Usager"];
		
	dataToSend = JSON.stringify(un_observ1, null, "\t");
	dataToSend = dataToSend.replace(/strObserv_Id/g, "Id");
	dataToSend = dataToSend.replace(/strObserv_DateObservation/g, "DateObservation");
	dataToSend = dataToSend.replace(/strObserv_IDOiseau/g, "IDOiseau");
	dataToSend = dataToSend.replace(/strObserv_IDUsager/g, "IDUsager");
	
	//strObs_Ois_Nom
	//strObs_Ois_Espece
	//strObs_Usr_NomUsager
	//strObs_Usr_NomComplet
	
	dataToSend = dataToSend.replace(/strObserv_Position_lat/g, "Latitude");
	dataToSend = dataToSend.replace(/strObserv_Position_long/g, "Longitude");
	dataToSend = dataToSend.replace(/strObserv_Titre/g, "Titre");
	dataToSend = dataToSend.replace(/strObserv_Resume/g, "Detail");

	//alert("79999999:"+ereeddree);
	
	//dataToSend = JSON.stringify(un_observ4, null, "\t");	
	document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "\n-----wcf_InsertObservation---dataToSend-----\n" +dataToSend;		

	
	//alert(dataToSend);
	
	
    $.ajax({
        type: "POST",
        dataType: "json",        
        url: "/WCF_Synthese/ServiceWCF_Synthese.svc/observation",
        contentType: "application/json; charset=utf-8",
        data: dataToSend,
        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
            var str_obj = JSON.stringify(data, null, "\t");
			//alert("le_obj:\n"+data.Id);
			//alert("wcf_InsertObservation response success:\n"+str_obj);
			//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "\n----wcf_InsertObservation response success-str_obj----------\n" +str_obj;	
			//un_observ2
			
			wcf_InsertLesPhotos(data.Id, copie_observ_Object); 		
			
		   //return obj;

        },
        error: function (xhr, textStatus) {
		
			alert("wcf_InsertObservation response error:\n"+xhr.responseText);	
			document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "\n-----error booooo----------\n" +xhr.responseText;		

        }
    });
	
	

}



//1-Aller activer les alertes pour un usager (pouvoir modifier un usager pour activer les alertes) l'url que je dois utiliser?
//2-Aller activer les alertes pour une espèce,  c'est quoi l'url?


//onClickBoutonActiverAlertePourUnOiseau



function wcf_InsertUnAlert(le_id_du_user, le_id_de_loiseau){

    /*datas = { "IDOiseau": "9",
                "IDUsager": "1" };*/
			
			
	 datas = { "ID": "1", 
                "IDOiseau": "8", 
                "IDUsager": "1" };		
			
			
			
			
			
//{"IDOiseau":"1","IDUsager":"1"}


			
	datas.IDUsager = le_id_du_user.toString();		
	datas.IDOiseau = le_id_de_loiseau.toString();
	

    dataToSend = JSON.stringify(datas)
    //jsonp: true, processData: true,
	
	//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "\n----dataToSend--------\n"+dataToSend+"\n";		
	
	alert(dataToSend);
	
	
	
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/WCF_Synthese/servicewcf_synthese.svc/Alerte",
        contentType: "application/json; charset=utf-8",
        data: dataToSend,
        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
            obj = JSON.stringify(data);
            var msg = obj.valueOf('MessageErreur');
            if (msg != null){
                alert(obj.valueOf('MessageErreur'));
				
				//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + "\n----obj--------\n"+obj+"\n";	
				
				
            }
			
			alert("wcf_InsertUnAlert success:"+obj);
			
            return obj;
			
			

        },
        error: function (xhr, textStatus) {
           // alert(xhr.responseText);
				 alert("wcf_InsertUnAlert error:"+xhr.responseText);
        }
    });
	
}


//3- Obtenir les alertes d'un usager
//http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/Alerte/1
function GetAlerts(){

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/WCF_Synthese/servicewcf_synthese.svc/Alerte/1",
        contentType: "application/json; charset=utf-8",

        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
            obj = JSON.stringify(data);
            var msg = obj.valueOf('MessageErreur');
            if (msg != null){
                alert(obj.valueOf('MessageErreur'));
            }
            return obj;

        },
        error: function (xhr, textStatus) {
            alert(xhr.responseText);
        }
    });
}
/*
4- Supprimer les alertes
Si tu passe l'ID > 0, je ne supprime que cette alerte
Si tu passes seulement IDOiseau > 0 je supprime toutes les alertes de cet oiseau
Si tu passes seulement l'IDUsager > 0 je supprime toutes les alertes de cet usager
*/
function DeleteAlert(){


    datas = { "ID": "1",
                "IDOiseau": "1",
                "IDUsager": "1" };

    dataToSend = JSON.stringify(datas)
    //jsonp: true, processData: true,
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: "/WCF_Synthese/servicewcf_synthese.svc/Alerte",
        contentType: "application/json; charset=utf-8",
        data: dataToSend,
        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
            obj = JSON.stringify(data);
            var msg = obj.valueOf('MessageErreur');
            if (msg != null){
                alert(obj.valueOf('MessageErreur'));
            }
            return obj;

        },
        error: function (xhr, textStatus) {
            alert(xhr.responseText);
        }
    });
}

//Pour le reste, je laisse ça à Gabriel



//de Gabriel
//Pour la supression d'une observation :
//WCF_Synthese/servicewcf_synthese.svc/deleteObservation/{id}

//ou {id} est l'id de l'observation

//Pour la supression d'un commentaire
//WCF_Synthese/servicewcf_synthese.svc/deletecommentaire/{id}

//Ou {id} est l'id du commentaire

//Les deux calls sont en GET 

function DeleteObservation(le_id_de_lobs){
	//alert("le_id_de_lobs:"+le_id_de_lobs);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/WCF_Synthese/servicewcf_synthese.svc/deleteObservation/"+le_id_de_lobs,
        contentType: "application/json; charset=utf-8",

        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
            obj = JSON.stringify(data);
            var msg = obj.valueOf('MessageErreur');
            if (msg != null){
                //alert(obj.valueOf('MessageErreur'));
            }
			 //alert("DeleteObservation success:"+obj);
			 
			 	//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + obj+"\n--------------DeleteObservation success------------\n\n";
			 
            return obj;

        },
        error: function (xhr, textStatus) {
            alert("DeleteObservation error:"+xhr.responseText);
			
			
				//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value + xhr.responseText+"\n--------------DeleteObservation error------------\n\n";
			
        }
    });
}

function DeleteCommentaire(le_id_du_comm){
	alert("le_id_du_comm:"+le_id_du_comm);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/WCF_Synthese/servicewcf_synthese.svc/deletecommentaire/"+le_id_du_comm,
        contentType: "application/json; charset=utf-8",

        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
            obj = JSON.stringify(data);
            var msg = obj.valueOf('MessageErreur');
            if (msg != null){
                alert(obj.valueOf('MessageErreur'));
            }
			 alert("DeleteObservation success:"+obj);
            return obj;

        },
        error: function (xhr, textStatus) {
            alert("DeleteObservation error:"+xhr.responseText);
        }
    });
}



function dba_InsertUnCommentaire() {
 	
	
/*	

Pour ajouter une commentaire :



Le Json à me passer pour l'ajout :

{"IDUsager":1,"Id":0,"Texte":"blabla","observationId":1}



Je viens de livrer des modification :

La suppression de l'observation devrait fonctionner.
J'ai ajouté le code pour envoyer l'alerte à la création d'un observation
L'id du commentaire est corrigé
J'ai commencé l'update de l'observation mais ce n'est pas fonctionnel encore... (demain!)

Pour l'ID je pourrai juste regarder demain, je suis en visite dans la famille ce soir!


*/		






//json de départ des données
datas = {"IDUsager":1,"Id":1,"Texte":"blabla","observationId":110}

/*
json d'arrivée des données
[
  {
    "Date": "2014-04-07 21:04:39",
    "IDUsager": 1,
    "Id": 7,
    "Texte": "blabla",
    "observationId": 1
  },
  {
    "Date": "2014-04-07 21:04:39",
    "IDUsager": 1,
    "Id": 6,
    "Texte": "blabla",
    "observationId": 1
  }
]
*/
	datas.Date = document.getElementById('id_comm_timestamp_data').value;
	
	datas.Date = convertTimeStampToDate(datas.Date);
	
	//datas.IDUsager = document.getElementById('id_comm_usager_id_data').value;	
	datas.IDUsager = varGlobal_UserConnected;


	
	datas.Id = "0";
	datas.Texte = document.getElementById('id_comm_resume_data').value;		
	datas.observationId = document.getElementById('id_comm_observ_id_data').value;;		
	

	
/*
	le_json.comm_Id = document.getElementById('id_comm_id_data').value;
	le_json.comm_Date = document.getElementById('id_comm_timestamp_data').value;
	le_json.comm_ObservationId = document.getElementById('id_comm_observ_id_data').value;
	le_json.comm_UserId = document.getElementById('id_comm_usager_id_data').value;
	le_json.comm_Resume = document.getElementById('id_comm_resume_data').value;
*/	
	
		
	
    dataToSend = JSON.stringify(datas, null, "\t");
    //jsonp: true, processData: true,
	
	
	
	//alert(dataToSend);
	
	
	
    $.ajax({
        type: "POST",
        dataType: "json",        
        url: "/WCF_Synthese/ServiceWCF_Synthese.svc/Commentaire",
        contentType: "application/json; charset=utf-8",
        data: dataToSend,
        statusCode: {
            default: function () {
                alert(status);
            }
        },
        success: function (data) {
            obj = JSON.stringify(data, null, "\t");
           /*
		   var msg = obj.valueOf('MessageErreur');
            if (msg != null){
                alert(obj.valueOf('MessageErreur'));
            }*/
           
			//alert("dba_InsertUnCommentaire response success :"+obj);
			//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------dba_InsertUnCommentaire success--------\n"+obj+"\n\n";
			
		   return obj;
			
			
			

        },
        error: function (xhr, textStatus) {
            
			alert("dba_InsertUnCommentaire response error 788776"+xhr.responseText);
		
			//document.getElementById("id_textarea_01").value = document.getElementById("id_textarea_01").value +"\n--------------dba_InsertUnCommentaire error--------\n"+xhr.responseText+"\n\n";
	
			
        }
    });

}

