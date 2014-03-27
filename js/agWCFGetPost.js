
/*
http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/Login/
http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/GetUsager/1


http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/GetObservation/1

http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/observation/1

http://periodiqco1.web703.discountasp.net/WCF_Synthese/ServiceWCF_Synthese.svc/observation



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
function GetUsager() {
    ID = 1;
    
	alert("1111122222");
	
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
                alert(status);
            }
        },
        success: function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
			alert(obj);
            return obj;
           
                   },
        ajaxSuccess: function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
			alert(obj);
            return obj;
           
                   },
        ajaxError: function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
           alert(obj);
		   return obj;
           
                   },
        ajaxComplete:function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
            alert(obj);
			return obj;
           
                   }, 
        complete :function (data) {
            obj = JSON.stringify(data);
            //obj = JSON.parse(data);
            alert(obj);
			return obj;
           
                   },
        error: function (xhr, textStatus) {
            alert(xhr.responseText);
        }
    });

}

function dba_Login( pUserName, pPassword) {
   
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
        }
    });

}
function dba_Logout() {

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
	var Courriel = $("#txtCourriel").val(); 
	var EstAdmin = $("#checkboxAdmin").prop("checked");
	var MotDePasse = $("#txtMotDePasse").val();
	var Nom  = $("#txtNom").val();
	var NomUsager = $("#TextNomUsager").val();
   
	datas = { "Courriel": Courriel, 
                "EstAdministrateur": EstAdmin, 
                "MotDePasse": MotDePasse, 
                "Nom": Nom, 
                "NomUsager": NomUsager };
	saxisfun@gmail.com
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
           
  alert(obj);

		   return obj;
			
			
			

        },
        error: function (xhr, textStatus) {
            alert(xhr.responseText);
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
function wcf_InsertObservation(un_observ1) {
 	//http://periodiqco1.web703.discountasp.net/WCF_Synthese/servicewcf_synthese.svc/observation/1
	//un_observ1 ={"DateObservation":"2014-01-01","IDOiseau":1,"IDUsager":1,"Id":0,"Latitude":123,"Longitude":345,"Titre":"sdada"}
	
	/*
	"strObserv_Id": 111111,
	"strObserv_DateObservation": 1394148405287,
	"strObserv_Position_lat": 345.6775,
	"strObserv_Position_long": 47.6776,			
	"strObserv_IDUsager": 111111,		
	"strObserv_IDOiseau": 121212,	
	"strObserv_Titre": "Moineau", 
	"strObserv_Resume": "Dignissim autem magna ipsum qui luptatum, praesent autem duis vel veniam",
	*/	
	
	
	
	un_observ1.strObserv_DateObservation = convertTimeStampToDate(un_observ1.strObserv_DateObservation);
	un_observ1.strObserv_IDOiseau = parseInt(un_observ1.strObserv_IDOiseau, 10);
	un_observ1.strObserv_IDUsager = parseInt(un_observ1.strObserv_IDUsager, 10);
	un_observ1.strObserv_Position_lat = parseFloat(un_observ1.strObserv_Position_lat);
	un_observ1.strObserv_Position_long = parseFloat(un_observ1.strObserv_Position_long);
	delete un_observ1["strObserv_Resume"];
	delete un_observ1["strObservFlagInsertUpdate"];
	delete un_observ1["arrObservLesPhotos"];
	
	
	dataToSend = JSON.stringify(un_observ1, null, "\t");

	
	dataToSend = dataToSend.replace(/strObserv_Id/g, "Id");
	dataToSend = dataToSend.replace(/strObserv_DateObservation/g, "DateObservation");
	dataToSend = dataToSend.replace(/strObserv_IDOiseau/g, "IDOiseau");
	dataToSend = dataToSend.replace(/strObserv_IDUsager/g, "IDUsager");
	dataToSend = dataToSend.replace(/strObserv_Position_lat/g, "Latitude");
	dataToSend = dataToSend.replace(/strObserv_Position_long/g, "Longitude");
	dataToSend = dataToSend.replace(/strObserv_Titre/g, "Titre");
	
	
    //jsonp: true, processData: true,
	document.getElementById("id_textarea_01").value=document.getElementById("id_textarea_01").value+"\n"+dataToSend+"\n";
	//alert("dataToSend:"+dataToSend);
	
	
	
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
            obj = JSON.stringify(data, null, "\t");
       
           
			//alert(obj);

		   return obj;
			
			
			

        },
        error: function (xhr, textStatus) {
            alert(xhr.responseText);
        }
    });
	
	

}
