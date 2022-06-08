class TelnyxCookiePolicyPage{
    verifyCookiePolicyPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-d8f5e61f-1 gkWopw"]').contains('Cookie Policy');
    }
}

export default new TelnyxCookiePolicyPage()