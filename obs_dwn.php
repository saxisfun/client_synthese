<?php 


 class AgUneObserv {
	public $strObserv_DateObservation = "";
	public $strObserv_Id = "";
	public $strObserv_IDOiseau = "";
	public $strObserv_IDUsager = "";
	public $strObserv_Titre = "";
	public $strObserv_Resume = "";
	public $arrObservLesPhotos = "";
	
	public $strObserv_Position_lat = "";
	public $strObserv_Position_long = "";	
	
	
	
	public $strObservFlagInsertUpdate = "";
}


	//$e->birthdate = date('m/d/Y h:i:s a', "8/5/1974 12:20:03 p");
	//$e->birthdate = date('m/d/Y h:i:s a', strtotime("8/5/1974 12:20:03"));

   
   
   
   
   
 
//phpinfo();
$username = "user1_cegep";
$password = "cegep1234";
$hostname = "localhost"; 

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
  or die("Unable to connect to MySQL");
echo "Connected to MySQL yea<br>";

$selected = mysql_select_db("cegep_oiseaux",$dbhandle)
  or die("Could not select examples");



$result1 = mysql_query("SELECT obs_Id, obs_DateObservation, obs_Position_lat, obs_Image_ascii FROM tb_observations");
//fetch tha data from the database


$e = new AgUneObserv();


while ($row1 = mysql_fetch_array($result1)) {
   echo "obs_Id:".$row1{'obs_Id'}.", obs_DateObservation:".$row1{'obs_DateObservation'}.", obs_Position_lat: ".$row1{'obs_Position_lat'}."<br>";

  

$e->strObserv_DateObservation = $row1{'obs_DateObservation'};
$e->strObserv_Id  = $row1{'obs_Id'};
//$e->strObserv_IDOiseau  = "3333333";  
//$e->strObserv_IDUsager  = "4444444";  
//$e->strObserv_Titre  = "5555555";  
//$e->strObserv_Resume  = "77777777"; 
$e->arrObservLesPhotos  = "";
$e->strObserv_Position_lat = $row1{'obs_Position_lat'};
//$e->strObserv_Position_long = "";	
//$e->strObservFlagInsertUpdate  = "7777777";

echo json_encode($e);	

	   
	
	$result2 = mysql_query("SELECT * FROM tb_PhotoObservation where ph_obs_IDObservation = ".$row1{'obs_Id'}."");
	while ($row2 = mysql_fetch_array($result2)) {
	   
	    echo "ph_obs_IDObservation: ".$row2{'ph_obs_IDObservation'}.", ph_obs__Id:".$row2{'ph_obs__Id'}.", ph_obs_Description:".$row1{'ph_obs_Description'}."<br>";

	   
	   //echo '777'.$row2{'ph_obs__Image'}.'<br>';
	   
	   echo "777<img src=".$row2{'ph_obs__Image'}." alt='' /><br>";
	   
	   
	}
	

 
   
   
}




//echo '<img src="data:image/png;base64,"'.base64_decode($le_data).' alt="" />';
//echo '222<img src="'.$le_data1.'" alt="" />';


/*
obs_Id
obs_DateObservation
obs_Position_lat
obs_Image_ascii
*/

/*
$result1 = mysql_query("SELECT * FROM tb_observations");
while ($row = mysql_fetch_array($result1)) {
   echo '222<img src="'.$row{'obs_Image_ascii'}.'" alt="" /><br>';
}
*/



//$result1 = mysql_query("DELETE FROM tb_observations Where obs_Id <> '4235235235'");
//$result1 = mysql_query("DELETE FROM tb_PhotoObservation Where ph_obs__Id <> '4235235235'");


/*
$SQL2="";
$SQL2=$SQL2."UPDATE tb_PhotoObservation Set ";
//$SQL2=$SQL2."ph_obs_Description = '".$item2['strPhoto_Description']."', ";
//$SQL2=$SQL2."ph_obs__Image = '".$item2['strPhoto_Image']."', ";
$SQL2=$SQL2."ph_obs_IDObservation = '333360' ";
$SQL2=$SQL2."WHERE ph_obs__Id = 4";
$result = mysql_query($SQL2);
*/
?>
