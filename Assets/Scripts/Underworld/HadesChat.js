#pragma strict

var chatPanel : GameObject;
var chatText : UI.Text;
var targetScript : Player;
var chatButton : UI.Text;

private var chatProgress : int;
private var chatMessage : String;
private var maxMessageProgress : int;

var player : GameObject;

var blockWall : GameObject;

var clueList : GameObject[];

function Start () {
	chatProgress = 0;
	chatPanel.SetActive(false);
}

function Update () {
	if(Vector3.Distance(transform.position, player.transform.position) < 25)
	{
		transform.LookAt(player.transform, Vector3.up);
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
	if(chatProgress > 3 && !targetScript.cerberusCollected)
	{
		chatPanel.SetActive(false);
		blockWall.SetActive(false);
	}
	else if(targetScript.cerberusCollected)
	{
		chatPanel.SetActive(false);
		Application.LoadLevel('Palace After');
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
			chatMessage = "You?! How did someone from the land of the living make it down here?";
			chatButton.text = "Next";
			break;
		case 1:
			chatMessage = "Well, it does not matter now. What is your purpose of being here?";
			chatButton.text = "Next";
			break;
		case 2:
			chatMessage = "You want to take Cerberus to the surface? Well okay then, but only on one condition. No harm must come to him.";
			chatButton.text = "Next";
			break;
		case 3:
			chatMessage = "Okay, you may go, he is down along the path!";
			chatButton.text = "Close";
			break;
		default:
			if(!targetScript.cerberusCollected)
			{
				switch(Mathf.Floor(Random.value * 4))
				{
					case 0:
						chatMessage = "What are you still doing here go get Cerberus so you can leave!";
						break;
					case 1:
						chatMessage = "Still have not found him yet?";
						break;
					case 2:
						chatMessage = "Why are you still talking to me?";
						break;
					case 3:
						chatMessage = "It's not like I hide him, come on now.";
						break;
						
					default:
						chatMessage = "Please leave me alone. I do not wish to talk to you any more.";
						break;
				}
			} else {
				chatMessage = "Wow! I didn't think you could do it! I can't believe you captured Cerberus! I cannot stand this, get out of my sight!";
				chatButton.text = "Leave";
			}
			break;
	}
	chatText.text = chatMessage;
}