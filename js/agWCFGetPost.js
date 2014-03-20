

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