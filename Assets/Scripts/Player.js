#pragma strict

var chatPanel : GameObject;
var chatText : UI.Text;

static var cerberusCollected : boolean = false;

function Start () {
	cerberusCollected = false;
}

function CerberusPickup() {
	cerberusCollected = true;
	
	chatPanel.SetActive(true);
	
	chatText.text = "You captured Cerberus! You better go back and tell Hades!";
}

function closeNotification()
{
	chatPanel.SetActive(false);
}
