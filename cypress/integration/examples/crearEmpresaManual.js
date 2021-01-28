let username = 'bsegura@informat.cl'
let password = 'uwigo2511'
let rutEmpresa = '764282752'
let siiPass = 'jorge12'
let rutEmpresa2 = '764282752'
let usuarioSii = '76.428.275-2'

describe('probanding', function() 
{   
 
    before(function() { cy.visit('http://192.168.237.7:8080/login/?next=/') }) 
    beforeEach(() => { // before each test, we can automatically preserve the 
        // 'session_id' and 'remember_token' cookies. this means they 
        // will not be cleared before the NEXT test starts. // 
        // the name of your cookies will likely be different 
        Cypress.Cookies.preserveOnce('sessionid','csrftoken')
    })

 

//captura href="javascript:;" = 'a[href*="javascript:;"]'
//# con un id anteponer gato#

 

//ingreso a uwigo8080 con bsegura 
    it('login to Uwigo', function() 
    {    
      cy.get('#id_username').type(username)
      cy.get('#id_password').type(password)
      cy.contains('Iniciar Sesión').click()
    })
//crear empresa manual
    it('crear empresa',function()
    { 
     cy.get('a[href="#m-seleccionar-empresa-2"]').click()
     cy.get('#id_rut_empresa_sii').type(rutEmpresa)
     cy.get('#id_rut_usuario_sii').type(usuarioSii)
     cy.get('#id_usuario_clave_sii').type(siiPass)
     cy.contains('Manual').click()
     cy.wait(2000)
//información general de empresa
     cy.get('#id_id_fiscal').type(rutEmpresa2)
     cy.get('#id_nombre_fantasia').type('Vegan BuBu SA')
     cy.get('#id_razon_social').type('Amigos no comida')
     cy.get('#id_giro').select('Acabado de productos textiles', {force: true})
     cy.get('#id_pais').select('Chile',{force: true})
     cy.get('#id_direccion').type('Dirección RM Cypress Gil')
     cy.get('#id_zona').select('Metropolitana de Santiago', {force: true})
     cy.get('#id_ciudad').select('261',{force: true})//.should('have.value', '261')
     cy.get('#id_comuna').select('561',{force: true})//.should('have.value', '561')
     cy.get('#id_codigo_postal').type('562')
     cy.get('#id_codigo_area').select('2' ,{force: true})
     cy.get('#id_telefono').type('5321577')
     cy.get('#id_correo').type('cypress@gil.cl')
     cy.get('#id_representante_sii-0-rut').type('166609933')
     cy.get('#id_representante_sii-0-nombre').type('Representante RM Cypress Gil')
     cy.get('#id_representante_sii-0-apellido_paterno').type('Apellido RM Cypress Gil')
     cy.get('#id_representante_sii-0-correo').type('cypress@gil.cl')
     cy.get('#id_representante_sii-0-telefono').type('0')
     //cy.get('button[type=button]').contains(' Representante').click({force: true})
     cy.scrollTo('bottom')
     cy.get('#steps-uid-1 > div.actions.clearfix > ul > li:nth-child(2) > a').click({force: true})
     //Configuracion Básica
     cy.get('#id_carga_inicial').select('Estándar UWIGO' ,{force: true})
     cy.get('#id_periodo_uwigo').clear().type('01/2020')
     cy.get('#id_tipo_facturador').select('MI PYME',{force: true})
     cy.get('#id_regimen').select('General' ,{force: true}) //selector regimen General[H5-SP23]  
	 cy.get('#id_recupera_iva').should('be.checked') //solo si es general
	 cy.wait(4000)
	 cy.get('#id_regimen').select('Propyme',{force: true})
     cy.get('#id_recupera_iva').should('not.be.checked')
     cy.wait(4000)
     cy.get('#id_regimen').select('Propyme/Transparente',{force: true})
	 cy.get('#id_recupera_iva').should('not.be.checked')
     cy.get('#id_correo_intercambio').type('cypress@gil.cl')
     cy.get("#steps-uid-1 > div.actions.clearfix > ul > li:nth-child(3) > a").click({force: true})
     cy.wait(90000)
    })
})