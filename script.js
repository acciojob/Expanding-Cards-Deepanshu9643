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




// Visit the main page
cy.visit(baseUrl + "/main.html"); 

// Ensure the text inside each panel is correct
cy.get("#panel-1").find(".img-text").should("have.text", "Explore the world");
cy.get("#panel-2").find(".img-text").should("have.text", "Wild Forest");
cy.get("#panel-3").find(".img-text").should("have.text", "City on Winter"); // Fixed the order
cy.get("#panel-4").find(".img-text").should("have.text", "Mountain Cloud");
cy.get("#panel-5").find(".img-text").should("have.text", "Sunny Beach"); // Fixed the order

// Ensure the first panel is active by default
cy.get("#panel-1.active", { timeout: 6000 }).should("exist");
cy.get("#panel-2.active").should("not.exist");
cy.get("#panel-3.active").should("not.exist");
cy.get("#panel-4.active").should("not.exist");
cy.get("#panel-5.active").should("not.exist");

// Click on panel 2 and check if it becomes active
cy.get("#panel-2").click();
cy.wait(500);  // Optional wait to ensure smooth transition
cy.get("#panel-2.active", { timeout: 6000 }).should("exist");
cy.get("#panel-1.active").should("not.exist");
cy.get("#panel-3.active").should("not.exist");
cy.get("#panel-4.active").should("not.exist");
cy.get("#panel-5.active").should("not.exist");

// Click on panel 3 and check if it becomes active
cy.get("#panel-3").click();
cy.wait(500);  // Optional wait
cy.get("#panel-3.active", { timeout: 6000 }).should("exist");
cy.get("#panel-2.active").should("not.exist");
cy.get("#panel-1.active").should("not.exist");
cy.get("#panel-4.active").should("not.exist");
cy.get("#panel-5.active").should("not.exist");

// Click back on panel 2 and check if it becomes active
cy.get("#panel-2").click();
cy.wait(500);  // Optional wait
cy.get("#panel-2.active", { timeout: 6000 }).should("exist");
cy.get("#panel-1.active").should("not.exist");
cy.get("#panel-3.active").should("not.exist");
cy.get("#panel-4.active").should("not.exist");
cy.get("#panel-5.active").should("not.exist");

// Click on panel 4 and check if it becomes active
cy.get("#panel-4").click();
cy.wait(500);  // Optional wait
cy.get("#panel-4.active", { timeout: 6000 }).should("exist");
cy.get("#panel-2.active").should("not.exist");
cy.get("#panel-3.active").should("not.exist");
cy.get("#panel-1.active").should("not.exist");
cy.get("#panel-5.active").should("not.exist");

// Click on panel 5 and check if it becomes active
cy.get("#panel-5").click();
cy.wait(500);  // Optional wait
cy.get("#panel-5.active", { timeout: 6000 }).should("exist");
cy.get("#panel-2.active").should("not.exist");
cy.get("#panel-3.active").should("not.exist");
cy.get("#panel-4.active").should("not.exist");
cy.get("#panel-1.active").should("not.exist");
