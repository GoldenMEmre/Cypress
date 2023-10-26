describe('WriteandRead Files', () => {
    it('Write Files', () => {
        cy.writeFile('C:/Users/hasba/OneDrive/Masaüstü/CYPRESS/my-cypress-framework/cypress/fixtures/örnek3.txt','Muleyke\n')
        cy.writeFile('C:/Users/hasba/OneDrive/Masaüstü/CYPRESS/my-cypress-framework/cypress/fixtures/örnek3.txt','Quarter',{flag:'a+'})
        cy.writeFile('C:/Users/hasba/OneDrive/Masaüstü/CYPRESS/my-cypress-framework/cypress/fixtures/örnek4.json','{"Adı":"Muleyke"}')              
        
    });
});