class TelnyxElasticSIPTrunkingPage{
    clickFooterLink(menu, link, index) {
        cy.get(
            `[href="/${menu}/${link}"]`
        ).eq(`${index}`).scrollIntoView().click();
    }

    clickFooterLink(link, index) {
        cy.get(
            `[href="/${link}"]`
        ).eq(`${index}`).scrollIntoView().click();
    }
}

export default new TelnyxElasticSIPTrunkingPage()