describe('Login testi', () => {
    it('QualityDemy Login Test', () => {
        cy.visit('https://qa.qualitydemy.com/')
        //login testi yapılacak siteye gittik [ seleniumdaki get()]
        cy.get('.cookieButton > a').click()
        //cookies onayı verdik

        //1.yol        
        //cy.get('.btn-sign-in-simple').click()
        //login yazısına locate alarak tıkladık
       
        //2.yol
       //cy.contains('Log in').click()
       //Log in Yazısını bulup tıkladık

       //3.yol
       cy.contains('log in',{matchCase:false}).click()
       //Log in yazısına case sensitive durumuna bakmaksızın ({matchCase:false}) tıkladık

       cy.get('#login-email').type('mb@babayigit.net')
       //kullanıcı adımızı girdik
       cy.get('#login-password').type('M123456.b{enter}')
       //şifremizi girip enter tuşuna bastırdık

       //cy.get('#sign_up > :nth-child(3) > .btn').click()
       //şifremizi girip enter tuşuna basmadan butona tıklayarak giriş yaptırdık 
       
    });
});