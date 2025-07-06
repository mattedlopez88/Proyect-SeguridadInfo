import { Question } from '../../constants/questions';

export const questionsSeniors: Question[] = [
  {
    id: 1,
    pregunta: 'Si recibe un SMS de su "banco" pidiendo actualizar datos, ¿qué hace?',
    respuestasIncorrectas: [
      'Hago clic en el enlace y completo el formulario',
      'Llamo al número que viene en el mensaje',
      'Reenvío el SMS a un familiar para que lo revise'
    ],
    respuestaCorrecta: 'Ignoro el mensaje y llamo al banco por el número oficial que conozco',
  },
  {
    id: 2,
    pregunta: '¿Cómo identifica una llamada fraudulenta de "soporte técnico"?',
    respuestasIncorrectas: [
      'Si me piden reiniciar la computadora',
      'Si suena muy profesional',
      'Si me ofrecen una solución rápida'
    ],
    respuestaCorrecta: 'Ninguna empresa legítima pide acceso remoto o datos bancarios por teléfono',
  },
  {
    id: 3,
    pregunta: 'Al comprar en línea, ¿qué símbolo indica que la página es segura?',
    respuestasIncorrectas: [
      'Un candado rojo 🔴',
      'Un escudo azul 🛡️',
      'La palabra "Oferta" en negrita'
    ],
    respuestaCorrecta: 'Un candado verde 🔒 junto a la URL del sitio',
  },
  {
    id: 4,
    pregunta: '¿Qué información NUNCA debe dar por teléfono?',
    respuestasIncorrectas: [
      'Su nombre completo',
      'Su dirección de correo',
      'Su comida favorita'
    ],
    respuestaCorrecta: 'Claves bancarias, números de documento o códigos de seguridad',
  },
  {
    id: 5,
    pregunta: 'Si recibe un correo de un "familiar" pidiendo dinero urgente, ¿qué hace?',
    respuestasIncorrectas: [
      'Le transfiero lo que pueda',
      'Le respondo pidiendo más detalles',
      'Reenvío el correo a otros familiares'
    ],
    respuestaCorrecta: 'Llamo directamente a ese familiar por teléfono para confirmar',
  },
  {
    id: 6,
    pregunta: '¿Qué es un "tarjeta virtual" y por qué es útil?',
    respuestasIncorrectas: [
      'Una tarjeta de regalo de supermercado',
      'Una tarjeta sin fondos',
      'Una tarjeta para préstamos'
    ],
    respuestaCorrecta: 'Una tarjeta con número temporal para compras en línea (evita fraudes con tu tarjeta real)',
  },
  {
    id: 7,
    pregunta: '¿Qué debe hacer si su celular muestra un mensaje de "Virus detectado"?',
    respuestasIncorrectas: [
      'Llamar al número que aparece en la pantalla',
      'Pagar para "eliminar" el virus',
      'Borrar todas las fotos'
    ],
    respuestaCorrecta: 'Apagar el internet y pedir ayuda a un familiar técnico o ir a una tienda oficial',
  },
  {
    id: 8,
    pregunta: '¿Cómo protege su cuenta de WhatsApp de hackers?',
    respuestasIncorrectas: [
      'No usando emojis',
      'Cambiando el color de fondo',
      'Eliminando chats viejos'
    ],
    respuestaCorrecta: 'Activando la verificación en dos pasos en Ajustes > Cuenta',
  },
  {
    id: 9,
    pregunta: 'Si un vendedor en Marketplace insiste en pagar fuera de la plataforma, ¿qué hace?',
    respuestasIncorrectas: [
      'Acepto si me da más dinero',
      'Le paso mi número de cuenta',
      'Le digo que me llame por teléfono'
    ],
    respuestaCorrecta: 'Rechazo la oferta (es una estafa común)',
  },
  {
    id: 10,
    pregunta: '¿Qué es el "phishing" en correos electrónicos?',
    respuestasIncorrectas: [
      'Un error de ortografía',
      'Un tipo de anuncio',
      'Un virus que borra archivos'
    ],
    respuestaCorrecta: 'Un correo falso que imita empresas para robar sus datos',
  },
  {
    id: 11,
    pregunta: '¿Por qué no debe usar redes Wi-Fi públicas para ingresar a su banco?',
    respuestasIncorrectas: [
      'Porque son más lentas',
      'Porque gastan batería',
      'Porque no guardan contraseñas'
    ],
    respuestaCorrecta: 'Porque hackers pueden interceptar sus datos bancarios',
  },
  {
    id: 12,
    pregunta: 'Si un "técnico de Microsoft" le pide instalar un programa, ¿qué hace?',
    respuestasIncorrectas: [
      'Le doy acceso si suena convincente',
      'Le pregunto cuánto cobra',
      'Descargo lo que me pide'
    ],
    respuestaCorrecta: 'Cuelgo y bloqueo el número (Microsoft no hace llamadas así)',
  },
  {
    id: 13,
    pregunta: '¿Qué debe revisar antes de instalar una app en su celular?',
    respuestasIncorrectas: [
      'Si tiene colores bonitos',
      'Si es gratis',
      'Si sus amigos la usan'
    ],
    respuestaCorrecta: 'Los permisos que pide y reseñas de otros usuarios',
  },
  {
    id: 14,
    pregunta: '¿Cómo sabe si un perfil en redes sociales es falso?',
    respuestasIncorrectas: [
      'Si tiene pocas fotos',
      'Si escribe con errores',
      'Si no tiene seguidores'
    ],
    respuestaCorrecta: 'Foto genérica, información contradictoria o mensajes sospechosos',
  },
  {
    id: 15,
    pregunta: '¿Qué hace si recibe un código por SMS que no solicitó?',
    respuestasIncorrectas: [
      'Lo guardo por si acaso',
      'Se lo paso a un familiar',
      'Lo ignoro y sigo usando el celular'
    ],
    respuestaCorrecta: 'Lo borro inmediatamente (podrían estar hackeando su cuenta)',
  },
  // Continúa hasta 31...
  {
    id: 16,
    pregunta: '¿Qué es una "transferencia falsa" y cómo evitarla?',
    respuestasIncorrectas: [
      'Un depósito que tarda en llegar',
      'Un error del banco',
      'Una transacción cancelada'
    ],
    respuestaCorrecta: 'Un comprobante editado: siempre verificar el saldo REAL en su banco',
  },
  {
    id: 17,
    pregunta: '¿Por qué no debe publicar fotos de sus boletos de avión o viaje?',
    respuestasIncorrectas: [
      'Porque pierden validez',
      'Porque ocupan mucho espacio',
      'Porque pueden verse borrosas'
    ],
    respuestaCorrecta: 'Porque ladrones pueden usar los datos para robos o suplantación',
  },
  {
    id: 18,
    pregunta: 'Si su celular pide actualizar el sistema, ¿qué hace?',
    respuestasIncorrectas: [
      'Lo pospongo para siempre',
      'Solo actualizo si hay espacio',
      'Busco la opción más barata'
    ],
    respuestaCorrecta: 'Acepto solo desde Ajustes > Actualizaciones oficiales',
  },
  {
    id: 19,
    pregunta: '¿Qué es el "spoofing" de números telefónicos?',
    respuestasIncorrectas: [
      'Llamadas con ruido',
      'Números desconocidos',
      'Mensajes de texto largos'
    ],
    respuestaCorrecta: 'Cuando falsifican un número conocido (ej: banco) para engañarlo',
  },
  {
    id: 20,
    pregunta: '¿Cómo protege sus fotos personales en el celular?',
    respuestasIncorrectas: [
      'Borrándolas cada mes',
      'Guardándolas en la tarjeta SD',
      'Subiéndolas a grupos de WhatsApp'
    ],
    respuestaCorrecta: 'Usando una app de galería con contraseña o cifrado',
  },
  {
    id: 21,
    pregunta: '¿Qué hace si un email de "Gobierno" le pide pagar un impuesto?',
    respuestasIncorrectas: [
      'Pago con mi tarjeta para evitar multas',
      'Respondo pidiendo detalles',
      'Reenvío el correo a un contador'
    ],
    respuestaCorrecta: 'Verifico en la página oficial del gobierno (no desde el correo)',
  },
  {
    id: 22,
    pregunta: '¿Qué es un "PDF malicioso" y cómo evitarlo?',
    respuestasIncorrectas: [
      'Un archivo dañado',
      'Un documento con errores',
      'Un formulario incompleto'
    ],
    respuestaCorrecta: 'Archivos que instalan virus: solo abro PDFs de fuentes confiables',
  },
  {
    id: 23,
    pregunta: '¿Por qué no debe compartir selfies con su tarjeta de crédito?',
    respuestasIncorrectas: [
      'Porque se desmagnetiza',
      'Porque es de mala educación',
      'Porque ocupa mucho espacio'
    ],
    respuestaCorrecta: 'Porque pueden clonar los números y hacer compras fraudulentas',
  },
  {
    id: 24,
    pregunta: 'Si un sitio web le pide "actualizar Flash Player", ¿qué hace?',
    respuestasIncorrectas: [
      'Descargo la actualización',
      'Le doy clic al anuncio',
      'Reinicio la computadora'
    ],
    respuestaCorrecta: 'Ignoro el mensaje (Flash ya no se usa y es una trampa común)',
  },
  {
    id: 25,
    pregunta: '¿Qué es mejor para contraseñas de bancos?',
    respuestasIncorrectas: [
      'Usar mi nombre + año de nacimiento',
      'Anotarlas en un cuaderno',
      'Poner la misma para todo'
    ],
    respuestaCorrecta: 'Una frase fácil de recordar pero difícil de adivinar (ej: "MiPerroToby2024!")',
  },
  {
    id: 26,
    pregunta: '¿Cómo reconoce un correo falso de Netflix?',
    respuestasIncorrectas: [
      'Si tiene el logo de Netflix',
      'Si menciona mi nombre',
      'Si ofrece un descuento'
    ],
    respuestaCorrecta: 'El correo no termina en "@netflix.com" (ej: soporte@netflix-support.com)',
  },
  {
    id: 27,
    pregunta: '¿Qué hace si su computadora muestra un "ransomware" (secuestro de archivos)?',
    respuestasIncorrectas: [
      'Pago el rescate en criptomonedas',
      'Llamo al número en la pantalla',
      'Reinicio muchas veces'
    ],
    respuestaCorrecta: 'La desconecto de internet y busco ayuda profesional',
  },
  {
    id: 28,
    pregunta: '¿Por qué no debe conectar USB desconocidos a su PC?',
    respuestasIncorrectas: [
      'Porque no tendrá espacio',
      'Porque podría romperse',
      'Porque son lentos'
    ],
    respuestaCorrecta: 'Pueden contener virus que roben información',
  },
  {
    id: 29,
    pregunta: '¿Qué hace si un familiar le pide dinero por WhatsApp de forma sospechosa?',
    respuestasIncorrectas: [
      'Le envío una pequeña cantidad',
      'Le pregunto por qué lo necesita',
      'Le digo que espere un día'
    ],
    respuestaCorrecta: 'Lo llamo por teléfono para confirmar si fue él/ella',
  },
  {
    id: 30,
    pregunta: '¿Qué es el "SIM swapping" y cómo evitarlo?',
    respuestasIncorrectas: [
      'Cambiar de compañía telefónica',
      'Tener dos chips activos',
      'Compartir datos móviles'
    ],
    respuestaCorrecta: 'Cuando clonan tu SIM: active PIN en su operador para bloquear cambios',
  },
  {
    id: 31,
    pregunta: '¿Qué hace si recibe un mensaje de "paquete retenido en aduana"?',
    respuestasIncorrectas: [
      'Hago clic en el enlace para reclamar',
      'Llamo al número adjunto',
      'Comparto mi dirección'
    ],
    respuestaCorrecta: 'Verifico en la página oficial del servicio postal (no desde el mensaje)',
  }
];