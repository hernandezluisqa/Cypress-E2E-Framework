describe("tests Buttons", () => {  //Test Set
    beforeEach("Buttons demoQA", () => {
        cy.visit('https://demoqa.com/buttons')
        })

    it("Validate button Click Me works successfully", () => {  //Test Case
        cy.get('button.btn').filter(':not(#rightClickBtn):not(#doubleClickBtn)').click();
        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
    })

    it("Validate button Right Click Me works successfully", () => {
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    })

    it("Validate button Double Click Me works successfully", () => {
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
    })

    it("Validate button Click Me does not work with other action", () => {
        cy.get('button.btn').filter(':not(#rightClickBtn):not(#doubleClickBtn)').as('btnClickMe')
        cy.get('@btnClickMe').rightclick();
        cy.get('@btnClickMe').dblclick();
        cy.get('#dynamicClickMessage').should('be.visible');
        cy.get('#rightClickMessage').should('not.exist');
        cy.get('#doubleClickMessage').should('not.exist');
    })

    it("Validate button Right Click Me does not work with other action", () => {
        cy.get('#rightClickBtn').click();
        cy.get('#rightClickBtn').dblclick();
        cy.get('#dynamicClickMessage').should('not.exist');
        cy.get('#doubleClickMessage').should('not.exist');
    })

    it("Validate button Double Click Me does not work with other action", () => {
        cy.get('#doubleClickBtn').click()
        cy.get('#doubleClickBtn').rightclick();
        cy.get('#dynamicClickMessage').should('not.exist');
        cy.get('#rightClickMessage').should('not.exist');
    })
})