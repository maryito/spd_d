if (Tareas.find().count() === 0 ){
  console.log("Sin Tareas");
  datahito = [
 {
   "item": null,
   "nombre": "Preliminares",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 1,
   "nombre": "Instalación de Contenedores",
   "dependencia": "4",
   "unidad": "c.u",
   "cantidad": 2,
   "porcentaje": 21,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 2,
   "nombre": "Instalación de Cerca de Cyclon (Perimetral)",
   "dependencia": "5",
   "unidad": "ml",
   "cantidad": 208,
   "porcentaje": 35,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 3,
   "nombre": "Construcción de Paredilla ( Alimentación Eléctrica)",
   "dependencia": "5",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 10,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 4,
   "nombre": "Construcción de Pedestales para Contenedores",
   "dependencia": "5",
   "unidad": "m²",
   "cantidad": 2,
   "porcentaje": 9,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 5,
   "nombre": "Limpieza general del Terreno ",
   "dependencia": "",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 25,
   "asignado": "c",
   "personal": 3,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Relleno (Obras Civiles )",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 1,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 6,
   "nombre": "Movimiento de Tierra",
   "dependencia": "5",
   "unidad": "m³",
   "cantidad": 1000,
   "porcentaje": 100,
   "asignado": "c",
   "personal": 9,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Excavación",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 25,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 7,
   "nombre": "Instalación de Pilotes ( Hincados )",
   "dependencia": "6",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 19,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 8,
   "nombre": "Metodo de Control de Nivel Freático",
   "dependencia": "6",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 8,
   "asignado": "sub",
   "personal": 4,
   "estado": false,
   "avance": 0
 },
 {
   "item": 9,
   "nombre": "Muros de Contención",
   "dependencia": "7",
   "unidad": "m³",
   "cantidad": 1,
   "porcentaje": 13,
   "asignado": "sub",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 10,
   "nombre": "Excavación",
   "dependencia": "7",
   "unidad": "m³",
   "cantidad": 2500,
   "porcentaje": 40,
   "asignado": "c",
   "personal": 9,
   "estado": false,
   "avance": 0
 },
 {
   "item": 11,
   "nombre": "Demolición de Pilotes",
   "dependencia": "10",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 15,
   "asignado": "c",
   "personal": 4,
   "estado": false,
   "avance": 0
 },
 {
   "item": 12,
   "nombre": "Construcción de Sobre Piso (Hormigón de Limpieza) ",
   "dependencia": "11",
   "unidad": "m³",
   "cantidad": 16.8,
   "porcentaje": 5,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Construcción de Foso de Bombeo",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 35,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 13,
   "nombre": "Viga Sísmica / Cabezales",
   "dependencia": "12",
   "unidad": "m³",
   "cantidad": 180,
   "porcentaje": 15,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 14,
   "nombre": "Muros",
   "dependencia": "17",
   "unidad": "m³",
   "cantidad": 350,
   "porcentaje": 38,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 15,
   "nombre": "Relleno",
   "dependencia": "16",
   "unidad": "m³",
   "cantidad": 200,
   "porcentaje": 7.5,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 16,
   "nombre": "Cajón de Entrada",
   "dependencia": "14",
   "unidad": "m³",
   "cantidad": 85,
   "porcentaje": 12.5,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 17,
   "nombre": "Losa Inferior",
   "dependencia": "13",
   "unidad": "m³",
   "cantidad": 15,
   "porcentaje": 12,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 18,
   "nombre": "Losa Superior",
   "dependencia": "14,16",
   "unidad": "m³",
   "cantidad": 20,
   "porcentaje": 7,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 19,
   "nombre": "Repello y Resane",
   "dependencia": "18",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 6,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 20,
   "nombre": "Pintura y Acabados",
   "dependencia": "19",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2,
   "asignado": "c",
   "personal": 4,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Canal de Conducción de Foso de Descarga",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 9,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 21,
   "nombre": "Relleno ",
   "dependencia": "23",
   "unidad": "m³",
   "cantidad": 350,
   "porcentaje": 25,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 22,
   "nombre": "Losa de Piso del Canal",
   "dependencia": "18",
   "unidad": "m³",
   "cantidad": 40,
   "porcentaje": 37.5,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 23,
   "nombre": "Muro de Contencion de Canal ",
   "dependencia": "22",
   "unidad": "m³",
   "cantidad": 55,
   "porcentaje": 37.5,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Cuarto de Control de Maquinas",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 11,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 24,
   "nombre": "Fundación ",
   "dependencia": "23",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 18,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 25,
   "nombre": "Losa de Piso",
   "dependencia": "30",
   "unidad": "m2",
   "cantidad": 60,
   "porcentaje": 15,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 26,
   "nombre": "Instalación de Tuberías Eléctricas y Cajillas Eléctricas",
   "dependencia": "24,28",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 6,
   "asignado": "c",
   "personal": 3,
   "estado": false,
   "avance": 0
 },
 {
   "item": 27,
   "nombre": "Instalación de Sistema de Agua Potable",
   "dependencia": "24,28",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 5,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 28,
   "nombre": "Paredes",
   "dependencia": "25",
   "unidad": "m2",
   "cantidad": 119,
   "porcentaje": 8.5,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 29,
   "nombre": "Columnas",
   "dependencia": "24",
   "unidad": "m3",
   "cantidad": 5,
   "porcentaje": 15,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 30,
   "nombre": "Losa de Techo",
   "dependencia": "29",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 10,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 31,
   "nombre": "Repello y Resane",
   "dependencia": "28",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2.5,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 32,
   "nombre": "Suministro de Puertas y Ventanas",
   "dependencia": "24",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 1,
   "asignado": "c",
   "personal": 0,
   "estado": false,
   "avance": 0
 },
 {
   "item": 33,
   "nombre": "Instalación de Puertas y Ventanas",
   "dependencia": "32",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 1.5,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 34,
   "nombre": "Impermeabilización Para losa de CCM",
   "dependencia": "30",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2.5,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 35,
   "nombre": "Cajas de Paso para Conductores (IP y Hacia Bombas)",
   "dependencia": "25",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 4,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 36,
   "nombre": "Pedestal para CCM",
   "dependencia": "25",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 8,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 37,
   "nombre": "Pintura y Acabados",
   "dependencia": "31",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 3,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Cuarto de Generador y Oficina",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 8,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 38,
   "nombre": "Fundación ",
   "dependencia": "37",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 18,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 39,
   "nombre": "Losa de Piso",
   "dependencia": "38,42",
   "unidad": "m2",
   "cantidad": 57,
   "porcentaje": 8,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 40,
   "nombre": "Instalación de Tuberías Eléctricas y Cajillas Eléctricas",
   "dependencia": "39,41",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 5,
   "asignado": "c",
   "personal": 3,
   "estado": false,
   "avance": 0
 },
 {
   "item": 41,
   "nombre": "Paredes",
   "dependencia": "42",
   "unidad": "m2",
   "cantidad": 147,
   "porcentaje": 12,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 42,
   "nombre": "Columnas",
   "dependencia": "38",
   "unidad": "m3",
   "cantidad": 5,
   "porcentaje": 15,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 43,
   "nombre": "Losa de Techo",
   "dependencia": "42",
   "unidad": "m2",
   "cantidad": 80,
   "porcentaje": 10,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 44,
   "nombre": "Repello y Resane",
   "dependencia": "41",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 5,
   "asignado": "c",
   "personal": 6,
   "estado": false,
   "avance": 0
 },
 {
   "item": 45,
   "nombre": "Suministro de Puertas y Ventanas",
   "dependencia": "24",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 4,
   "asignado": "c",
   "personal": 0,
   "estado": false,
   "avance": 0
 },
 {
   "item": 46,
   "nombre": "Instalación de Puertas y Ventanas",
   "dependencia": "45",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2.5,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 47,
   "nombre": "Impermeabilización Para losa de CCM",
   "dependencia": "43",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 1.5,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 48,
   "nombre": "Pintura y Acabados",
   "dependencia": "44",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 1.5,
   "asignado": "c",
   "personal": 2,
   "estado": false,
   "avance": 0
 },
 {
   "item": 49,
   "nombre": "Suministro de nuevos portónes de acceso a Estación de Bombeo",
   "dependencia": "24",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2.5,
   "asignado": "c",
   "personal": 0,
   "estado": false,
   "avance": 0
 },
 {
   "item": 50,
   "nombre": "Instalación de nuevos portónes de acceso a Estaciones de Bombeo",
   "dependencia": "56",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 4,
   "asignado": "c",
   "personal": 4,
   "estado": false,
   "avance": 0
 },
 {
   "item": 51,
   "nombre": "Suministro de Rejillas Galvanizadas Para ventanas de Acceso sobre Loza Superior",
   "dependencia": "24",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 8,
   "asignado": "c",
   "personal": 0,
   "estado": false,
   "avance": 0
 },
 {
   "item": 52,
   "nombre": "Instalación de rejillas galvanizadas para acceso sobre loza superior",
   "dependencia": "19",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 3,
   "asignado": "c",
   "personal": 4,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Cerca Perímetral",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 6,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 53,
   "nombre": "Columnas ",
   "dependencia": "48",
   "unidad": "m",
   "cantidad": 90,
   "porcentaje": 25,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 54,
   "nombre": "Vigas",
   "dependencia": "53",
   "unidad": "m",
   "cantidad": 90,
   "porcentaje": 30,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 55,
   "nombre": "Elementos Verticales",
   "dependencia": "54",
   "unidad": "m",
   "cantidad": 90,
   "porcentaje": 15,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 56,
   "nombre": "Repellos y Resane",
   "dependencia": "55",
   "unidad": "m",
   "cantidad": 90,
   "porcentaje": 10,
   "asignado": "c",
   "personal": 10,
   "estado": false,
   "avance": 0
 },
 {
   "item": 57,
   "nombre": "Pintura y Acabados ",
   "dependencia": "56,50",
   "unidad": "m",
   "cantidad": 90,
   "porcentaje": 8,
   "asignado": "c",
   "personal": 3,
   "estado": false,
   "avance": 0
 },
 {
   "item": 58,
   "nombre": "Instalación de luminarias perímetrales con tuberías",
   "dependencia": "57",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 12,
   "asignado": "c",
   "personal": 3,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Suministro de Equipos Electromecánicos",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 60,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 59,
   "nombre": "Suministro de Bombas sumergibles axiales de 27,750 gpm",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 50,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 60,
   "nombre": "Suministro de Bomba de achique de 2000 gpm",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 1.25,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 61,
   "nombre": "Suministro de Centro de Control de Motores ",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 18,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 62,
   "nombre": "Suministro de Rejilla mecánica para limpieza",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 10,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 63,
   "nombre": "Suministro de válvula de Guillotina",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 3,
   "porcentaje": 7.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 64,
   "nombre": "Suministro de Equipo de Generación eléctrica de 750 KVA",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 65,
   "nombre": "Suministro de Grúa con winche para izaje de bombas",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 4,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 66,
   "nombre": "Suministro de Camisa metálica para instalación de Bombas",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 2,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 67,
   "nombre": "Suministro de Transformador de Gabinete de 770 KVA norma ENSA",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 1.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 68,
   "nombre": "Suminisitro de radar de nivel utltrasónico",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 0.25,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 69,
   "nombre": "Suministro de Compuertas de Bisagra",
   "dependencia": "1",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 0.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Instalación de Equipos Electromecánicos",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 15,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 70,
   "nombre": "Instalación de Bombas sumergibles axiales de 27,750 gpm",
   "dependencia": "59,76,77",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 25,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 71,
   "nombre": "Instalación de Bombas de achique de 2000gpm",
   "dependencia": "19,60",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2.25,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 72,
   "nombre": "Instalación de Centro de control de Motores",
   "dependencia": "36,61",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 9.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 73,
   "nombre": "Instalación de Rejilla mecánica para limpieza",
   "dependencia": "16,62",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 9,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 74,
   "nombre": "Instalación de Válvula de Guillotina",
   "dependencia": "16,63",
   "unidad": "c.u",
   "cantidad": 3,
   "porcentaje": 5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 75,
   "nombre": "Instalación de equipo de generación eléctrica de 750 KVA",
   "dependencia": "44,64",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 6,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 76,
   "nombre": "Instalación de Grúa con winche para izaje de bombas",
   "dependencia": "18,65",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 8,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 77,
   "nombre": "Instalación de camisa metálica para instalación de bombas",
   "dependencia": "19",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 7,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 78,
   "nombre": "Instalación de transformador de Gabinete de 750 KVA norma ENSA",
   "dependencia": "44,66",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 3.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 79,
   "nombre": "Instalación de radar de nivel ultrasónico",
   "dependencia": "68",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 0.25,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 80,
   "nombre": "Instalación de Compuertas de Bisagra",
   "dependencia": "19",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 0.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 81,
   "nombre": "Suministro e Instalación de cableado de baja tensión",
   "dependencia": "26,40",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 17,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 82,
   "nombre": "Suministro e Instalación de tomacorrientes, interruptores, luminarias y tablero de distribución ",
   "dependencia": "81",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 7,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": null,
   "nombre": "Cuarto de Control (Obras Electricas )",
   "dependencia": "",
   "unidad": "",
   "cantidad": null,
   "porcentaje": 25,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 83,
   "nombre": "Construcción de vigaductos desde la cámara CICP existente hasta cámara de transformador",
   "dependencia": "",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 84,
   "nombre": "Construcción de vigaductos desde la cámara del transformador hasta la caja de CT's ",
   "dependencia": "83",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 85,
   "nombre": "Suministro e instalación de Interruptor de Transferencia Automático (ATS)",
   "dependencia": "64,84",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 86,
   "nombre": "Suministro e instalación de Caja de CT´s con medidor",
   "dependencia": "84",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 1.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 87,
   "nombre": "Suministro e instalación de Interruptor Principal",
   "dependencia": "84",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 1,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 88,
   "nombre": "Suministro e instalación de cableado del Interruptor Principal al ATS + vigaductos",
   "dependencia": "83,84,85",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 4,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 89,
   "nombre": "Suministro e instalación de cableado de ATS al Generador de Emergencia + vigaductos ",
   "dependencia": "75,85",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 90,
   "nombre": "Suministro e instalación de cableado de ATS al CCM + vigaductos",
   "dependencia": "72,85",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 4,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 91,
   "nombre": "Suministro e instalación de cableado de CCM a Motores de bombas + vigaductos",
   "dependencia": "70,71,72",
   "unidad": "c.u",
   "cantidad": 4,
   "porcentaje": 6,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 92,
   "nombre": "Suministro e instalación de cableado de CCM a Panel B, CCM a T1, CCM a T2 + vigaductos",
   "dependencia": "72,82",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 3,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 93,
   "nombre": "Suministro e instalación de cableado de Panel B a Grúa winche + vigaductos",
   "dependencia": "76,92",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 94,
   "nombre": "Suministro e instalación de cableado de Panel B a Rejilla autolimpiante + vigaductos",
   "dependencia": "73,92",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2.5,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 95,
   "nombre": "Suministro e instalación de cableado de Panel A a Válvula de guillotina + vigaductos",
   "dependencia": "74,92",
   "unidad": "c.u",
   "cantidad": 3,
   "porcentaje": 6,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 96,
   "nombre": "Suministro e instalación de transformador seco 15KVA 480V / 120-240 V",
   "dependencia": "82",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 4,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 97,
   "nombre": "Suministro e instalación de tablero de distribución trifásico (Panel B)",
   "dependencia": "82",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 98,
   "nombre": "Suministro e instalación de tablero de distribución monofásico (Panel A)",
   "dependencia": "82",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 2,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 99,
   "nombre": "Suministro e Instalación de Sistema SCADA (Telemetría)",
   "dependencia": "91,87,86,89",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 20,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 100,
   "nombre": "Red de tierra con pararrayos",
   "dependencia": "40",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 13,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 101,
   "nombre": "Suministro e Instalación de Sistema contra incendios",
   "dependencia": "40",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 11,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 },
 {
   "item": 102,
   "nombre": "Suministro e instalación de tuberías metálicas rígidas para equipos del cuarto de control",
   "dependencia": "40",
   "unidad": "c.u",
   "cantidad": 1,
   "porcentaje": 6,
   "asignado": "",
   "personal": null,
   "estado": false,
   "avance": 0
 }
]
 _.each( datahito, (x) => {
    if ( x.dependencia) {
       let conv =  x.dependencia.split(',')
       let final=[]
      _.each( conv, (i) => {
        final.push( parseInt(i))
      })
      x.dependencia = final
    }
    Tareas.insert(x)
  });
}

