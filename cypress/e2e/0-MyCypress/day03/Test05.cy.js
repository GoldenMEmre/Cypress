describe('go komutu kullanımı', () => {
    it('', () => {       
    cy.visit('https://www.google.com')
    cy.get('.SDkEP').type('Fizikçi{enter}')
    cy.go('back') //cy.go(-1)
    cy.go('forward') //cy.go(1)
    cy.reload()
    cy.wait(3000)
    cy.go(-1)
    cy.go(1)
});
});