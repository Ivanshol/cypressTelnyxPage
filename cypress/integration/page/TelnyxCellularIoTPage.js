class TelnyxCellularIoTPage{
    verifyCellularIoTPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('IoT SIM Cards');
    }
}

export default new TelnyxCellularIoTPage()