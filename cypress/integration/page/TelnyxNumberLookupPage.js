class TelnyxNumberLookupPage{
    verifyNumberLookupPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Phone Number Lookup');
    }
}

export default new TelnyxNumberLookupPage()