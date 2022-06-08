class TelnyxVideoAPIPage{
    verifyVideoAPIPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Build an integrated video solution');
    }
}

export default new TelnyxVideoAPIPage()