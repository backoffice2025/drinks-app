import bacardiBlack from './assets/drinks/bacardi black.jpeg';
import bira from './assets/drinks/bira.jpeg';
import breezer from './assets/drinks/brezzer.jpeg';
import gin from './assets/drinks/gin.jpeg';
import hg from './assets/drinks/hg.jpeg'; // assuming this is Smokelab or similar
import houseWine from './assets/drinks/house wine red.jpeg';
import jimBeam from './assets/drinks/jim beam.jpeg';
import kingFisherUltra from './assets/drinks/king fisher ultra.jpeg';
import laphroaig from './assets/drinks/laphraig.jpeg';
import monkeyShoulder from './assets/drinks/monkey shoulder.jpeg';
import oldMonk from './assets/drinks/old monk.jpeg';
import samsaraGin from './assets/drinks/mke lab.jpeg'; // assuming this is meant to be Smokelab Vodka
import ultraMax from './assets/drinks/ultra max.jpeg';
import vat69 from './assets/drinks/vat 69.jpeg';
import wildTurkey from './assets/drinks/wild terkey.jpeg'; // filename typo fixed below if needed

const drinksData = [
  { id: 1, name: 'K.F. Premium Pint', price: 439, image: kingFisherUltra },
  { id: 2, name: 'Blackberry Breezer Pint', price: 489, image: breezer },
  { id: 3, name: 'K.F. Ultra Max Pint', price: 549, image: ultraMax },
  { id: 4, name: 'Bira Blonde Pint', price: 519, image: bira },
  { id: 5, name: 'Smokelab Vodka', price: 439, image: samsaraGin },
  { id: 6, name: 'Old Monk Coffee Rum', price: 439, image: oldMonk },
  { id: 7, name: 'Bacardi Black/Limon Rum', price: 399, image: bacardiBlack },
  { id: 8, name: 'Samsara Gin', price: 439, image: gin },
  { id: 9, name: 'Vat 69 Whisky', price: 399, image: vat69 },
  { id: 10, name: 'Jim Beam White Whisky', price: 469, image: jimBeam },
  { id: 11, name: 'Wild Turkey Whisky', price: 579, image: wildTurkey },
  { id: 12, name: 'Godawan Indian Single Malt', price: 669, image: hg },
  { id: 13, name: 'Monkey Shoulder Single Malt', price: 699, image: monkeyShoulder },
  { id: 14, name: 'Laphroaig Islay Single Malt', price: 769, image: laphroaig },
  { id: 15, name: 'House Wine Red/White Glass', price: 699, image: houseWine },
];

export default drinksData;
