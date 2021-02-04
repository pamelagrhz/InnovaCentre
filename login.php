<?php 

require "innova_centre.sql";

Class Usuario
{
	public function __construct()
	{}

	public function insertar($nombre,$a_paterno,$a_materno,$telefono,$email,$login,$clave)
	{
		$sql="INSERT INTO usuario (nombre,a_paterno,a_materno,telefono, email, login,clave,condicion)
		VALUES ('$nombre','$a_paterno','$a_materno','$telefono','$email','$login','$clave','1')";
		return ejecutarConsulta($sql);
	}

	public function verificar($login,$clave)
    {
    	$sql="SELECT id_usuario,nombre,login FROM usuario WHERE login='$login' AND clave='$clave'"; 
    	return ejecutarConsulta($sql);  
    }
}

?>