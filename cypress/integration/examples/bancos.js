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
            cy.get('.col-md-12 > .btn-white').click()
            cy.get('#id_banco').select(idBanco[index - 1],{force: true})
            cy.get('#id_numero_cuenta').type(numeroCuenta[index - 1])
            cy.get('#id_plan_cuenta').select(plandecuenta[index - 1],{force: true})
            cy.get('#id_moneda_id').select(idMoneda[index - 1],{force: true})
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
         var plandecuenta = ['11.02.50 - Banco Chile', '11.02.70 - Banco Santander', '11.02.10 - Banco BCI', '11.01.10 - Caja']
         var nombreBanco = ['Banco Chile Cheques ', 'Banco Santander Transferencias','Banco BCI Dolares', 'Caja y Efectivo']
         var chequeInicio = ['2100',' ',' ','readonly']
         var chequeFin = ['4100',' ',' ','readonly']
         var chequeActual = ['2100',' ',' ','readonly']
          
         cy.wrap(genArr).each((index) => {
         cy.get('.col-md-12 > .btn-white').click()
         cy.get('#id_plan_cuenta').select(plandecuenta[index - 1], {force: true})
         cy.get('#id_descripcion').type(nombreBanco[index - 1])
         cy.get('#id_correlativo_inicio').type(chequeInicio[index - 1], {force: true}) 
         cy.get('#id_correlativo_fin').type(chequeFin[index - 1], {force: true})
         cy.get('#id_correlativo_actual').type(chequeActual[index - 1], {force: true})
         cy.get('button[type=submit]').contains('Guardar').click()
         cy.wait(3000)
       })
  })

})