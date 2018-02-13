/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


var on = true;
if(on)
{
	console.log("Debugg shit");
	//window.location.hash.substring(1)
}



function startEffekt() {
	//Stopp Curent PythonFile
	Time = document.getElementById("field1").value
	Depth = document.getElementById("field2").value
    Rate = document.getElementById("field3").value

	pythonString = "flanger.py " + " -"+Time + " -"+Depth + " -"+Rate
	console.log("Button starts function")
	
	console.log(pythonString)
	
	
	
	console.log("End of Function")

}




$('.selector').click(function(){
	var selectedEffekt = $(this).data("effekt");
	$(".Effekt").removeClass("active");
	$("#"+selectedEffekt).addClass("active");
	$(".Button").addClass("active");
	
});
