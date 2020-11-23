let user              = 'bsegura@informat.cl'
let password          = 'uwigo2511'
let rut_empresa       = '76.986.714-7'
let pass 			  = 'rideshop'
let correo 		      = 'prueba@informat.cl'
let celu 	          = '61628765'
let telefono    	  = '1234556'
let nombre_emp		  = 'descarga compra'
 
describe('probanding', function() 
{   
 
    before(function() { cy.visit('http://192.168.237.7:8080/login/?next=/') }) 
    beforeEach(() => { // before each test, we can automatically preserve the 
        // 'session_id' and 'remember_token' cookies. this means they 
        // will not be cleared before the NEXT test starts. // 
        // the name of your cookies will likely be different 
       Cypress.Cookies.preserveOnce('sessionid','csrftoken')})


    it('logeo uwigo',function() 
    {    
      cy.get('#id_username').type(user)
      cy.get('#id_password').type(password)
      cy.contains('Iniciar Sesión').click()
   	  cy.get('#content > div.row.mb-4 > div > div:nth-child(2) > a').click()
	  cy.get('#id_rut_empresa_sii').type(rut_empresa)
	  cy.get('#id_usuario_clave_sii').type(pass)
	  cy.contains('Siguiente').click()
	  cy.wait(800)
	  cy.get('#id_nombre_fantasia').clear().type(nombre_emp)
      cy.get('#id_razon_social').clear().type(nombre_emp)
	  cy.get('#id_codigo_area').select('2' ,{force: true})
	  cy.get('#id_telefono').clear().type(telefono)
	  cy.get('#id_representante_sii-0-correo').type(correo)
	  cy.get('#id_representante_sii-0-telefono').type(celu)
	  cy.get('#id_representante_sii-1-correo').type(correo)
	  cy.get('#id_representante_sii-1-telefono').type(celu)
	  cy.get('#id_representante_sii-2-correo').type(correo)
	  cy.get('#id_representante_sii-2-telefono').type(celu)
	  cy.scrollTo('bottom')
      cy.get('#steps-uid-1 > div.actions.clearfix > ul > li:nth-child(2) > a').click({force: true})
	  cy.get('#id_periodo_uwigo').clear().type('01/2020')
	  cy.wait(4000)
	  cy.get('#id_regimen').select('General' ,{force: true}) //selector regimen General[H5-SP23]  
	  cy.get('#id_recupera_iva').should('be.checked') //solo si es general
	  cy.wait(4000)
	  cy.get('#id_regimen').select('Propyme',{force: true})
	  cy.get('#id_recupera_iva').should('not.be.checked')
	  cy.wait(4000)
	  cy.get('#id_regimen').select('Propyme/Transparente',{force: true})
	  cy.get('#id_recupera_iva').should('not.be.checked')
	  cy.wait(4000)
	  cy.get("#steps-uid-1 > div.actions.clearfix > ul > li:nth-child(3) > a").click({force: true})
	  cy.wait(70000)
	  cy.title().should('eq','UWIGO')
	  cy.wait(4000)
	  //cancela homologación
	  cy.get('button[type=button]').contains('No volver a mostrar').click({force: true})
	})

	/**

	it('Reporte Propyme', function()
	{
	  cy.get('a[href*="/343/1/parametros/reportes/lista/"]').click()
      cy.get('a[href*="/343/1/contabilidad/libro-propyme/"]').click()
      cy.wait(5000)
    })

    it('cerrar sesion uwigo', function() 
    {
      cy.get('a[href*="javascript:;"]').contains('BERNARDO SEGURA').click()
      cy.wait(2000)
      cy.get('a[href="/logout/"').click()
    })
    */
})