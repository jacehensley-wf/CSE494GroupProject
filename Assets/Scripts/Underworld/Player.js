#pragma strict

var chatPanel : GameObject;
var chatText : UI.Text;

var notificationPanel : GameObject;
var notificationText : UI.Text;

public static var infoWall : GameObject;

static var cerberusCollected : boolean = false;

function Start () {
	cerberusCollected = false;
}

function CerberusPickup() {
	cerberusCollected = true;
	
	notificationPanel.SetActive(true);
	
	notificationText.text = "We captured Cerberus! Let's go back and tell Hades!";
}

function closeNotification()
{
	notificationPanel.SetActive(false);
	if(infoWall && infoWall.activeSelf)
	{
		infoWall.SendMessage("disableWall");
	}
}


function InfoFound(infoText : String)
{
	notificationText.text = infoText;
	notificationPanel.SetActive(true);
}