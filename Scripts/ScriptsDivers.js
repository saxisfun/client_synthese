

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
	
	var tempDate = new Date().getTime();
	tempDate = parseFloat(tempDate); 
		
	
	
	observObject2.strObserv_DateObservation = tempDate;	
	observObject2.strObserv_Id = 0;
	observObject2.strObserv_IDOiseau = 0;
	observObject2.strObserv_IDUsager = 0;
	observObject2.strObserv_Titre = "Observation 1";
	observObject2.strObserv_Resume = "Un beau pit pit dans le bois";
	//observObject2.strObserv_Position_lat = 90.768;
	//observObject2.strObserv_Position_long = 34.867;		
	
	

	$.ajax({
		type: "POST",
		url: "/WCF_Synthese/servicewcf_synthese.svc/Observations/",
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


function SendUnCommentaire() {

	//SendUsager("admin@diq.ca","Administrateur","admin","892f1ceab17e0df07e0ec8de8cb5a30621d97797555e61b80c65eb68061623982a33e66440f28b7dbd6cfe6c007621e4fdd4ae9641516c68b18a299b599a1dec")
	alert("SendUnCommentaire test");
	
	var myJSONObject1 =  {};
	
	
	myJSONObject1.LeResult.CommTimestamp = document.getElementById('id_comm_timestamp_data').value;
	myJSONObject1.LeResult.CommObservId = document.getElementById('id_comm_observ_id_data').value;
	myJSONObject1.LeResult.CommUsagerId = document.getElementById('id_comm_usager_data').value;
	myJSONObject1.LeResult.CommResume = document.getElementById('id_comm_resume_data').value;

	var my_comm_strignified = JSON.stringify(myJSONObject1, null, "\t"); 
	alert(my_comm_strignified);
	
	/*
	var myJSONObject1 =  {
		"LeResult": {
			"CommTimestamp": "12244433222",
			"CommObservId": "2112212",
			"CommUsagerId": "saxisfun",
			"CommResume": "ewrtret wererte retrtert ertertert ertert erte ertertert erte ertert ert e"
		}
	};
	*/


	$.ajax({
		type: "POST",
		url: "/WCF_Synthese/servicewcf_synthese.svc/sendNewCommentaireDunUser/",
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




