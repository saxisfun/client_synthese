//Section pour l'affichage et le téléchargement du dictionnaire


function ClasseListViewDictionnaire(myName) {
	alert(myName);
	this.myListViewDictName = myName;
	this.myListViewDictArray = [];
}


ClasseListViewDictionnaire.prototype.fillDictListView = function(){

alert("classe pour Dictionnaire");
alert(this.myListViewDictArray.length);




//alert("fillObservsListView");

for (var i=0; i < this.myListViewDictArray.length; i++){
	var theObject = this.myListViewDictArray[i];
	
	
	//ici ici ici
	
	//this.addFichiersListViewCell(localString.result[i].id, localString.result[i].filename, localString.result[i].url, localString.result[i].description, localString.result[i].registered)

	
//	this.addListViewObservCell(theObject.strObservTitre, theObject.strObservResume, theObject.strObservDiskName, theObject.dataURLPicture, i);
	
	//le_id, le_non_fich, le_url, la_descrip, la_date_eng





	
}	

/*
ClasseListViewDictionnaire.prototype.zfillDictListView = function() {
	
	alert("ClasseListViewDictionnaire.prototype.fillObservsListView");
	//alert(this.myListViewObservArray.length);
	
//	for (var i=0; i < this.myListViewObservArray.length; i++){
//		var theObject = this.myListViewObservArray[i];
		
		
		//ici ici ici
		
		//this.addFichiersListViewCell(localString.result[i].id, localString.result[i].filename, localString.result[i].url, localString.result[i].description, localString.result[i].registered)

		
//		this.addListViewObservCell(theObject.strObservTitre, theObject.strObservResume, theObject.strObservDiskName, theObject.dataURLPicture, i);
		
		//le_id, le_non_fich, le_url, la_descrip, la_date_eng
	
	//alert("fillObservsListView end");
	//alert(myVar);
}

*/