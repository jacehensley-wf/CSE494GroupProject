#pragma strict

function Start () {

}

function Update () {
	
}

function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Player") {	
		col.gameObject.SendMessage("CerberusPickup");
		Destroy(gameObject);
	}
}
