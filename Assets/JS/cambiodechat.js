// Función para cambiar de chat
const contactos = document.querySelectorAll('.list-group-item');
const nombreContacto = document.getElementById('nombre__contacto');
const imgContacto = document.getElementById('img__contacto');
const chatIframe = document.getElementById('chat-iframe');
const activityContact = document.getElementById('actividad__contacto');


contactos.forEach(contacto => {
    contacto.addEventListener('click', function() {
        const chatId = contacto.getAttribute('data-chat');
        
        if (chatId === 'fox') {
            nombreContacto.textContent = 'Fox (Tú)';
            imgContacto.src = 'Assets/IMG/Imagen de Perfil del Personaje/Fox.png';
            imgContacto.alt = 'Fox';
            activityContact.textContent = 'Envía mensajes a este mismo número';
            chatIframe.src = '/Conversaciones HTML/Conversación Fox-Fox.html';
        } else if (chatId === 'mario') {
            nombreContacto.textContent = 'Mario';
            imgContacto.src = 'Assets/IMG/Imagen de Perfil del Personaje/Mario.png';
            imgContacto.alt = 'Mario';
            activityContact.textContent = 'En línea';
            chatIframe.src = '/Conversaciones HTML/Conversación Fox-Mario.html';

            // En el caso de de Mario que cambie las notificaciones
                       
            const currentChat = contacto.querySelector('.flex-grow-1');
            const messageText = currentChat.querySelector('.message-text');
            const notificationIcon = currentChat.querySelector('.notification-icon');
            const timeText = currentChat.querySelector('.time-text');
            
            if (messageText) {
                messageText.classList.remove('fw-bold');
                messageText.classList.add('text-white', 'opacity-75');
            }
            if (notificationIcon) {
                notificationIcon.style.display = 'none';
            }
            if (timeText) {
                timeText.classList.add('opacity-75', 'text-white');
                timeText.classList.remove('fw-bold');
            }

        } else if (chatId === 'luigi') {
            nombreContacto.textContent = 'Luigi';
            imgContacto.src = 'Assets/IMG/Imagen de Perfil del Personaje/Luigi.png';
            imgContacto.alt = 'Luigi';
            activityContact.textContent = 'últ. vez hoy a las 07:34';
            chatIframe.src = '/Conversaciones HTML/Conversación Fox-Luigi.html';

        } else if (chatId === 'donkeykong') {
            nombreContacto.textContent = 'Donkey Kong';
            imgContacto.src = 'Assets/IMG/Imagen de Perfil del Personaje/DK.png';
            imgContacto.alt = 'DK';
            activityContact.textContent = 'últ. vez ayer a las 22:16';
            chatIframe.src = '/Conversaciones HTML/Conversación Fox-DK.html';

        } else if (chatId === 'link') {
            nombreContacto.textContent = 'Link';
            imgContacto.src = 'Assets/IMG/Imagen de Perfil del Personaje/Link.png';
            imgContacto.alt = 'Link';
            activityContact.textContent = 'En línea';
            chatIframe.src = '/Conversaciones HTML/Conversación Fox-Link.html';

        } else if (chatId === 'samus') {
            nombreContacto.textContent = 'Samus';
            imgContacto.src = 'Assets/IMG/Imagen de Perfil del Personaje/Samus.png';
            imgContacto.alt = 'Samus';
            activityContact.textContent = 'últ. vez hoy a las 01:47';
            chatIframe.src = '/Conversaciones HTML/Conversación Samus.html';
        }        
    });
});

// Apartado de Mostrar Listado de conversaciones boton on/off en listado de chat lateral (en modo lg)
document.getElementById('on/off__d-none').addEventListener('click', function() {
  const listadoConversaciones = document.getElementById('listado-conversaciones');
  
  
  if (listadoConversaciones.style.display === 'none') {
    listadoConversaciones.style.display = 'block';
  } else {
    listadoConversaciones.style.display = 'none';
  }
});
// Apartado de Mostrar Listado de conversaciones boton on/off2 en barra de perfil
document.getElementById('on/off__d-none2').addEventListener('click', function() {
  const listadoConversaciones = document.getElementById('listado-conversaciones');
  
  
  if (listadoConversaciones.style.display === 'none') {
    listadoConversaciones.style.display = 'block';
  } else {
    listadoConversaciones.style.display = 'none';
  }
});