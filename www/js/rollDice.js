
function intDec(plusMinus)
{
	var intDec = 0;
	var plusMinus = parseInt(plusMinus);
	var currentLife = parseInt(document.getElementById("myLife").innerHTML)+plusMinus;
	// alert(currentLife);

	if(currentLife < 0)
	{
		currentLife = 0;
	}
	else if(currentLife > 100)
	{
		currentLife = 100;
	}
	else
	{
		document.getElementById("myLife").innerHTML = currentLife;
	}
}

function randomDiceRoll()
{
	document.getElementById("diceRoll").innerHTML = Math.floor(Math.random()*(20-1+1)+1);
}

function reset()
{
	document.getElementById("myLife").innerHTML = 20;
	document.getElementById("diceRoll").innerHTML = 0;
}
