class TelnyxProgrammableSMSPage{
    verifyProgrammableSMSPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('SMS API');
    }
}

export default new TelnyxProgrammableSMSPage()