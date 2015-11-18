#pragma strict

var targetScript : ClueCounter;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col: Collider) {
	if (targetScript.numClues >= 3) {
		Application.LoadLevel('Underworld');
	}
}