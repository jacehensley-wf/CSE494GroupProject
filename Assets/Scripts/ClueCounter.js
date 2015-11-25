#pragma strict

static var numClues : int;
var clueCounterObj : UI.Text;

var notificationPanel : GameObject;
var notificationText : UI.Text;

var exitDoor : GameObject;

private var notificationMsg : String;

private var isSearchingActive : boolean;

function Start () {
	isSearchingActive = false;
	numClues = 0;
	notificationPanel.SetActive(false);
}

function Update () {

}

function CluePickup() {
	if(isSearchingActive)
	{
		numClues++;
		
		switch(numClues)
		{
			case 1:
				notificationMsg = "This clue says there is an entrance outside to the Underworld! Let's keep looking for more info!";
				break;
			case 2:
				notificationMsg = "Hmmm... This clue here states there might be a cave involved...";
				break;
			case 3:
				notificationMsg = "This tells us where the cave is! We've got it! Let's head outside and go to the Underworld!";
				exitDoor.SendMessage("setActiveOutline");
				break;	
				
			default:
				notificationMsg = "Hmmm, this can't be right...";
				break;
		}
		
		notificationText.text = notificationMsg;
		notificationPanel.SetActive(true);
	
		clueCounterObj.text = "Number of Clues: " + numClues;
	}
}

function isSearching()
{
	isSearchingActive = true;
	clueCounterObj.text = "Number of Clues: 0";
}

function closeNotification()
{
	notificationPanel.SetActive(false);
}