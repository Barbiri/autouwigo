const { select } = require("async")

let username = 'bsegura@informat.cl'
let password = 'uwigo2511'
let searchRut = '76.428.275-2'

describe('Pruebita', function() 
{   
 
    before(function() { cy.visit('http://192.168.237.7:8080/login/?next=/') }) 
    beforeEach(() =>
     { 
        Cypress.Cookies.preserveOnce('sessionid','csrftoken')
     })

    it('login to Uwigo', function() 
    {

      cy.get('#id_username').type(username)
      cy.get('#id_password').type(password)
      cy.contains('Iniciar Sesión').click()
    })

    it('Ir a Configuracion de empresa', function() 
    {
      //Buscar empresa
      cy.get('#t-empresas_filter > label > input').type(searchRut)
      cy.get('#t-empresas > tbody > tr > td:nth-child(3) > a').click()
      cy.get(2000)
      //Ingresa a configuracion de la empresa clickeada
      cy.get('a > span').contains('Configuración').click()
    })

    
    it('DEFINICION DIMENSION CUENTA', function() //dimension cuenta
    {
        cy.get('[href]').contains('Definición de Atributos').click()
        var genArr = Array.from({length:2},(v,k)=>k+1)
        var idCodigo = ['6', '7']
        var nombres = ['Centro Costo', 'Item']
        var dimension = [['Cuentas', 'Nómina - Personal Contractual'], ['Cuentas']]
        cy.wrap(genArr).each((index) => {
            cy.get('.col-md-12 > :nth-child(1) > .btn').click()
            cy.get('#id_codigo').type(idCodigo[index - 1]).should('be.visible')
            cy.get('#id_descripcion').type(nombres[index - 1]).should('be.visible')
            cy.get('#id_dimensiones').select(dimension[index - 1],{force: true})
            cy.get('button[type=submit]').contains('Aceptar').click()
            cy.wait(2000)
        })
    })


   it('DEFINICION DE DIMENSION DE PRODUCTOS Y SERVICIOS', function() //Dimension Productos y servicios
   {
     cy.get('a > span').contains('Configuración').click()
     cy.get('[href]').contains('Definición de Atributos').click()
     cy.get('.col-md-12 > :nth-child(1) > .btn').click()
      cy.get('#id_codigo').type('5')
      cy.get('#id_descripcion').type('Productos y Servicios')
      cy.get('#id_dimensiones').select('Productos',{force: true})
      cy.get('button[type=submit]').contains('Aceptar').click()
      cy.wait(2000)
   })

   it('DEFINICON DE DIMENSION CONTACTO CLIENTE', function() //Dimension contacto/cliente
   {
     cy.get('a > span').contains('Configuración').click()
     cy.get('[href]').contains('Definición de Atributos').click()
     cy.get('.col-md-12 > :nth-child(1) > .btn').click()
     cy.get('#id_codigo').type('8')
     cy.get('#id_descripcion').type('Clientes')
     cy.get('#id_dimensiones').select('Contacto',{force: true})
     cy.get('button[type=submit]').contains('Aceptar').click()
     cy.wait(2000)
   })
   

   it('DEFINICION DIMENSION CONTACTO PROVEEDORES', function() //Dimension contacto/proveedores
   {
      cy.get('a > span').contains('Configuración').click()
      cy.get('[href]').contains('Definición de Atributos').click()
      cy.get('.col-md-12 > :nth-child(1) > .btn').click()
      cy.get('#id_codigo').type('9')
      cy.get('#id_descripcion').type('Proveedores')
      cy.get('#id_dimensiones').select('Contacto',{force: true})
      cy.get('button[type=submit]').contains('Aceptar').click()
      cy.wait(2000)
    })
    
   
    it('CREACION FOLIOS', function() 
    {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      cy.get('a > span').contains('Configuración').click()
      cy.get('[href]').contains('Carga Folio').click()
      var genArr = Array.from({length:4},(v,k)=>k+1)
      var grpDocumento = ['Factura Afecta Vta','Factura Exenta Vta','Nota Crédito Vta','Nota Débito Vta']
      var folioInicio = ['100','200','300','400']
      var folioFin = ['199','299','399','499']
      cy.wrap(genArr).each((index) => {
      cy.get('.col-md-12 > .btn-white').click()
      cy.get('#id_tipo_folio').select('Manual',{force: true})
      cy.wait(2000)
      cy.get('#id_grupo_documento').select(grpDocumento[index - 1], {force: true})
      cy.get('#id_folio_inicio').type(folioInicio[index - 1], {force: true})
      cy.get('#id_folio_fin').type(folioFin[index - 1], {force: true})
      cy.get('button[type=submit]').contains('Guardar').click()
      cy.wait(3000) 
     })
    })
    
})