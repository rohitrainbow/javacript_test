/**
 * 
 */
function test1(src)
{
	document.getElementById("id").src="";
}

function test2(src)
{
	if(src=="off_button")
		{
		 document.getElementById("bulb").src="bulb_off.jpg";
		 document.getElementById("on_button").style.display="block";
		 document.getElementById("off_button").style.display="none";
		}
	else
		{
		 document.getElementById("bulb").src="bulb_on.jpg";
		 document.getElementById("on_button").style.display="none";
		 document.getElementById("off_button").style.display="block";
		}
}