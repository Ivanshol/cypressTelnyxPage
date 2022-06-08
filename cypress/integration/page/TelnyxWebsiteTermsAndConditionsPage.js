class TelnyxWebsiteTermsAndConditionsPage{
    verifyWebsiteTermsAndConditionsPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-d8f5e61f-1 gkWopw"]').contains('Terms and Conditions');
    }
}

export default new TelnyxWebsiteTermsAndConditionsPage()