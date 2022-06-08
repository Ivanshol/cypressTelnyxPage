class TelnyxVoiceAPIPage{
    verifyVoiceAPIPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Voice API');
    }
}

export default new TelnyxVoiceAPIPage()