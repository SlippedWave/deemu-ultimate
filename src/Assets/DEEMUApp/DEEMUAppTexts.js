import imageCortaComida from './CortaComida.png';
import imageDestruyeBloques from './DestruyeObjetos.png';
import imageEsquivaObstaculos from './EsquivaObstaculos.png';
import imageMiniGolf from './Golf.png';
import imageJetPack from './Jetpack.png';
import imagePajaroVolador from './PajaroVolador.png';
import imageSaltaPlataformas from './Saltaplataformas.png';
import imageSerpiente from './Serpiente.png';
import imageBlackjack from './Blackjack.png';
import imagePaiGowPoker from './PaiGowPoker.png';
import imageRuletaEuropea from './Ruleta.png';
import imageTragamonedas from './Tragamonedas.png';

export const miniGameContent = [
    {id: 0, name: 'Corta Comida', details: ' ¡Alimenta a EMÚ! Corta los frutas y semillas con las que alimentarás a tu EMÚ antes de que se te acabe el tiempo. En este juego debes deslizar sobre los alimentos que cortará.', image: imageCortaComida},
    {id: 1, name: 'Destruye Bloques', details: 'Evita que la pelota caiga más allá de la paleta a la par que destruyes los bloques en tu escena. En este juego debes deslizar la paleta para moverla en la escena.', image: imageDestruyeBloques },
    {id: 2, name: 'Esquiva Obstáculos', details: 'EMÚ te ataca con todo lo que tiene. En este juego tendrás que dirigir un corazón a través de los ataques de EMÚ, si no te golpean antes de que acabe el juego, ganarás.', image: imageEsquivaObstaculos },
    {id: 3, name: 'Mini Golf', details: 'En un tranquilo campo de golf EMÚ trata de ganar el premio mayor. En este minijuego ayuda a EMÚ a pasar los 18 hoyos exitosamente dirigiendo la dirección de disparo para poder ganar.', image: imageMiniGolf },
    {id: 4, name: 'Jetpack', details: '¡Evita que tu EMÚ muera electrocutado! Evita los obstáculos aumentando su altitud con un jetpack. En este juego debes de mantener presionado en tu pantalla para aumentar la altitud de tu EMÚ.', image: imageJetPack },
    {id: 5, name: 'Pájaro Volador', details: 'Ahora EMÚ tendrá que salir de la selva ¿Quién puso estas tuberías aquí? En este juego, ayuda a EMÚ a salir de la selva, controla su vuelo para no chocar con ningún obstáculo y llegar a la meta.', image: imagePajaroVolador },
    {id: 6, name: 'Salta Plataformas', details: 'Lleva a EMÚ a los cielos plataforma por plataforma. En este juego debes dirigir con el dedo la dirección en la que salta EMÚ para no caer y llegar a la meta.', image: imageSaltaPlataformas },
    {id: 7, name: 'Serpiente', details: 'Desplaza la cola de EMÚS para alcanzar el huevo en el mapa y añadir otro EMÚ a tu cola, pero intenta no chocar con tu misma cola o con la pared. En este juego debes deslizar hacía la dirección donde irá la cola de EMÚS.', image: imageSerpiente }
]

export const casinoContent = [
    {id: 0, name: 'Blackjack', details: 'En este juego clásico, trata de acercarte a 21 con las cartas que te dan, ¡Cuidado con la banca que tiene el mismo objetivo! Asegúrate de retirarte cuando lo creas prudente.', image: imageBlackjack },
    {id: 1, name: 'Pai Gow Poker', details: 'Juega este estilo de poker donde tu mano inicial de 7 cartas la dividirás en dos manos, una de cartas y una de dos cartas. ¡Para ganarle al sistema ambas manos deben de ser superiores que las de la casa!', image: imagePaiGowPoker },
    {id: 2, name: 'Ruleta Europea', details: '¡Apuesta en que casilla de la ruleta caerá la pelota! Entre más arriesgada la apuesta mayor será lo que podrás ganar.', image: imageRuletaEuropea },
    {id: 3, name: 'Tragamonedas', details: 'En este juego tendrás una clásica tragamonedas con tres carretes, gira los carretes y espera el resultado,  ¿Crees tener la suficiente suerte para ganar el premio mayor?', image: imageTragamonedas },
]