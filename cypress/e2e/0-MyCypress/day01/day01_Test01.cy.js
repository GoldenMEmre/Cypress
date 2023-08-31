describe('Temel Cypress Komutlari', () => {
    it('cy.visit komutu', () => {
        cy.visit('/') //baseUrl tanimlandiysa
        cy.visit('https://www.amazon.com')//base url tanimli degilse        
    });  

    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
        
    });

    it.skip('cy.title komutu', () => { // skip komutu bu testin es geçilmesini sağlar
        cy.visit('/') //baseUrl adrese gider
        cy.title().should('eq','IT Bootcamp, Distance education method - Wise Quarter Course') //title icin tam esitlik durumudur
        cy.title().should('include','education') // verilen string icerme durumu
        cy.title().should('contains','Distance') // verilen string icerme durumu


    });

    it('cy.url ve cy.location', () => { //only komutu ise sadece o testin çalışmasına neden olur
        cy.visit('/')
        cy.url().should('eq','https://wisequarter.com/') //Url tam esitlik durumunu kontrol eder
        cy.url().should('include','wisequarter') //Url string icerme durumuna bakar
        cy.location('pathname').should('eq','/about-us') //Pathname'in about-us olduğunu doğrular.




    });

});