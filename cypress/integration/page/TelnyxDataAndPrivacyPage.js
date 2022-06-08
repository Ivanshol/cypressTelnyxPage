class TelnyxDataAndPrivacyPage{
    verifyDataAndPrivacyPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Data & Privacy');
    }
}

export default new TelnyxDataAndPrivacyPage()