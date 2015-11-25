#pragma strict


var chatPanel : GameObject;
var chatText : UI.Text;
var targetScript : ClueCounter;
var chatButton : UI.Text;

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
	if(chatProgress > 2)
	{
		chatPanel.SetActive(false);
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
			chatMessage = "Hercules! For your last labor, you must go to the Underworld and bring me Cerberus, the three headed dog!";
			chatButton.text = "Next";
			break;
		case 1:
			chatMessage = "To do this, you must enter the Underworld while you're still alive. I think I might have a clue nearby that can help you...";
			player.SendMessage("isSearching");
			for(var i = 0; i < clueList.length; i++)
			{
				clueList[i].SendMessage("setActiveOutline");
			}
			chatButton.text = "Next";
			break;
		case 2:
			chatMessage = "Okay you should go search for the clues nearby...";
			chatButton.text = "Close";
			break;
		default:
			chatButton.text = "Close";
			if(targetScript.numClues < 3)
			{
				switch(Mathf.Floor(Random.value * 4))
				{
					case 0:
						chatMessage = "I should have clues nearby... Check around!";
						break;
					case 1:
						chatMessage = "Have you found the clue yet?";
						break;
					case 2:
						chatMessage = "Books are a great place to search around...";
						break;
					case 3:
						chatMessage = "Have you figured out how to get Cerberus?";
						break;
						
					default:
						chatMessage = "Have you found the clue yet?";
						break;
				}
			}
			else
			{
				chatMessage = "You found the clue! Good job, now head to the Underworld and bring me back Cerberus!";
			}
			break;
	}
	chatText.text = chatMessage;
}