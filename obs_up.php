<?php 
 

 
 
 
 
 
 
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




//$result = mysql_query("INSERT INTO tb_observations (obs_Id,obs_DateObservation,obs_Position_lat,obs_Image_ascii) VALUES('444444','1384143205423','48.5321','".$le_data2."')");


//http://198.100.145.177/cegep/index.html
//http://198.100.145.177/cegep/test.php
$data = json_decode(file_get_contents('php://input'),true);
//$data = utf8_encode($data); 
//$gdgdgfd = var_dump($data);
 
 $x1=0;
 

$strObserv_Id_cumu="";
foreach($data as $item) { //foreach element in $arr
    //$uses = $item['strObserv_Id']; //etc


	
	//$result = mysql_query("INSERT INTO tb_observations (obs_Id,obs_DateObservation,obs_Position_lat,obs_Image_ascii) VALUES('".$item['strObserv_Id']."','1384143205423','48.5321','".$le_data2."')");
	
		
	//insert	
	$SQL1="";
	$SQL1=$SQL1."INSERT INTO tb_observations (obs_Position_lat) VALUES('55.5555')";
	$result = mysql_query($SQL1);
	
	//update
	$SQL2="";
	$SQL2=$SQL2."UPDATE tb_observations Set ";
	$SQL2=$SQL2."obs_DateObservation = '".$item['strObserv_DateObservation']."', ";
	$SQL2=$SQL2."obs_Position_lat = '".$item['strObserv_Position_lat']."' ";
	//$SQL2=$SQL2."obs_Image_ascii = '".$item['strObserv_Position_lat']."' ";
	$SQL2=$SQL2."WHERE obs_Id = LAST_INSERT_ID()";
	$result = mysql_query($SQL2);

	
		
	$hfhdfdhf="";	
	$result4 = mysql_query("SELECT * FROM tb_observations where obs_Id = LAST_INSERT_ID()");
	while ($row4 = mysql_fetch_array($result4)) {
	   $hfhdfdhf=$row4{'obs_Id'};
	  
	}
	
	
	
	
	
	
	
	
$x2=0;

	
	foreach($item['arrObservLesPhotos'] as $item2) { 
			
		/*
		$item2['strPhoto_Id'];
		$item2['strPhoto_Image'];
		$item2['strPhoto_Description'];
		$item2['strPhoto_IDObservation'];
		$item2['strPhoto_ImageMiniature'];


		CREATE TABLE tb_PhotoObservation (
		ph_obs__Id INT auto_increment PRIMARY KEY, 
		ph_obs__Image mediumtext CHARACTER SET ascii, 
		ph_obs_Description VARCHAR(255), 
		ph_obs_IDObservation INT, 
		ph_obs__ImageMiniature mediumtext CHARACTER SET ascii);
		*/
		
		//insert	
		$SQL1="";
		$SQL1=$SQL1."INSERT INTO tb_PhotoObservation (ph_obs_Description) VALUES('')";
		$result = mysql_query($SQL1);
		
		//update
		$SQL2="";
		$SQL2=$SQL2."UPDATE tb_PhotoObservation Set ";
		$SQL2=$SQL2."ph_obs_Description = '".$item2['strPhoto_Description']."', ";
		$SQL2=$SQL2."ph_obs__Image = '".$item2['strPhoto_Image']."', ";
		$SQL2=$SQL2."ph_obs_IDObservation = '".$hfhdfdhf."' ";
		$SQL2=$SQL2."WHERE ph_obs__Id = LAST_INSERT_ID()";
		$result = mysql_query($SQL2);

		
		$x2++;
	}
	

	
	$x1++;
	$strObserv_Id_cumu=$strObserv_Id_cumu."(".$x1.":".$x2.")\n";
}

 
 
 
 
echo "Test data: (".$strObserv_Id_cumu.")\n";



?>
