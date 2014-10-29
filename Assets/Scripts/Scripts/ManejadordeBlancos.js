public var Salud : int = 100;
public var Explosion : GameObject;
var SaludActual = 100;

var muerte:GameObject;


function Start(){

 
}
//Prova raycast
function Update(){
	if(Salud <= 0){
	
		muerte.GetComponent(EnemigoMierder).Muerte();

	}
}

/////////////
function OnCollisionEnter (other : Collision) {
	if(other.gameObject.tag == "Armas"){
		var ArmasScript : armasEstado = other.gameObject.GetComponent(armasEstado);
		DecrementaSalud (ArmasScript.Damage);
		
	}
}

function DecrementaSalud (Damage : int) {
	Salud -= Damage;
	if(Salud <= 0){
	
		muerte.GetComponent(EnemigoMierder).Muerte();

	}
}

