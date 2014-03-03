//Section pour l'affichage et le téléchargement du dictionnaire



function ClasseLstViewDictionnaire(myName) {
	//alert(myName);
	this.myListViewString = 'undefined';
	this.myListViewtbOiseaux = [];
}



function request(resourcePath, callback) {
	try {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
				//alert('xhr.responseText\n\n' + xhr.responseText)
				callback(xhr.responseText);
			}
		};

		xhr.open("GET", resourcePath, true);
		xhr.send(null);
	} catch (e) {
		//errorEvent(e);
		console.log("XMLHttpRequest failed: " + e);      
	}
}




function readData(oData) {
	localString = JSON.parse(oData);
	var tempData = [];


	//alert('readData: localString.tbOiseaux.length ' + localString.tbOiseaux.length);
	for (var i = 0; i < localString.tbOiseaux.length; i++) {
		var obj = localString.tbOiseaux[i];

		var m = new ClasseLgnDict(localString.tbOiseaux[i].id
		 						 ,localString.tbOiseaux[i].espece
		 					   	 ,localString.tbOiseaux[i].description
		 					   	 ,localString.tbOiseaux[i].IDPhoto);
								 
		 //alert('m.espece '+m.espece)
 		 tempData.push( m );

  }
       try {
		    myListViewtbOiseaux=tempData;
		    localStorage.setItem("tempData", JSON.stringify(tempData));
		    alert('localStorage OK nb oiseaux ' + tempData.length);
			
       }
       catch (e) {
			//alert("Storage failed: " + e);
            console.log("Storage failed: " + e);                
       }
   }





ClasseLstViewDictionnaire.prototype.XMLHttpReqDict = function(le_url) {
	request(le_url, readData);
}

