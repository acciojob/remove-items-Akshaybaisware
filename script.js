//your JS code here. If required.
window.onload = function()
	{
		let colorSelect = document.getElementById("colorSelect");
		let submit = document.getElementById("submit");
		submit.addEventListener("click" , function()
		{
         let selectedIndex = colorSelect.selectedIndex;
			if(selectedIndex !== -1)
			{
				colorSelect.remove(selectedIndex);
			}
		});
	};