#pragma strict

var outlineShader : Material;

private var isFound : boolean;
private var isActive : boolean;

function Start () {
	isFound = false;
	isActive = false;
}

function Update () {

}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.tag == "Player" && !isFound && isActive)
	{
		col.gameObject.SendMessage("CluePickup");
		gameObject.GetComponent.<Renderer>().material.SetColor("_OutlineColor", Color.green);
		isFound = true;
	}
}

function setActiveOutline()
{
	gameObject.GetComponent.<Renderer>().material = outlineShader;
	isActive = true;
}