describe("Test Tasks", () => {
	beforeEach(() => {
		cy.server();
		cy.visit("/");
	});

	it("User Login success", () => {
		const email = "test@gmail.com";
		const password = "123456";

		cy.route(
			"POST",
			"https://backendapi.turing.com/customers/login",
			"fixture:customer"
		).as("login");
		//

		cy.get("[data-test='signin-button']").click();

		cy.get("[data-test='login-modal']").should("have.length", 1);

		cy.get("input[name='email']")
			.should("have.length", 1)
			.type(email)
			.should("have.value", email);

		cy.get("input[name='password']")
			.should("have.length", 1)
			.type(password)
			.should("have.value", password);

		cy.get("button[data-test='login-button']")
			.should("have.length", 1)
			.should("have.attr", "type", "submit")
			.click();

		cy.wait("@login");

		cy.get("[data-test='signin-button']").should("have.length", 0);
	});	

});
