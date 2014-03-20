<?php 
//error_reporting(E_ALL);
//ini_set('display_errors', '1');

function left($str, $length) {
     return substr($str, 0, $length);
}


function base64_to_jpeg( $base64_string, $output_file ) {
    $ifp = fopen( $output_file, "wb" ); 
    fwrite( $ifp, base64_decode( $base64_string) ); 
    fclose( $ifp ); 
    return( $output_file ); 
}

 
 
 
 
//phpinfo();
$username = "user1_cegep";
$password = "cegep1234";
$hostname = "localhost"; 

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
  or die("Unable to connect to MySQL");
echo "Connected to MySQL\n";

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
	
	$La_reponse = $item['strObservFlagInsertUpdate'];
	$La_strObserv_Id = $item['strObserv_Id'];
			
	
	if ($La_strObserv_Id == "0")
	{
		
		//insert	
		$SQL1="";
		$SQL1=$SQL1."INSERT INTO tb_observations (obs_Position_lat) VALUES('55.5555')";
		$result = mysql_query($SQL1);
		
		//update
		$SQL2="";
		$SQL2=$SQL2."UPDATE tb_observations Set ";
		$SQL2=$SQL2."obs_DateObservation = '".$item['strObserv_DateObservation']."', ";
		$SQL2=$SQL2."obs_IDOiseau = '".$item['strObserv_IDOiseau']."', ";
		$SQL2=$SQL2."obs_IDUsager = '".$item['strObserv_IDUsager']."', ";
		$SQL2=$SQL2."obs_Titre = '".$item['strObserv_Titre']."', ";
		$SQL2=$SQL2."obs_Resume = '".$item['strObserv_Resume']."', ";
		$SQL2=$SQL2."obs_Position_lat = '".$item['strObserv_Position_lat']."', ";
		$SQL2=$SQL2."obs_Position_long = '".$item['strObserv_Position_long']."' ";
		$SQL2=$SQL2."WHERE obs_Id = LAST_INSERT_ID()";
		$result = mysql_query($SQL2);


		$un_obs_Id="";	
		$result4 = mysql_query("SELECT * FROM tb_observations where obs_Id = LAST_INSERT_ID()");
		while ($row4 = mysql_fetch_array($result4)) {
		   $un_obs_Id=$row4{'obs_Id'};
		  
		}
		$strObserv_Id_cumu=$strObserv_Id_cumu."un_obs_Id: ".$un_obs_Id." Insert Data\n";
		
		$x2=0;
		foreach($item['arrObservLesPhotos'] as $item2) { 	
			//insert	
			$SQL1="";
			$SQL1=$SQL1."INSERT INTO tb_PhotoObservation (ph_obs_Description) VALUES('')";
			$result = mysql_query($SQL1);	
			//update

			
			$strObserv_Id_cumu=$strObserv_Id_cumu."un_obs_Id: ".$un_obs_Id." Insert Image\n";

			
			//save image sur le disque, creer un url et sauvegarder dans table
			//$la_img = preg_replace('#^data:image/[^;]+;base64,#', '', $item2['strPhoto_Image']);
			$la_img = preg_replace('#data:image/[^;]+;base64,#', '', $item2['strPhoto_Image']);		
			$image_file_name = $un_obs_Id."_".rand(1000000,9000000);
			$image_file_name = $image_file_name.".jpg";
			$image = base64_to_jpeg( $la_img, '/var/www/html/cegep/images_obs/'.$image_file_name.'' );
			$web_url = "http://".$_SERVER[HTTP_HOST]."/cegep/images_obs/".$image_file_name;
			
 
 
 
 
 			$SQL2="";
			$SQL2=$SQL2."UPDATE tb_PhotoObservation Set ";
			$SQL2=$SQL2."ph_obs_Description = '".$item2['strPhoto_Description']."', ";
			//$SQL2=$SQL2."ph_obs__Image = '".$item2['strPhoto_Image']."', ";
			$SQL2=$SQL2."ph_obs_url_big = '".$web_url."', ";
			
			
			$SQL2=$SQL2."ph_obs_IDObservation = '".$un_obs_Id."' ";
			$SQL2=$SQL2."WHERE ph_obs__Id = LAST_INSERT_ID()";
			$result = mysql_query($SQL2);
			$x2++;
 
 
 
 
 
			
			
			
		}
		

		
	
	}	
	
	

	//if ($La_reponse == "U")
	if ($La_strObserv_Id !== "0")
	{		
		//update
		$SQL2="";
		$SQL2=$SQL2."UPDATE tb_observations Set ";
		$SQL2=$SQL2."obs_DateObservation = '".$item['strObserv_DateObservation']."', ";
		$SQL2=$SQL2."obs_IDOiseau = '".$item['strObserv_IDOiseau']."', ";
		$SQL2=$SQL2."obs_IDUsager = '".$item['strObserv_IDUsager']."', ";
		$SQL2=$SQL2."obs_Titre = '".$item['strObserv_Titre']."', ";
		$SQL2=$SQL2."obs_Resume = '".$item['strObserv_Resume']."', ";
		$SQL2=$SQL2."obs_Position_lat = '".$item['strObserv_Position_lat']."', ";
		$SQL2=$SQL2."obs_Position_long = '".$item['strObserv_Position_long']."' ";
		$SQL2=$SQL2."WHERE obs_Id = ".$La_strObserv_Id."";
		$result = mysql_query($SQL2);
		
		
	
		//$result22 = mysql_query("DELETE FROM tb_PhotoObservation WHERE ph_obs_IDObservation = '".$La_strObserv_Id."'");
		//if($result22){
		

			$x2=0;
			foreach($item['arrObservLesPhotos'] as $item2) { 	
				//insert	
				
				
				
				if ($item2['strPhoto_Id'] == "0")
				{	
					$SQL1="";
					$SQL1=$SQL1."INSERT INTO tb_PhotoObservation (ph_obs_Description) VALUES('')";
					$result = mysql_query($SQL1);

					$strObserv_Id_cumu=$strObserv_Id_cumu."INSERT PHOTO 1\n";
					
				}
				//$image_temporaire="oiseau_demo1.jpg";
				//$web_url = "http://".$_SERVER[HTTP_HOST]."/cegep/images_obs/".$image_temporaire;
				
				$strObserv_Id_cumu=$strObserv_Id_cumu."strPhoto_Id:".$item2['strPhoto_Id']."\n";
				$strObserv_Id_cumu=$strObserv_Id_cumu."ph_obs_url_big:".$item2['ph_obs_url_big']."\n";
				
				
				$str_trimmed = left($item2['strPhoto_Image'], 20);
				
				
				
				$web_url = "";
				//if(strlen($item2['ph_obs_url_big'])== 0 || is_null($item2['ph_obs_url_big'])){	
				if(strlen($str_trimmed) > 10){	
				
					//save image sur le disque, creer un url et sauvegarder dans table
					//$la_img = preg_replace('#^data:image/[^;]+;base64,#', '', $item2['strPhoto_Image']);
					$la_img = preg_replace('#data:image/[^;]+;base64,#', '', $item2['strPhoto_Image']);		
					$image_file_name = $un_obs_Id."_".rand(1000000,9000000);
					$image_file_name = $image_file_name.".jpg";
					$strObserv_Id_cumu=$strObserv_Id_cumu."URL Vide\n";
									
					//if ( base64_encode(base64_decode($la_img)) === $la_img){
						$image = base64_to_jpeg( $la_img, '/var/www/html/cegep/images_obs/'.$image_file_name.'' );
						$web_url = "http://".$_SERVER[HTTP_HOST]."/cegep/images_obs/".$image_file_name;
						$strObserv_Id_cumu=$strObserv_Id_cumu."Encode photo 1\n";
						//echo '$data is valid';
					//} else {
						//echo '$data is NOT valid';
					//}
							
				
				}	
				
		
				
				
				
				

				$SQL2="";
				$SQL2=$SQL2."UPDATE tb_PhotoObservation Set ";
				$SQL2=$SQL2."ph_obs_Description = '".$item2['strPhoto_Description']."', ";
				$SQL2=$SQL2."ph_obs__Image = '', ";
				
				if($item2['ph_obs_url_big']===""){
					
				}else
				{
					$SQL2=$SQL2."ph_obs_url_big = '".$web_url."', ";
					$strObserv_Id_cumu=$strObserv_Id_cumu."Enregistre URL\n";
				}
				
				$SQL2=$SQL2."ph_obs_IDObservation = '".$La_strObserv_Id."' ";
				
				
				if ($item2['strPhoto_Id'] === "0")
				{		
				
					$strObserv_Id_cumu=$strObserv_Id_cumu."INSERT PHOTO 2\n";
					$SQL2=$SQL2."WHERE ph_obs__Id = LAST_INSERT_ID()";
				}else
				{
					$SQL2=$SQL2."WHERE ph_obs__Id = '".$item2['strPhoto_Id']."'";
				}				
				
				
				
				
				$result = mysql_query($SQL2);
				$x2++;
			}
	
		//}
	
	}	
	
	$x1++;
	$strObserv_Id_cumu=$strObserv_Id_cumu."(x1: ".$x1.", x2:".$x2.", La_strObserv_Id:".$La_strObserv_Id.")\n";
	
}

/* 
foreach($data as $item) { //foreach element in $arr
    //$uses = $item['strObserv_Id']; //etc


	
	//$result = mysql_query("INSERT INTO tb_observations (obs_Id,obs_DateObservation,obs_Position_lat,obs_Image_ascii) VALUES('".$item['strObserv_Id']."','1384143205423','48.5321','".$le_data2."')");
	
	$La_reponse = $item['strObservFlagInsertUpdate'];
	$La_strObserv_Id = $item['strObserv_Id'];
		
		
	if ($La_reponse == "U"){
			
		$result11 = mysql_query("DELETE FROM tb_observations WHERE obs_Id = '".$La_strObserv_Id."'");
		if($result11){
			$result22 = mysql_query("DELETE FROM tb_PhotoObservation WHERE ph_obs_IDObservation = '".$La_strObserv_Id."'");
			if($result22){
				
		
			}
		}

	}	

	
	
}
 */
 
 
echo "Test data: (".$strObserv_Id_cumu.")\n";



?>
