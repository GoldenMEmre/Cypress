describe('WriteAndReadFiles', () => {
    it('Read Files', () => {
        cy.readFile('C:/Users/hasba/OneDrive/Masaüstü/my-cypress-framework/cypress/fixtures/örnek3.txt').should('contain','Wise')
    });
});