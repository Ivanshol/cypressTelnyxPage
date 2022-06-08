class TelnyxVerifyAPIPage{
    verifyVerifyAPIPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Verify API:');
    }
}

export default new TelnyxVerifyAPIPage()