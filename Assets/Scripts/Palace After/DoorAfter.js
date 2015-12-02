#pragma strict

var targetScript : KingChatAfter;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col: Collider) {
	if (targetScript.chatProgress > 2) {
		//Application.LoadLevel('MainMenu');
		Debug.Log("Attempting to Leave Palace");
	}
}