class TelnyxStoragePage{
    verifyStoragePage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Better cloud storage,');
    }
}

export default new TelnyxStoragePage()