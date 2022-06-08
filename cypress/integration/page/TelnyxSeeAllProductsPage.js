class TelnyxSeeAllProductsPage{
    verifySeeAllProductsPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-ce3c78c4-2 clNvhv juvWNo"]').contains('Products');
    }
}

export default new TelnyxSeeAllProductsPage()