if (Reportes.find().count() === 0) {
  console.log("Con item Reportes");
  ReportesData = [
    { _id: 'z6WAW7rXApTeKvgWZ', nombre: 'Falta de Mano de Obra', numero: 1 },
    { _id: 'AZddGw2DwfuXpyh9D', nombre: 'Falta o falla del equipo', numero: 2 },
    { _id: 'HLy9JhAGqoNujcSEM',
      nombre: 'Falta de Materiales o Demora en la Entrega', numero: 3 },
    { _id: 'jscr5Z5ZMC5Fy6L7y',
      nombre: 'Problemas con Subcontratistas', numero: 4 },
    { _id: 'JTmk6FpLPwammS8rH', nombre: 'Falta de Combustible', numero: 5 },
    { _id: 'w66Ttv2xmxB6Z7QKE', nombre: 'Falta de Agrimensura', numero: 6 },
    { _id: 'x3LaQsHyJEAjHJYxg', nombre: 'Falta de Planos', numero: 7 },
    { _id: 'X3hTuiAiaLQzphcvc',
      nombre: 'En espera de Prueba de Laboratorio', numero: 8 },
    { _id: 'YxKc83wv7MXggBvye', nombre: 'Mala programación', numero: 9 },
    { _id: 'p9Z59bBEjHrpFfNHq',
      nombre: 'Problemas Movilizando Material y Personal', numero: 10 },
    { _id: 'jL7uqbsNzuRFkj4p7', nombre: 'Otros', numero: 11 } ]

  _.each( ReportesData, (x) => {
    Reportes.insert(x)
  } );
}

if( Meteor.users.find().count() === 0){
  console.log("Sin usuario");
  const usuarios = Meteor.settings.usuarios
  _.each( usuarios, (x) => {
      const id = Accounts.createUser(x);
      // console.log(id);

      if (x.profile) {
        Meteor.users.update(id, {$set: { 'profile.name': x.profile.name } } )
      }
      if (x.profile.rol) {
        Roles.addUsersToRoles(id, x.profile.rol)
      }
      // if (id && x.username === 'jefe' || x.username === 'supervisor' ) {
      //   Meteor.users.update(id, {$set: { 'profile.name': x.profile.name } } )
      //   Roles.addUsersToRoles(id,'jefe')
      // }
      // if (id && x.name === 'normal') {
      //   Roles.addUsersToRoles(id,'normal')
      // }
  });
}
