let username = 'bsegura@informat.cl'
let password = 'uwigo2511'
let rutEmpresa = '764282752'
let siiPass = 'jorge12'
let rutEmpresa2 = '764282752'
let searchRut = '76.428.275-2'
let usuarioSii = '76.428.275-2'

describe('Pruebita', function() 
{   
 
    before(function() { cy.visit('http://192.168.237.7:8080/login/?next=/') }) 
    beforeEach(() => { // before each test, we can automatically preserve the 
        // 'session_id' and 'remember_token' cookies. this means they 
        // will not be cleared before the NEXT test starts. // 
        // the name of your cookies will likely be different 
       Cypress.Cookies.preserveOnce('sessionid','csrftoken') })

    it('login to Uwigo', function() 
    {

      cy.get('#id_username').type(username)
      cy.get('#id_password').type(password)
      cy.contains('Iniciar Sesión').click()

    })
/*
    it('Ir a Configuracion de empresa', function() 
    {
      //Buscar empresa
      cy.get('#t-empresas_filter > label > input').type(searchRut)
      cy.get('#t-empresas > tbody > tr > td:nth-child(3) > a').click()
      cy.get(2000)
      //Ingresa a configuracion de la empresa clickeada
      cy.get('a > span').contains('Configuración').click()
    })
*/
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
     cy.wait(98000)
    })

    it('DEFINICION DIMENSION CUENTA', function() //dimension cuenta
    {
        cy.get('a > span').contains('Configuración').click()
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
         cy.wait(4000)
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
         cy.wait(4000)
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
         cy.wait(4000)
      })
   })
   

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
         cy.wait(4000)
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
         cy.wait(2000)
          cy.get('a > span').contains('Configuración').click()
          cy.get('a[href*="plan-cuenta"]').contains('Plan de Cuenta').click()
          cy.wait(7000)
          //variables Buscar Cuentas y Asignar Atributo
          var genArr = Array.from({length:8},(v,k)=>k+1) 
          var Cuenta_Ctble = ['61.01.10','61.01.20','61.04.10','61.04.25','61.04.30','62.01.10','51.01.10','51.01.20']
          
          cy.wrap(genArr).each((index) =>
          {
          cy.scrollTo('top',{ensureScrollable: false})        
          cy.get('#tabla-plan-cuenta_filter').type(Cuenta_Ctble[index-1],{force: true})
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
         cy.scrollTo('top')  
         cy.get('#tabla-plan-cuenta_filter').type('61.04.20')
         cy.get('#tabla-plan-cuenta > tbody > tr > td:nth-child(3) > a').click()
         cy.wait(3000)
         cy.get('#id_tipos_atributos').select('Item',{force:true})
         cy.wait(1000)
         cy.get('button[type=submit]').contains('GUARDAR').click()
         cy.wait(3000)
      })


     
      
      it('CONTACTO PROVEEDOR', function() //Contacto Proveedores
      {
      cy.get('a > span').contains('Configuración').click()
      cy.get('a[href*="personas"]').contains('Contactos').click()
      
      var genArr = Array.from({length:12},(v,k)=>k+1)
      var ruts = ['96800570-7', '90635000 - 9', '93737000 - 8', '97.004.000-5','99.061.000-2','99524110-2',
      '96.705.940-4','96.823.020-4','78137000-2','96.828.860-1','76.481.745-1','60.805.000-0']
      var rsocial = ['ENEL DISTRIBUCION CHILE S.A.', 'TELEFONICA CHILE S.A.', 'GTD MANQUEHUE S.A.', 'BANCO DE CHILE','Liberty Compañía de Seguros Generales S.A.',
      'LICENCIAS ON LINE S.A.','Intcomex S.A.','TECNOGLOBAL S A','INGRAM MICRO CHILE S.A.',
      'IMPORTADORA Y DISTRIBUIDORA EXF CHILE S.A.','INMOBILIARIA CAROL URZUA SPA','TESORERIA GENERAL DE LA REPUBLICA']
      var nombre = ['ENEL DISTRIBUCION CHILE S.A.', 'TELEFONICA CHILE S.A.', 'GTD MANQUEHUE S.A.', 'BANCO DE CHILE','Liberty Compañía de Seguros Generales S.A.',
      'LICENCIAS ON LINE S.A.','Intcomex S.A.','TECNOGLOBAL S A','INGRAM MICRO CHILE S.A.',
      'IMPORTADORA Y DISTRIBUIDORA EXF CHILE S.A.','INMOBILIARIA CAROL URZUA SPA','TESORERIA GENERAL DE LA REPUBLICA']
      var direccion = ['SANTA ROSA 76 PISO 2', ' AV. PROVIDENCIA 111', 'AV. EL CONDOR 760.', 'Ahumada 251','Agustinas N°1356',
      'Avenida Del Valle 961','Cordillera 331 Módulo C-2','El Conquistador del Monte 4848','Avenida El Rosal 4765',
      'Josue Smith Solar 390','aurelio gonzalez 3390', 'providencia 999']
      cy.wrap(genArr).each((index) => {
      cy.get('.col-md-12 > .btn-white').click()
      cy.get('#id_persona_juridica').click()
      cy.wait(1000)
      cy.get('#id_id_fiscal').type(ruts[index - 1])
      cy.get('#id_razon_social').type(rsocial[index - 1])
      cy.get('#id_nombre_fantasia').type(nombre[index - 1])
      cy.get('#id_correo').type('bubu@bubu.com')
      cy.get('#id_giro').select('Acabado de productos textiles', {force: true})
      cy.get('#id_direccion').type(direccion[index - 1])
      cy.get('#id_pais_id').select('Chile', {force: true})
      cy.wait(2000)
      cy.get('#id_region_id').select('Metropolitana de Santiago', {force: true})
      cy.wait(2000)
      cy.get('#id_ciudad_id').select('Santiago', {force: true})
      cy.wait(2000)
      cy.get('#id_zona_id').select('Santiago', {force: true})
      cy.wait(2000)
      cy.get('#id_tipo_persona').select('Proveedor', {force: true})
      cy.wait(2000)
      cy.get('#id_condicion_compra').select('10 - 30/60 días', {force: true})
      cy.get('#id_atributos').select('Suministros Básicos', {force: true})
      cy.get('button[type=submit]').contains('GUARDAR Y SALIR').click()
      cy.wait(5000)
      })
      })


      it('CONTACTO CLIENTE', function() //Contacto Clientes
      {
      cy.get('a > span').contains('Configuración').click()
      cy.get('a[href*="personas"]').contains('Contactos').click()
      
      var genArr = Array.from({length:15},(v,k)=>k+1)
      var ruts = ['96985620-4', '99520800-8','96974830-4','96925340-2',
      '96956180-8','96874890-4','96885990-0','96818920-4','96689300-1',
      '96570630-5','93333000-1','89906900-5','89026600-2','82396700-4','78897620-8']
      var rsocial = ['EUROANDINO S.A.','PROPUESTA INMOBILIARIA S.A.','INVERSIONES DESCO S.A.','INVERSIONES RINCONADA S.A.',
      'PAPIRO S.A.','SERVICIOS AUTOMOTRICES SERVICLUB S.A.','STEFANINI CHILE S.A.',
      'DISTRIBUIDORA Y COMERCIAL PACIFICO S.A.','RECICLADORA AMBIENTAL LTDA.','CIA. DE METALMECANICA Y CALDERERIA S.A.',
      'ACETOGEN GAS CHILE S.A.', 'SMC PNEUMATICS CHILE S.A.','TECNOLOGIA EN TRANSPORTE MINERALES S.A',
      'COOPERATIVA LUZPAR LTDA.','INMOBILIARIA RINCONADA LTDA.']
      var nombre = ['EUROANDINO S.A.','PROPUESTA INMOBILIARIA S.A.','INVERSIONES DESCO S.A.','INVERSIONES RINCONADA S.A.',
      'PAPIRO S.A.','SERVICIOS AUTOMOTRICES SERVICLUB S.A.','STEFANINI CHILE S.A.',
      'DISTRIBUIDORA Y COMERCIAL PACIFICO S.A.','RECICLADORA AMBIENTAL LTDA.','CIA. DE METALMECANICA Y CALDERERIA S.A.',
      'ACETOGEN GAS CHILE S.A.', 'SMC PNEUMATICS CHILE S.A.','TECNOLOGIA EN TRANSPORTE MINERALES S.A',
      'COOPERATIVA LUZPAR LTDA.','INMOBILIARIA RINCONADA LTDA.']
      var direccion = ['Avenida Vitacura 2771 Of. 502', 'Calle Nuestra Señora De Los Angeles 179', 'Avenida Santa María 2020',
      'Carretera Sn Martín 1025','Alberto Riesco 223','Avda Andres Bello 1863',
      'Avenida Providencia 2331 Of. 302','Avenida Recoleta 1750', 'Colón 325','Diego De Meza 5054','Avenida del parque 4160 ',
      'Avenida La Montaña 1115 Valle Grande','Calle Unión Americana 448','Avenida Anibal Pinto 1250','Avenida del parque 4560 ']
      cy.wrap(genArr).each((index) => {
      cy.get('.col-md-12 > .btn-white').click()
      cy.get('#id_persona_juridica').click()
      cy.wait(1000)
      cy.get('#id_id_fiscal').type(ruts[index - 1])
      cy.get('#id_razon_social').type(rsocial[index - 1])
      cy.get('#id_nombre_fantasia').type(nombre[index - 1])
      cy.get('#id_correo').type('bubu@bubu.com')
      cy.get('#id_giro').select('Acabado de productos textiles', {force: true})
      cy.get('#id_direccion').type(direccion[index - 1])
      cy.get('#id_pais_id').select('Chile', {force: true})
      cy.get('#id_region_id').select('Metropolitana de Santiago', {force: true})
      cy.wait(1000)
      cy.get('#id_ciudad_id').select('Santiago', {force: true})
      cy.wait(1000)
      cy.get('#id_zona_id').select('Santiago', {force: true})
      cy.wait(2000)
      cy.get('#id_tipo_persona').select('Cliente', {force: true})
      cy.wait(1000)
      cy.get('#id_condicion_venta').select('10 - 30/60 días', {force: true})
      cy.get('#id_atributos').select('Retail y Distribución', {force: true})
      cy.get('button[type=submit]').contains('GUARDAR Y SALIR').click()
      cy.wait(5000)
      })
      })


      
      it('CREACION PRODUCTO VENTAS', function() 
      {
      cy.get('a > span').contains('Configuración').click()
      cy.get('a[href*="producto"]').contains('Productos').click()
      var genArr = Array.from({length:15},(v,k)=>k+1)
      var codigos = ['Prd-001','Prd-002','Prd-003','Prd-004','Prd-005', 'Prd-006','Prd-007','Prd-008','Prd-009','Prd-010',
      'Prd-011','Prd-012','Prd-013','Prd-014','Prd-015']
      var nombres = ['Notebook HP 240 i3','Notebook HP 260 i4','Notebook HP 280 i7', 'Monitor AOC 17 Pulgadas',
      'Monitor AOC 22 Pulgadas','Monitor AOC 32 Pulgadas','Pack Genius 1 plus','Pack Genius Wireless',
      'Rack Router W7','Impresora HP Láser Jet 4K','HP Matriz de Punto 3W','HP 50 Comanderas','Asus Placa Madre 2GB',
      'Nvidia Placa Madre 32GB', 'WD Disco Duro 4TB']
      var detalles = ['Notebook HP 240 i3','Notebook HP 260 i4','Notebook HP 280 i7', 'Monitor AOC 17 Pulgadas',
      'Monitor AOC 22 Pulgadas','Monitor AOC 32 Pulgadas','Pack Genius 1 plus','Pack Genius Wireless',
      'Rack Router W7','Impresora HP Láser Jet 4K','HP Matriz de Punto 3W','HP 50 Comanderas','Asus Placa Madre 2GB',
      'Nvidia Placa Madre 32GB', 'WD Disco Duro 4TB']
      var productos = ['Notebook','Notebook','Notebook','Accesorios','Accesorios','Accesorios',
      'Accesorios','Accesorios','Accesorios','Impresoras','Impresoras','Impresoras','Repuestos','Repuestos','Repuestos']
      var precio =  ['1226881','1101066','1315949','1220917','1380376','1388915',
      '936980','1347434','1070670','1250463','1321067','1138894','1086201','1007647','1206386']
      cy.wrap(genArr).each((index) => {
      cy.get('.col-md-12 > .btn-white').click()
      cy.get('#id_tipo_producto').select('Producto Terminado',{force: true})
      cy.get('#id_codigo').type(codigos[index - 1])
      cy.get('#id_nombre').type(nombres[index - 1])
      cy.get('#id_descripcion').type(detalles[index - 1])
      cy.get('#id_unidad_medida_base').select('Unidad', {force: true})
      cy.get('input[name="es_afecto"]').click({force: true})
      cy.get('#id_atributos').select(productos[index - 1], {force: true}) 
      cy.get('#id_productocontabilidad_set-0-plan_cuenta').select('51.01.10 - Venta de Productos', {force: true})
      cy.wait(2000)
      cy.get('#id_productocontabilidad_set-0-atributos').select(['Comercial', 'Equipos Computacionales'], {force: true})
      cy.wait(2000)
      cy.get('#id_productocontabilidad_set-0-orientacion').select('Haber', {force: true})
      cy.wait(2000)
      cy.get('#id_productocontabilidad_set-0-precio_unitario').clear().type(precio[index - 1])
      cy.wait(2000)
      cy.get('button[type=submit]').contains('GUARDAR Y SALIR').click()
      cy.wait(3000)
      })
      })
      

      it('CRACION PRODUCTOS SERVICIOS', function() //Centro Costo 
      {
      cy.get('a > span').contains('Configuración').click()
      cy.get('a[href*="producto"]').contains('Productos').click()
      var genArr = Array.from({length:15},(v,k)=>k+1)
      var codigos = ['S-001','S-002','S-003','S-004','S-005', 'S-006','S-007','S-008','S-009','S-010',
      'S-011','S-012','S-013','S-014','S-015']
      var nombres = ['Servicios Armado Equipos','Asesorias Evaluacion Hardware','Asesorias Evaluacion Software',
      'Asesorias Implementacion Hardware','Asesorias Implementacion Software','Asesoria Seguridad Informatica', 'Asesoria e Implementacion Seguridad Informatica',
      'Capacitaciones Office 360 - Word','Capacitaciones Office 360 - Excel','Capacitaciones Office 360 - PowerPoint',
      'Capacitaciones Office 360 - Access','Desarrollo de Sistema','Evaluacion Desarrollo Sistemas',
      'Desarrollo IA', 'Ingenieria proyectos']
      var detalles = ['Servicios Armado Equipos','Asesorias Evaluacion Hardware','Asesorias Evaluacion Software',
      'Asesorias Implementacion Hardware','Asesorias Implementacion Software','Asesoria Seguridad Informatica', 'Asesoria e Implementacion Seguridad Informatica',
      'Capacitaciones Office 360 - Word','Capacitaciones Office 360 - Excel','Capacitaciones Office 360 - PowerPoint',
      'Capacitaciones Office 360 - Access','Desarrollo de Sistema','Evaluacion Desarrollo Sistemas',
      'Desarrollo IA', 'Ingenieria proyectos']
      var productos = ['Servicio Armado','Asesorias','Asesorias','Asesorias','Asesorias','Asesorias',
      'Asesorias','Capacitaciones','Capacitaciones','Capacitaciones','Capacitaciones','Desarrollo Proyectos','Desarrollo Proyectos','Desarrollo Proyectos','Desarrollo Proyectos']
      var precio =  ['1156723', '1290971','1036957','1204887','964260','1055192', '965424', '1100277', '1365283', 
      '1060657', '1254398','956692','1128694','1396198','918006']
      var attCta =  [['Ingenierias', 'Asesorias Evaluacion Hardware'] , ['Ingenierias', 'Asesorias Evaluacion Hardware'], ['Soporte', 'Servicios Armado Equipos'],
         ['Soporte', 'Asesorias Implementacion Hardware'] , ['Soporte', 'Asesorias Implementacion Software'] , ['Ingenierias', 'Asesoria Seguridad Informatica'],
         ['ASP', 'Asesoria e Implementacion Seguridad Informatica'], ['Consultoria', 'Capacitaciones Office 360 - Word'], 
         ['Consultoria', 'Capacitaciones Office 360 - Excel'], ['Consultoria', 'Capacitaciones Office 360 - PowerPoint'], 
         ['Consultoria', 'Capacitaciones Office 360 - Access'], ['ASP', 'Desarrollo de Sistemas'], ['ASP', 'Evaluacion Desarrollo Sistemas'], 
         ['ASP', 'Desarrollo IA'], ['Ingenierias', 'Ingenieria proyectos']]
         cy.wrap(genArr).each((index) => {
         cy.get('.col-md-12 > .btn-white').click()
         cy.get('#id_tipo_producto').select('Servicios', {force: true})
         cy.get('#id_codigo').type(codigos[index - 1])
         cy.get('#id_nombre').type(nombres[index - 1])
         cy.get('#id_descripcion').type(detalles[index - 1])
         cy.get('#id_unidad_medida_base').select('Unidad', {force: true})
         //cy.get('input[name="es_afecto"]').click({force: true})
         cy.get('#id_atributos').select(productos[index - 1], {force: true})
         cy.get('#id_productocontabilidad_set-0-plan_cuenta').select('51.01.20 - Venta de Servicios', {force: true})
         cy.wait(2000)
         cy.get('#id_productocontabilidad_set-0-atributos').select(attCta[index - 1], {force: true})
         cy.wait(2000)
         cy.get('#id_productocontabilidad_set-0-orientacion').select('Haber', {force: true})
         cy.wait(2000)
         cy.get('#id_productocontabilidad_set-0-precio_unitario').clear().type(precio[index - 1])
         cy.get('button[type=submit]').contains('GUARDAR Y SALIR').click()
         cy.wait(3000)
      })
      })   

      
      it('Concepto nomina', function() 
      {
      cy.get('a > span').contains('Configuración').click()
      var genArr = Array.from({length:23},(v,k)=>k+1)
      cy.get('a[href*="concepto"]').contains('Conceptos Remuneración').click()
      var codigo = ['H001','H002','H003','H004','H005','H006','H007','H008','H009','H010','H011',
                  'H012','H101','H102','H120','H122','C001','C004','C005','C007','C008','C010','C201'] 
      var atributos = ['Sueldos','Sueldos','Sueldos','Sueldos','Ticket Restaurant','Movilización','Gratificación',
                     'Atrasos','Asignacion Familiar','Asignacion Familiar','Sobre Tiempo 50%','Sobre Tiempo 100%',
                     'Asignacion Celular','Ticket Restaurant','Bonos','Comisión Vendedores','Aporte Patronal Mutual',
                     'Sueldos','Aporte Patronal S.C','Sueldos','Sueldos','Sueldos','Aportes Pacto Covid']
      cy.wrap(genArr).each((index) => {
      cy.get('input[type=search]').clear().type(codigo[index - 1])
      cy.wait(1000)
      cy.get('div > a').contains('Editar').click({force: true})
      cy.wait(1000)
      cy.get('[name^=atributo-]').each(($el, indice, $list) => {
         if (!$el.closest(".form-group").hasClass('hide')) {
         cy.get($el).select(atributos[index - 1], {force: true})
         }
         })
      cy.get('.pull-right > .btn-primary').contains('GUARDAR').click({force: true})
      cy.wait(1000)
      }) 
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