#pragma strict

var targetScript : ClueCounter;

var doorRenderer : GameObject;
var outlineShader : Material;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col: Collider) {
	if (targetScript.numClues >= 3) {
		Application.LoadLevel('Underworld');
	}
}

function setActiveOutline()
{
	doorRenderer.GetComponent.<Renderer>().material = outlineShader;
}