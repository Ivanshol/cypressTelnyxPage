class TelnyxAboutUsPage{
    verifyAboutUsPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-f6d2e4fb-4 czgqGc dCnMZf"]').contains('About Us');
    }
}

export default new TelnyxAboutUsPage()