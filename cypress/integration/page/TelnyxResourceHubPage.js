class TelnyxResourceHubPage{
    verifyResourceHubPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-5160b4a4-2 clNvhv eafIwD"]').contains('Resource');
    }
}

export default new TelnyxResourceHubPage()