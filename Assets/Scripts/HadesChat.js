#pragma strict

var chatPanel : GameObject;
var chatText : UI.Text;
var targetScript : Player;

private var chatProgress : int;
private var chatMessage : String;
private var maxMessageProgress : int;

private var player : GameObject;

var clueList : GameObject[];

function Start () {
	chatProgress = 0;
	chatPanel.SetActive(false);
}

function Update () {

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
	ShowMessage();
}

function ShowMessage()
{
	switch(chatProgress)
	{
		case 0:
			chatMessage = "You?! How did someone from the land of the living make it down here?";
			break;
		case 1:
			chatMessage = "Well, it does not matter now. What is your purpose of being here?";
			break;
		case 2:
			chatMessage = "You want to take Cerberus to the surface? Well okay then, but only on one condition. No harm must come to him.";
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
				chatMessage = "Good job! You got him better get back up to the overworld. Before I change my mind!";
			}
			break;
	}
	chatText.text = chatMessage;
}