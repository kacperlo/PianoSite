import { whiteKeysNaming, blackKeysNaming } from './TableOfKeys.js';

const KeysImages = () => {
   let blackPlaces = document.getElementById('blackKeys');

   for (let key of blackKeysNaming)
      blackPlaces.appendChild(new Image()).src = `./images/keys/${key}.png`;

   let whitePlaces = document.getElementById('whiteKeys');

   for (let key of whiteKeysNaming)
      whitePlaces.appendChild(new Image()).src = `./images/keys/${key}.png`;
};

export default KeysImages;
