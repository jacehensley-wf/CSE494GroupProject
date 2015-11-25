#pragma strict

var infoText : String;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.tag == "Player")
	{
		col.gameObject.SendMessage("InfoFound", infoText);
	}
}