let user              = 'bsegura@informat.cl'
let password          = 'uwigo2511'
let rut_empresa       = '76.984.592-5'
let clave_sii_empresa = 'fionaj87'
let correo_prueba     = 'prueba@informat.cl'
let cel_prueba        = '56961628765'
let numero_prueba     = '1234556'

 

describe('Pruebita', function()
{

 

    before(function() { cy.visit('http://192.168.237.7:8080/login/?next=/') })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('sessionid','csrftoken')
    })

 

    // Funcion que valida el login en Uwigo
    it('login to Uwigo', function()
    {
      cy.get('#id_username').type(user)
      cy.get('#id_password').type(password)
      cy.contains('Iniciar Sesión').click()
    })

 

    //  Funcion que valida la creación de empresa en Uwigo automatica
    it('Create enterprise', function()
    {
      // me costo ene abrir el modal >.<
      cy.get('#content > div.row.mb-4 > div > div:nth-child(2) > a').click()
      cy.get('#id_rut_empresa_sii').type(rut_empresa)
      cy.get('#id_usuario_clave_sii').type(clave_sii_empresa)
      cy.contains('Siguiente').click()
      cy.wait(800)
      //cy.get('#id_id_fiscal').clear().type('8.881.334-0')
      cy.get('#id_codigo_area').select('32', {force: true})
      cy.get('#id_telefono').clear().type(numero_prueba)
      cy.get('#id_representante_sii-0-correo').type(correo_prueba)
      cy.get('#id_representante_sii-0-telefono').type(cel_prueba)
      cy.get('#id_representante_sii-1-correo').type(correo_prueba)
      cy.get('#id_representante_sii-1-telefono').type(cel_prueba)
      cy.get('#steps-uid-1 > div.actions.clearfix > ul > li:nth-child(2) > a').click({force: true})
      cy.get('#id_periodo_uwigo').clear().type('01/2020')
      cy.wait(2000)
      
      //Select Regimen General
      cy.get('#id_regimen').select('General', {force: true})
      //Comprobar que Iva esté chequeado   
      cy.get('#id_recupera_iva').should('be.checked')
      cy.get("#steps-uid-1 > div.actions.clearfix > ul > li:nth-child(3) > a").click({force: true})
      cy.wait(70000)
      cy.title().should('eq','UWIGO')
      cy.wait(4000)
      cy.get('button[type=button]').contains('No volver a mostrar').click({force: true})
    })

})