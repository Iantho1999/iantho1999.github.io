// Basic JavaScript example by Ian Thomas
function multiply(a, b)
{
	var result = a * b;
	return result;
}

function setUserName()
{
	var myName = prompt("Please enter your name.");
	if (!myName)
	{
		setUserName();
	}
	else
	{
		if (myName === "Mario")
		{
			myImage.setAttribute("src", "images/hellomario.jpg");
		}
		else
		{
			myImage.setAttribute("src", "images/logo1.png");
		}
		
		localStorage.setItem("name", myName);
		myHeading.textContent = "Hello, " + myName;
	}
}

var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

var hellomario = new Audio("Sounds/hellomario.mp3");

myImage.onclick = function()
{
	var mySrc = myImage.getAttribute("src");
	
	if (mySrc == "images/hellomario.jpg")
	{
		hellomario.play();
	}
}

if (!localStorage.getItem("name"))
{
	setUserName();
}
else
{
	
	var storedName = localStorage.getItem("name");
	if (storedName === "Mario")
	{
			myImage.setAttribute("src", "images/hellomario.jpg");
	}
	else
	{
			myImage.setAttribute("src", "images/logo1.png");
	}
	myHeading.textContent = "Hello, " + storedName;
}

myButton.onclick = function()
{
	setUserName();
}

