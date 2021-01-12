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
     
/*
      it('ATRIBUTOS CENTRO DE COSTO', function() //Centro Costo
      {
        
         cy.get('a > span').contains('Configuración').click()
         cy.get('[href]').contains('Definición de Atributos').click()
         var genArr = Array.from({length:8},(v,k)=>k+1)
         var codigos = ['6-600', '6-610', '6-620', '6-630','6-631','6-632','6-633','6-634']
         var nombres = ['Administración y Finanzas', 'Gerencia General', 'Comercial', 'Recursos Humanos','Soporte','Consultoria','Ingenierias','ASP']
         cy.wrap(genArr).each((index) => {
         cy.get('.col-md-12 > :nth-child(2) > .btn').click()
         cy.wait(3000)
         cy.get('#id_tipo_atributo').select('Centro Costo',{force: true})
         cy.get('input[name=codigo]').last().type(codigos[index - 1],{force: true})
         cy.get('input[name=descripcion]').last().type(nombres[index - 1],{force: true})
         cy.get('#nuevo_atributo_m').click({force: true})
         cy.wait(6000)
      })
      })
      
      
      it('ATRIBUTOS PRODUCTOS Y SERVICIOS', function() 
      {
         cy.get('a > span').contains('Configuración').click()
         cy.get('[href]').contains('Definición de Atributos').click()
         var genArr = Array.from({length:8},(v,k)=>k+1)
         var codigos = ['5-500', '5-510', '5-520', '5-530','5-540','5-550','5-560','5-570']
         var nombres = ['Asesorias', 'Capacitaciones', 'Desarrollo Proyectos', 'Servicio Armado','Notebook','Accesorios','Impresoras','Repuestos']
         cy.wrap(genArr).each((index) => {
         cy.get('.col-md-12 > :nth-child(2) > .btn').click()
         cy.get('#id_tipo_atributo').select('Productos y Servicios',{force: true})
         cy.get('input[name=codigo]').last().type(codigos[index - 1],{force: true})
         cy.get('input[name=descripcion]').last().type(nombres[index - 1],{force: true})
         cy.get('#nuevo_atributo_m').click({force: true})
         cy.wait(6000)
      })
      })
      

      it('ATRIBUTOS CLIENTES', function() 
      {
         cy.get('a > span').contains('Configuración').click()
         cy.get('[href]').contains('Definición de Atributos').click()
         var genArr = Array.from({length:4},(v,k)=>k+1)
         var codigos = ['8-800', '8-810', '8-820', '8-830']
         var nombres = ['Retail y Distribución', 'Constructoras e Inmobiliarias', 'Distribución Servicios Básicos', 'Productivas y Manufactureras']
         cy.wrap(genArr).each((index) => {
         cy.get('.col-md-12 > :nth-child(2) > .btn').click()
         cy.get('#id_tipo_atributo').select('Clientes',{force: true})
         cy.get('input[name=codigo]').last().type(codigos[index - 1],{force: true})
         cy.get('input[name=descripcion]').last().type(nombres[index - 1],{force: true})
         cy.get('#nuevo_atributo_m').click({force: true})
         cy.wait(6000)
      })
   })
   */

   it('ATRIBUTOS PROVEEDORES', function() 
      {
         cy.get('a > span').contains('Configuración').click()
         cy.get('[href]').contains('Definición de Atributos').click()
         var genArr = Array.from({length:3},(v,k)=>k+1)
         var codigos = ['9-900', '9-910', '9-920']
         var nombres = ['Suministros Básicos', 'Suministros de Producto','Suministros Operacionales']
         cy.wrap(genArr).each((index) => {
         cy.get('.col-md-12 > :nth-child(2) > .btn').click()
         cy.get('#id_tipo_atributo').select('Proveedores',{force: true})
         cy.get('input[name=codigo]').last().type(codigos[index - 1],{force: true})
         cy.get('input[name=descripcion]').last().type(nombres[index - 1],{force: true})
         cy.get('#nuevo_atributo_m').click({force: true})
         cy.wait(6000)
      })
      })
      
   
      
      
      
      it('ATRIBUTOS TIPO DE GASTOS', function() //Tipo Gasto
      {
         cy.get('a > span').contains('Configuración').click()
         cy.get('[href]').contains('Definición de Atributos').click()
         var genArr = Array.from({length:43},(v,k)=>k+1)
         var codigos = ['7-700','7-701','7-703','7-704','7-705','7-706','7-707','7-708','7-709','7-710','7-711','7-712','7-713',
         '7-714','7-715','7-716','7-717','7-718','7-719','7-720','7-721','7-722','7-723','7-724','7-725','7-726','7-750',
         '7-751','7-752','7-753','7-754','7-755','7-756','7-757','7-758','7-759','7-760','7-761','7-762','7-763','7-764','7-765','7-766']
         var tgastos = ['Gastos Notariales','Gastos Energía Eléctrica','Gastos Telefonía','Gastos Internet','Gasto Arriendo Oficina','Gasto Asesorías',
         'Marketing y Publicidad','Gasto Seguros','Licencias Software','Proporcionalidad IVA CF','Asesorias Evaluacion Hardware','Asesorias Evaluacion Software',
         'Servicios Armado Equipos','Asesorias Implementacion Hardware','Asesorias Implementacion Software','Asesoria Seguridad Informatica',
         'Asesoria e Implementacion Seguridad Informatica','Capacitaciones Office 360 - Word','Capacitaciones Office 360 - Excel','Capacitaciones Office 360 - PowerPoint',
         'Capacitaciones Office 360 - Access','Desarrollo de Sistemas','Evaluacion Desarrollo Sistemas','Desarrollo IA','Ingenieria proyectos',
         'Equipos Computacionales','Sueldos','Ticket Restaurant','Bonos','Provisión Indemnizaciones','Movilización','Atrasos','Gratificación','Sobre Tiempo 50%',
         'Sobre Tiempo 100%','Aguinaldos','Comisión Vendedores','Descuentos Otorgados','Asignacion Celular','Asignacion Familiar','Aporte Patronal S.C','Aporte Patronal Mutual','Aportes Pacto Covid']
         cy.wrap(genArr).each((index) => {
         cy.get('.col-md-12 > :nth-child(2) > .btn').click()
         cy.get('#id_tipo_atributo').select('Item',{force: true})
         cy.get('input[name=codigo]').last().type(codigos[index - 1],{force: true})
         cy.get('input[name=descripcion]').last().type(tgastos[index - 1],{force: true})
         cy.get('#nuevo_atributo_m').click({force: true})
         cy.wait(6000)
         cy.wait(3000)
      })
      })

      it ('Creación Cuenta Contable ',function() // Creacoón Cuenta Contable iNTERESES DIFERIDOS
      {
          cy.get('a > span').contains('Configuración').click()
          cy.get('a[href*="plan-cuenta"]').contains('Plan de Cuenta').click()
          cy.wait(1000)
          cy.get('.form-group > .btn-white').click() // Nueva Cuenta
          cy.get('#id_agrupacion_plan_cuenta').select('ACTIVO', {force: true})
          cy.get('#id_codigo').type('11.10.50')
          cy.get('#id_descripcion').type('Intereses Diferidos C/P')
          cy.get('#id_contra_cuenta').select('63.02.10 - Diferencia de Cambio', {force: true})
          cy.get('input[name="es_analisis_cuenta"]').click({force: true})
          cy.get('input[name="es_doc_referencial"]').click({force: true})
          cy.get('#id_ef_balance_activo').select('Otros  Activos', {force: true})
          cy.get('button[type=submit]').contains('GUARDAR').click()
          cy.wait(2000)
   
      })
   

      it ('Editar Cuenta Contable ',function() // Asociación Atributos (CC -Item) a Cuentas Contables
      {
          cy.get('a > span').contains('Configuración').click()
          cy.get('a[href*="plan-cuenta"]').contains('Plan de Cuenta').click()
          cy.wait(2000)
          //variables Buscar Cuentas y Asignar Atributo
          var genArr = Array.from({length:7},(v,k)=>k+1) 
          var Cuenta_Ctble = ['61.01.20','61.04.10','61.04.25','61.04.30','62.01.10','51.01.10','51.01.20']
          
          cy.wrap(genArr).each((index) =>
          {
                
          cy.get('#tabla-plan-cuenta_filter').type(Cuenta_Ctble[index-1])
          cy.wait(1000)
          cy.get('#tabla-plan-cuenta > tbody > tr > td:nth-child(3) > a').click()
          cy.wait(1000)
          cy.get('#id_tipos_atributos').select(['Centro Costo','Item'],{force: true})
          cy.wait(1000)
          cy.get('button[type=submit]').contains('GUARDAR').click()
          cy.wait(2000)
          })
   
      })
   



       it('Edita Cuentas y Asigna Def. Att solo item',function()
      {
         cy.get('a > span').contains('Configuración').click()
         cy.get('a[href*="plan-cuenta"]').contains('Plan de Cuenta').click()
         cy.wait(1000)
         cy.get('#tabla-plan-cuenta_filter').type('61.04.20')
         cy.get('#tabla-plan-cuenta > tbody > tr > td:nth-child(3) > a').click()
         cy.wait(3000)
         cy.get('#id_tipos_atributos').select('Item',{force:true})
         cy.wait(1000)
         cy.get('button[type=submit]').contains('GUARDAR').click()
      })


   })