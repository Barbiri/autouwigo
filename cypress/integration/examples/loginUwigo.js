let username = 'bsegura@informat.cl'
let password = 'uwigo2511'


describe('Pruebita', function() 
{   
 
    before(function() { cy.visit('http://192.168.237.7:8080/login/?next=/') }) 
    beforeEach(() => { // before each test, we can automatically preserve the 
        // 'session_id' and 'remember_token' cookies. this means they 
        // will not be cleared before the NEXT test starts. // 
        // the name of your cookies will likely be different 
       Cypress.Cookies.preserveOnce('csrf_token') })

    it('login to Uwigo', function() 
    {

      cy.get('#id_username').type(username)
      cy.get('#id_password').type(password)
      cy.contains('Iniciar Sesión').click()
    })


    it('logout to Uwigo', function() 
    {
      cy.get('a[href*="javascript:;"]').contains('BERNARDO SEGURA').click()
      cy.get('a[href*="/logout/"]').click()
      cy.wait(2000)
    
    })
})