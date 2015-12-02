#pragma strict

var infoText : String;

var targetScript : Player;

var setToDisappear : boolean;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.tag == "Player")
	{
		col.gameObject.SendMessage("InfoFound", infoText);
		targetScript.infoWall = gameObject;
	}
}

function disableWall()
{
	if(setToDisappear)
	{
		gameObject.SetActive(false);
	}
}