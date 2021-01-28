let rutEmpresa = '76.428.275-2'
let username = 'bsegura@informat.cl'
let password = 'uwigo2511'


describe('Pruebita', function() 
{   
 
    before(function() { cy.visit('http://192.168.237.7:8080/login/?next=/') }) 
    beforeEach(() => { // before each test, we can automatically preserve the 
        // 'session_id' and 'remember_token' cookies. this means they 
        // will not be cleared before the NEXT test starts. // 
        // the name of your cookies will likely be different 
        Cypress.Cookies.preserveOnce('sessionid','csrftoken')
     })

    it('login to Uwigo', function() 
    {

      cy.get('#id_username').type(username)
      cy.get('#id_password').type(password)
      cy.contains('Iniciar Sesión').click()
    })


    it('Eliminar Empresa', function() 
    {
        cy.get('#t-empresas_filter > label > input').type(rutEmpresa)
        //Clickea los 3 puntitos
        cy.get('#t-empresas > tbody > tr:nth-child(1) > td:nth-child(8) > a').click()
        //Clickea opcion Eliminar
        cy.contains('Eliminar').click()
        cy.get('input[name=password]').type(password)
        cy.get('button[type=button]').contains('Aceptar').click()
    })

})