class TelnyxGlobalNumbersPage{
    verifyGlobalNumbersPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Get phone numbers on demand.');
    }
}

export default new TelnyxGlobalNumbersPage()