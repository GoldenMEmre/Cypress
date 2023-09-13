describe('WriteandRead Files', () => {
    it('Write Files', () => {
        cy.writeFile('C:/Users/hasba/OneDrive/Masaüstü/my-cypress-framework/cypress/fixtures/örnek3.txt','MEmre\n')
        cy.writeFile('C:/Users/hasba/OneDrive/Masaüstü/my-cypress-framework/cypress/fixtures/örnek3.txt','Wise',{flag:'a+'})

        
    });
});