export type Question = {
  id: number;
  pregunta: string;
  imagen?: string;
  respuestasIncorrectas: string[];
  respuestaCorrecta: string;
};

export const questions: Question[] = [
  {
    id: 1,
    pregunta: '¿Cuál es la mejor práctica para crear una contraseña segura?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Usar solo tu fecha de nacimiento',
      'Utilizar la misma contraseña en todos los sitios',
      'Elegir palabras comunes como "password"',
    ],
    respuestaCorrecta: 'Combinar letras, números y símbolos en una contraseña única',
  },
  {
    id: 2,
    pregunta: '¿Qué es el phishing?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de software antivirus',
      'Un método de cifrado de datos',
      'Un sistema operativo seguro',
    ],
    respuestaCorrecta: 'Un intento de engañar al usuario para obtener información confidencial',
  },
  {
    id: 3,
    pregunta: '¿Qué debes hacer si recibes un correo sospechoso?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Responder de inmediato',
      'Descargar los archivos adjuntos',
      'Hacer clic en todos los enlaces',
    ],
    respuestaCorrecta: 'No interactuar y reportarlo como spam',
  },
  {
    id: 4,
    pregunta: '¿Qué es un malware?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de hardware',
      'Un lenguaje de programación',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Un software malicioso diseñado para dañar o robar información',
  },
  {
    id: 5,
    pregunta: '¿Por qué es importante actualizar el software?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Para que el dispositivo sea más lento',
      'Para perder datos',
      'No es importante',
    ],
    respuestaCorrecta: 'Para corregir vulnerabilidades de seguridad',
  },
  {
    id: 6,
    pregunta: '¿Qué es la autenticación de dos factores (2FA)?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de virus',
      'Un método de cifrado',
      'Un sistema operativo',
    ],
    respuestaCorrecta: 'Un método de seguridad que requiere dos pruebas de identidad',
  },
  {
    id: 7,
    pregunta: '¿Qué debes hacer antes de conectarte a una red Wi-Fi pública?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Conectarte sin preocuparte',
      'Desactivar el firewall',
      'Compartir tus contraseñas',
    ],
    respuestaCorrecta: 'Verificar que la red sea legítima y usar una VPN si es posible',
  },
  {
    id: 8,
    pregunta: '¿Qué es un ransomware?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de hardware',
      'Un navegador web',
      'Un antivirus',
    ],
    respuestaCorrecta: 'Un software que secuestra tus archivos y pide un rescate',
  },
  {
    id: 9,
    pregunta: '¿Cuál es el objetivo de un firewall?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Acelerar la conexión a internet',
      'Eliminar virus automáticamente',
      'Actualizar el sistema operativo',
    ],
    respuestaCorrecta: 'Proteger la red bloqueando accesos no autorizados',
  },
  {
    id: 10,
    pregunta: '¿Qué es un troyano?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de contraseña',
      'Un sistema operativo',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Un programa malicioso que se oculta como software legítimo',
  },
  {
    id: 11,
    pregunta: '¿Por qué no debes compartir tus contraseñas?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Porque se olvidan fácilmente',
      'Porque son difíciles de escribir',
      'Porque ocupan mucho espacio',
    ],
    respuestaCorrecta: 'Para evitar accesos no autorizados a tus cuentas',
  },
  {
    id: 12,
    pregunta: '¿Qué es un ataque de fuerza bruta?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de firewall',
      'Un método de cifrado',
      'Un software de respaldo',
    ],
    respuestaCorrecta: 'Intentar adivinar contraseñas probando muchas combinaciones',
  },
  {
    id: 13,
    pregunta: '¿Qué debes hacer si tu dispositivo se infecta con malware?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Ignorarlo',
      'Compartir archivos con otros',
      'Desactivar el antivirus',
    ],
    respuestaCorrecta: 'Ejecutar un análisis de seguridad y eliminar el malware',
  },
  {
    id: 14,
    pregunta: '¿Qué es el spoofing?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de backup',
      'Un método de autenticación',
      'Un sistema operativo',
    ],
    respuestaCorrecta: 'Suplantar la identidad de otro usuario o dispositivo',
  },
  {
    id: 15,
    pregunta: '¿Por qué es importante hacer copias de seguridad?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Para ocupar espacio',
      'Para ralentizar el dispositivo',
      'No es importante',
    ],
    respuestaCorrecta: 'Para recuperar información en caso de pérdida o ataque',
  },
  {
    id: 16,
    pregunta: '¿Qué es un keylogger?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de firewall',
      'Un software de respaldo',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Un programa que registra las teclas que pulsas',
  },
  {
    id: 17,
    pregunta: '¿Qué debes revisar antes de instalar una app?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Solo el nombre',
      'Nada, instalar directamente',
      'Si tiene muchos colores',
    ],
    respuestaCorrecta: 'Los permisos que solicita y la reputación del desarrollador',
  },
  {
    id: 18,
    pregunta: '¿Qué es la ingeniería social?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de software',
      'Un método de cifrado',
      'Un sistema operativo',
    ],
    respuestaCorrecta: 'Manipular a las personas para obtener información confidencial',
  },
  {
    id: 19,
    pregunta: '¿Por qué no debes hacer clic en enlaces desconocidos?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Porque son aburridos',
      'Porque son lentos',
      'Porque ocupan espacio',
    ],
    respuestaCorrecta: 'Pueden llevarte a sitios maliciosos o descargar malware',
  },
  {
    id: 20,
    pregunta: '¿Qué es un certificado SSL?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de virus',
      'Un sistema operativo',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Un protocolo de seguridad para cifrar la información en la web',
  },
  {
    id: 21,
    pregunta: '¿Qué es el spam?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de firewall',
      'Un software de respaldo',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Correos electrónicos no deseados o publicitarios',
  },
  {
    id: 22,
    pregunta: '¿Qué debes hacer si recibes una solicitud de amistad sospechosa en redes sociales?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Aceptar siempre',
      'Compartir información personal',
      'Enviar dinero',
    ],
    respuestaCorrecta: 'Ignorar o reportar la solicitud',
  },
  {
    id: 23,
    pregunta: '¿Qué es un exploit?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de backup',
      'Un método de autenticación',
      'Un sistema operativo',
    ],
    respuestaCorrecta: 'Un programa que aprovecha una vulnerabilidad de seguridad',
  },
  {
    id: 24,
    pregunta: '¿Por qué es importante cerrar sesión en dispositivos compartidos?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Para ahorrar batería',
      'Para liberar espacio',
      'No es importante',
    ],
    respuestaCorrecta: 'Para evitar que otros accedan a tu información',
  },
  {
    id: 25,
    pregunta: '¿Qué es un ataque DDoS?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de firewall',
      'Un software de respaldo',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Un ataque que satura un servidor con muchas peticiones',
  },
  {
    id: 26,
    pregunta: '¿Qué es la suplantación de identidad?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de backup',
      'Un método de autenticación',
      'Un sistema operativo',
    ],
    respuestaCorrecta: 'Hacerse pasar por otra persona para obtener información o acceso',
  },
  {
    id: 27,
    pregunta: '¿Qué es un rootkit?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de firewall',
      'Un software de respaldo',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Un software que permite el acceso no autorizado a un sistema',
  },
  {
    id: 28,
    pregunta: '¿Por qué es importante no compartir información personal en redes públicas?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Porque es aburrido',
      'Porque ocupa espacio',
      'No es importante',
    ],
    respuestaCorrecta: 'Para evitar que personas desconocidas accedan a tus datos',
  },
  {
    id: 29,
    pregunta: '¿Qué es un adware?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de firewall',
      'Un software de respaldo',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Un software que muestra publicidad no deseada',
  },
  {
    id: 30,
    pregunta: '¿Qué es la navegación privada?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Un tipo de virus',
      'Un sistema operativo',
      'Un navegador web',
    ],
    respuestaCorrecta: 'Un modo de navegación que no guarda historial ni cookies',
  },
  {
    id: 31,
    pregunta: '¿Qué debes hacer si pierdes tu dispositivo?',
    imagen: undefined,
    respuestasIncorrectas: [
      'Ignorarlo',
      'Compartir la noticia en redes sociales',
      'Desactivar el antivirus',
    ],
    respuestaCorrecta: 'Reportarlo y, si es posible, bloquearlo o borrar los datos de forma remota',
  },
];
