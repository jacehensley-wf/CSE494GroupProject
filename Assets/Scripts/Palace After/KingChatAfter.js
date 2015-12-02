#pragma strict


var chatPanel : GameObject;
var chatText : UI.Text;
var chatButton : UI.Text;

var notificationPanel : GameObject;
var notificationText : UI.Text;
var notificationButton : UI.Text;

static var chatProgress : int;
private var chatMessage : String;
private var maxMessageProgress : int;

private var player : GameObject;

function Start () {
	chatProgress = 0;
	chatPanel.SetActive(false);
	notificationPanel.SetActive(false);
}

function Update () {
	if(!player)
		return;

	if(Vector3.Distance(transform.position, player.transform.position) < 25)
	{
		transform.LookAt(player.transform.position + Vector3.up * 2, Vector3.up);
	}
}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.tag == "Player")
	{
		ShowMessage();
		chatPanel.SetActive(true);
		player = col.gameObject;
	}
}

function OnTriggerExit(col : Collider)
{
	chatPanel.SetActive(false);
}

function NextMessage()
{
	chatProgress++;
	if(chatProgress > 2)
	{
		chatPanel.SetActive(false);
		notificationText.text = "That king just cannot make up his mind! I'll bring Cerberus back to the Underworld I guess... You can just guide me to the door, I'll take it from here. Thanks for your help!";
		notificationButton.text = "Close";
		notificationPanel.SetActive(true);
	}
	else
	{
		ShowMessage();
	}
}

function ShowMessage()
{
	switch(chatProgress)
	{
		case 0:
			chatMessage = "Oh my! You brought me Cerberus! But... But, that dog is scary!";
			chatButton.text = "Next";
			break;
		case 1:
			chatMessage = "I can't have that giant dog scaring everybody away! You must put him back!";
			chatButton.text = "Next";
			break;
		case 2:
			chatMessage = "I don't care where, but putting him back where he belongs is probably best.";
			chatButton.text = "Close";
			break;
		default:
			chatButton.text = "Close";
			switch(Mathf.Floor(Random.value * 4))
			{
				case 0:
					chatMessage = "My goodness that Cerberus is the scariest thing I've seen! When are you going to put him back?";
					break;
				case 1:
					chatMessage = "Can you please go put him back now?";
					break;
				case 2:
					chatMessage = "I'm going to have nightmares about Cerberus...";
					break;
				case 3:
					chatMessage = "Cerberus is a lot bigger than I imagined!";
					break;
					
				default:
					chatMessage = "My goodness that Cerberus is the scariest thing I've seen! When are you going to put him back?";
					break;
				}

			break;
	}
	chatText.text = chatMessage;
}

function CloseNotificationPanel()
{
	notificationPanel.SetActive(false);
}