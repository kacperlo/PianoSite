import { whiteKeysNaming, blackKeysNaming } from './TableOfKeys.js';

const KeysImages = () => {
   const blackPlaces = document.getElementById('blackKeys');

   for (let key of blackKeysNaming)
      blackPlaces.appendChild(new Image()).src = `./images/keys/${key}.png`;

   const whitePlaces = document.getElementById('whiteKeys');

   for (let key of whiteKeysNaming)
      whitePlaces.appendChild(new Image()).src = `./images/keys/${key}.png`;
};

export default KeysImages;
