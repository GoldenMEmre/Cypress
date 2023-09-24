describe('Temel Cypress Komutlari', () => {
    it('cy.visit komutu', () => {
        cy.visit('/') //baseUrl tanimlandiysa
        cy.visit('https://www.amazon.com')//base url tanimli degilse        
    })
    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
    
    })
    });  

