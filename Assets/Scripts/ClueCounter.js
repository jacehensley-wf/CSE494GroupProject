#pragma strict

static var numClues : int;
var clueCounterObj : UI.Text;

var notificationPanel : GameObject;
var notificationText : UI.Text;
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
				notificationMsg = "Hmmm... This clue here states there might be a cave involved...";
				break;
			case 2:
				notificationMsg = "Hmmm... This clue here states there might be a cave involved...";
				break;
			case 3:
				notificationMsg = "We've got it! Let's head outside and go to the Underworld!";
				break;	
				
			default:
				notificationMsg = "Whoops, there was an error!";
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