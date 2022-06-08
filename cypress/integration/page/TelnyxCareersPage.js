class TelnyxCareersPage{
    verifyCareersPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-f6d2e4fb-4 czgqGc dCnMZf"]').contains('careers at telnyx');
    }
}

export default new TelnyxCareersPage()