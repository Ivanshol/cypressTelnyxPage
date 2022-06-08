class TelnyxElasticSIPTrunkingPage{
    verifySIPTrunkingPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] strong').contains('SIP Trunks for ');
    }
}

export default new TelnyxElasticSIPTrunkingPage()