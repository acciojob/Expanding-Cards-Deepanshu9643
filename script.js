//your JS code here. If required.

const panels = document.querySelectorAll(".panel")

function removeActive() {
	 panels.forEach(panel => {
		 panel.classList.remove("active")
	 })
}
    panels.forEach(panel => {
		panel.addEventListener("click",()=>{
			removeActive()
		panel.classList.add("active")
		})
		
	})