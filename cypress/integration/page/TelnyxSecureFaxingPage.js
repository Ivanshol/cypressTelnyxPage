class TelnyxSecureFaxingPage{
    verifySecureFaxingPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Programmable Fax API');
    }
}

export default new TelnyxSecureFaxingPage()