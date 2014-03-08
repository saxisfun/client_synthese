

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

	my_textarea = document.getElementById("id_textarea_01");  
	//ajax send json jquery post wcf
	
    ID = 1;
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
			//var data_strignified = JSON.stringify(data);  
			var data_strignified = JSON.stringify(data, null, "\t"); 			
			my_textarea.value=data_strignified;			
			var obj1 = data.GetUsagerResult.Courriel;
			alert("Courriel:  " + obj1);

        },
        error: function (xhr, textStatus) {
            alert(xhr.responseText);
        }
    });
	
}




function SendUsager(le_Courriel, le_Nom, le_NomUsager, le_MotDePasse) {

	//SendUsager("admin@diq.ca","Administrateur","admin","892f1ceab17e0df07e0ec8de8cb5a30621d97797555e61b80c65eb68061623982a33e66440f28b7dbd6cfe6c007621e4fdd4ae9641516c68b18a299b599a1dec")
alert("SendUsager test");
	var myJSONObject1 =  {};
	myJSONObject1.GetUsagerResult.Courriel=le_Courriel;
	myJSONObject1.GetUsagerResult.Nom=le_Nom;
	myJSONObject1.GetUsagerResult.NomUsager=le_NomUsager;
	myJSONObject1.GetUsagerResult.MotDePasse=le_MotDePasse;

	/*
	var myJSONObject2 =  {
		"GetUsagerResult": {
			"Courriel": "admin@diq.ca",
			"EstAdministrateur": true,
			"Hash": null,
			"ID": 1,
			"MotDePasse": "892f1ceab17e0df07e0ec8de8cb5a30621d97797555e61b80c65eb68061623982a33e66440f28b7dbd6cfe6c007621e4fdd4ae9641516c68b18a299b599a1dec",
			"Nom": "Administrateur",
			"NomUsager": "admin"
		}
	};
	*/


	$.ajax({
		type: "POST",
		url: "/WCF_Synthese/servicewcf_synthese.svc/sendNewObservationsDunUser/",
		//data: '{"test":"test"}',
		data: myJSONObject1,
		contentType: "application/json",
		dataType: "json",
		success: function (msg) {
			alert('success: '+msg);
		},
		error:function(x,e){
			if(x.status==0){
				alert('error 0');
			}
		}
	});  
	
}




function sendObservation() {

    

	var observObject2 = new ClasseObservation();
	
	observObject2.strObservFlagInsertUpdate = "U";
	observObject2.strObservTimestamp = "";
	
	observObject2.strObservNoAutoGenereParlaDB = "";
	observObject2.strObservIdDeLoiseau = "";
	observObject2.strObservNomDeLusager = "";

	
	
	observObject2.strObservTitre = "Observation 1";
	observObject2.strObservResume = "Un beau pit pit dans le bois";
	//observObject2.strObservDiskName = "rien ici";
	//observObject2.strObservDataURLPicture = "";
	observObject2.strObservLaPositionGPS_lat = "90.768";
	observObject2.strObservLaPositionGPS_long = "34.867";		
	
	

	$.ajax({
		type: "POST",
		url: "/WCF_Synthese/servicewcf_synthese.svc/sendNewObservationsDunUser/",
		data: observObject2,
		contentType: "application/json",
		dataType: "json",
		success: function (msg) {
			alert('success');
		},
		error:function(x,e){
			if(x.status==0){
				alert('error 0');
			}
		}
	});
      
	
}

