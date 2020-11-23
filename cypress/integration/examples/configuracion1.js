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
        cy.wrap(genArr).each((index) => {
            // cy.get("#button-" + index).click()
            cy.get('.col-md-12 > .btn-white').click()
            cy.get('input[name=codigo]').type(idCodigo[index - 1])
            cy.get('input[name=descripcion]').type(nombres[index - 1])
            cy.get('#id_dimensiones').select('Cuentas',{force: true})
            cy.get('button[type=submit]').contains('Guardar').click()
            cy.wait(2000)
        })
    })


   it('DEFINICION DE DIMENSION DE PRODUCTOS Y SERVICIOS', function() //Dimension Productos y servicios
   {
     cy.get('a > span').contains('Configuración').click()
     cy.get('[href]').contains('Definición de Atributos').click()
     cy.get('.col-md-12 > .btn-white').click()
      cy.get('#id_codigo').type('5')
      cy.get('#id_descripcion').type('Productos y Servicios')
      cy.get('#id_dimensiones').select('Productos',{force: true})
      cy.get('button[type=submit]').contains('Guardar').click()
      cy.wait(2000)
   })

   it('DEFINICON DE DIMENSION CONTACTO CLIENTE', function() //Dimension contacto/cliente
   {
     cy.get('a > span').contains('Configuración').click()
     cy.get('[href]').contains('Definición de Atributos').click()
     cy.get('.col-md-12 > .btn-white').click()
     cy.get('#id_codigo').type('8')
     cy.get('#id_descripcion').type('Clientes')
     cy.get('#id_dimensiones').select('Contacto',{force: true})
     cy.get('button[type=submit]').contains('Guardar').click()
     cy.wait(2000)
   })
   

   it('DEFINICION DIMENSION CONTACTO PROVEEDORES', function() //Dimension contacto/proveedores
   {
      cy.get('a > span').contains('Configuración').click()
      cy.get('[href]').contains('Definición de Atributos').click()
      cy.get('.col-md-12 > .btn-white').click()
      cy.get('#id_codigo').type('9')
      cy.get('#id_descripcion').type('Proveedores')
      cy.get('#id_dimensiones').select('Contacto',{force: true})
      cy.get('button[type=submit]').contains('Guardar').click()
      cy.wait(2000)
    })
    
    

   
   it('CREACION BCO - CUENTA CORRIENTE', function() 
    {
      cy.get('a > span').contains('Configuración').click()  
      cy.get('[href]').contains('Cuentas Corrientes').click()
        var genArr = Array.from({length:3},(v,k)=>k+1)
        var idBanco = ['1 - BANCO DE CHILE', '37 - BANCO SANTANDER-CHILE','16 - BANCO DE CREDITO E INVERSIONES']
        var numeroCuenta = ['123456789', '987654321', '555555555']
        var plandecuenta = ['11.02.50 - Banco Chile', '11.02.70 - Banco Santander', '11.02.10 - Banco BCI']
        var idMoneda = ['$ - CLP', '$ - CLP', 'U$ - USD']
        cy.wrap(genArr).each((index) => {
            // cy.get("#button-" + index).click()
            cy.get('.col-md-12 > .btn-white').click()
            cy.get('#id_banco').type(idBanco[index - 1])
            cy.get('#id_numero_cuenta').type(numeroCuenta[index - 1])
            cy.get('#id_plan_cuenta').type(plandecuenta[index - 1])
            cy.get('#id_moneda_id').type(idMoneda[index - 1])
            cy.get('#id_digito_calce').type('5')
            cy.get('button[type=submit]').contains('Guardar').click()
            cy.wait(2000)
        })
    })
    

   it('PARAMETROS DE EGRESOS', function() 
   {
    cy.get('a > span').contains('Configuración').click()
    cy.get('[href]').contains('Parámetros Egresos').click()
        var genArr = Array.from({length:4},(v,k)=>k+1)
        var plandecuenta = ['11.02.50 - Banco Chile', '11.02.70 - Banco Santander', '11.02.10 - Banco BCI', '11.01.10 -  Caja']
        var nombreBanco = ['Banco Chile Cheques ', 'Banco Santander Transferencias','Banco BCI Dolares', 'Caja y Efectivo']
        var chequeInicio = ['2100',' ',' ']
        var chequeFin = ['4100',' ',' ',]
        var chequeActual = ['2100',' ',' ']
         
        cy.wrap(genArr).each((index) => {
        // cy.get("#button-" + index).click()
        cy.get('#id_plan_cuenta').select(plandecuenta[index - 1], {force: true})
        cy.get('#id_descripcion').type(nombreBanco[index - 1])
        cy.get('#id_correlativo_inicio').then((corre_ini) => {
          corre_ini.should('have.attr', 'readonly')
            corre_ini.type(chequeInicio[index - 1],{force:true})
          })
        cy.get('#id_correlativo_fin').then((corre_ini) => {
          corre_ini.should('have.attr', 'readonly')
            corre_ini.type(chequeFin[index - 1],{force:true})
          })
        cy.get('#id_correlativo_actual').then((corre_ini) => {
          corre_ini.should('have.attr', 'readonly')
            corre_ini.type(chequeActual[index - 1],{force:true})
          })
        cy.get('button[type=submit]').contains('Guardar').click()
        cy.wait(3000)
      })
    })
    
    
   
    it('CREACION FOLIOS', function() 
    {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
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
    
    it('logout to Uwigo', function() 
    {
      cy.get('a[href*="javascript:;"]').contains('BERNARDO SEGURA').click()
      cy.get('a[href*="/logout/"]').click()
      cy.wait(2000)
    
    })

})