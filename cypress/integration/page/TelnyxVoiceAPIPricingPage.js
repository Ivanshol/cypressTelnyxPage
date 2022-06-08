class TelnyxVoiceAPIPricingPage{
    verifyVoiceAPIPricingPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-9480303f-2 clNvhv hWGRnZ"] span').contains('API Pricing');
    }
}

export default new TelnyxVoiceAPIPricingPage()