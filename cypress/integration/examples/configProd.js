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
         cy.get('#id_region_id').select('Metropolitana de Santiago', {force: true})
         cy.wait(2000)
         cy.get('#id_ciudad_id').select('Santiago', {force: true})
         cy.get('#id_zona_id').select('Santiago', {force: true})
         cy.get('#id_tipo_persona').select('Proveedor', {force: true})
         cy.get('#id_condicion_compra').select('10 - 30/60 días', {force: true})
         cy.get('#id_atributos').select('Suministros Básicos', {force: true})
         cy.get('button[type=submit]').contains('GUARDAR Y SALIR').click()
         cy.wait(3000)
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
         cy.get('#id_tipo_persona').select('Cliente', {force: true})
         cy.wait(1000)
         cy.get('#id_condicion_venta').select('10 - 30/60 días', {force: true})
         cy.wait(1000)
         cy.get('#id_atributos').select('Retail y Distribución', {force: true})
         cy.get('button[type=submit]').contains('GUARDAR Y SALIR').click()
         cy.wait(3000)
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
         cy.get('#id_productocontabilidad_set-0-precio_unitario').clear().type(precio[index - 1])
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
      cy.wait(3000)
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
      cy.wait(3000)
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

      })