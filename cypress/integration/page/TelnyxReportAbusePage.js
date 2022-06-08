class TelnyxReportAbusePage{
    verifyReportAbusePage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-256d2eeb-1 gkWopw gRMPsA"]').contains('Report Abuse');
    }
}

export default new TelnyxReportAbusePage()