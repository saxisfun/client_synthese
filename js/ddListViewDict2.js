//Section pour l'affichage et le téléchargement du dictionnaire



function ClasseLstViewDictionnaire(myName) {
	//alert(myName);
	this.myListViewString = 'undefined';
	this.myListViewtbOiseaux = [];
}




function ztr (le_IDPhoto) {

    var img = new Image,
    canvas = document.createElement("canvas"),
  
    ctx = canvas.getContext("2d"),
	src="birds/"+le_IDPhoto+".jpg";
    //src = le_IDPhoto ;
    img.crossOrigin = 'Anonymous';

img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}

var tp = canvas.toDataURL("image/png");
return (le_IDPhoto  + '\ncanvas.width:' + canvas.width 
                    + ', canvas.height:' + canvas.height 
				    + "\n" + tp);

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

	var tpx = "xxxxxxxxxxxxxxxxxxxxxxxxxxx";

	//alert('readData: localString.tbOiseaux.length ' + localString.tbOiseaux.length);
	for (var i = 0; i < localString.tbOiseaux.length; i++) {
		var obj = localString.tbOiseaux[i];


	     tpx = ztr(localString.tbOiseaux[i].IDPhoto);
	     //console.log(localString.tbOiseaux[i].IDPhoto);


		var m = new ClasseLgnDict(localString.tbOiseaux[i].id
		 						 ,localString.tbOiseaux[i].espece
		 					   	 ,localString.tbOiseaux[i].description
		 					   	 ,localString.tbOiseaux[i].IDPhoto
		 					   	 ,tpx);
								 
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

