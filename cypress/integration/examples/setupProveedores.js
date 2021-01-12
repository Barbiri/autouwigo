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

    it('SETUP PROVEEDORES', function() 
    {
      cy.get('a > span').contains('Configuración').click()
      cy.get('a[href*="proveedor"]').contains('Setup Proveedores').click()
        //var genArr = Array.from({length:11},(v,k)=>k+1)
        //var descripcion = ['Arriendo Oficina', 'Gasto Administración', 'Gasto Administración',]
      
        //cy.wrap(genArr).each((index) => {
            cy.get('.col-md-12 > .btn-white').click()
            cy.get('#id_proveedores').select('99.061.000-2/0 - Liberty Compañía de Seguros Generales S.A.',{force: true})
            cy.get('#id_descripcion').type('Gasto Administración')
            cy.get('#id_glosa').type('Gasto Polizas de Seguro')
            cy.get('#id_tipo_cuenta').select('GASTO',{force: true})
            cy.get('#id_automatico').click({force: true})
            cy.get('#id_codigo').type('61.04.30')
            cy.get('#id_porcentaje').type('100')
            //cy.get('.form-detalle-compra > .row > :nth-child(5)').click()
            cy.get('.row > :nth-child(5)').each(($el, indice, $list) => {
              if (!$el.closest(".input-group").hasClass('hide')) {
              cy.get($el).select('Administracion y Finanzas'[index - 1], {force: true})
              }
              })
            cy.get('button[type=submit]').contains(' Crear Linea').click()




            //cy.get('button[type=submit]').contains('GUARDAR Y SALIR').click()
            cy.wait(2000)
        
    })


})