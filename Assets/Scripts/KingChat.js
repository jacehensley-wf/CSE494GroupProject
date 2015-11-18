#pragma strict


var chatPanel : GameObject;
var chatText : UI.Text;
var targetScript : ClueCounter;

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
			chatMessage = "You must bring me Cerberus!";
			break;
		case 1:
			chatMessage = "I should have a clue nearby with instructions to get into the Underworld...";
			player.SendMessage("isSearching");
			for(var i = 0; i < clueList.length; i++)
			{
				clueList[i].SendMessage("setActiveOutline");
			}
			break;
		default:
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