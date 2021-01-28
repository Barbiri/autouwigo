describe('Pruebita', function() 
{   
 
    before(function() { cy.visit('http://192.168.237.7:8080/login/?next=/') }) 
    beforeEach(() =>
     { 
        Cypress.Cookies.preserveOnce('sessionid','csrftoken')
     })

    it('login to Uwigo', function() 
    {

      cy.get('#id_username').type('bsegura@informat.cl')
      cy.get('#id_password').type('uwigo2511')
      cy.contains('Iniciar Sesión').click()
    })

    it('Ir a  empresa', function() 
    {
      //Buscar empresa
      cy.get('#t-empresas_filter > label > input').type('76.428.275-2')
      //Ingresa a empresa clickeada
      cy.get('#t-empresas > tbody > tr > td:nth-child(3) > a').click()
      cy.get(2000)
      cy.get('a[href*="javascript:;"]').contains('Módulos').trigger('mousedown')
      cy.contains('Compras').click({ force: true })
      // + Añadir Documento Manual
      cy.get('a[href*="javascript:;"]').contains('Documento Manual').click()

    })


})