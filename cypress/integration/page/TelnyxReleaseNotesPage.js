class TelnyxReleaseNotesPage{
    verifyReleaseNotesPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-ce6dc8c9-2 gkWopw dbaFpf"]').contains('Release');
    }
}

export default new TelnyxReleaseNotesPage()