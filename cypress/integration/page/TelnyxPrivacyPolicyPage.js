class TelnyxPrivacyPolicyPage{
    verifyPrivacyPolicyPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-d8f5e61f-1 gkWopw"]').contains('Privacy Policy');
    }
}

export default new TelnyxPrivacyPolicyPage()