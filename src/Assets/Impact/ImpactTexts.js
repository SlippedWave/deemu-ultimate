import imageMainCard from './imageMainCard.png';
import imageSecondaryCard1 from './imageSecondaryCard1.jpeg';
import imageSecondaryCard2 from './imageSecondaryCard2.png';
import imageSecondaryCard3 from './imageSecondaryCard3.jpeg';
export const MainCardContent = {
   content1:
      'Actualmente DEEMU aporta a los proyectos de Binance Charity con varias de sus causas, una a la vez.',
   content2:
      'La causa es seleccionada mensualmente mediante una votación emitida por la comunidad del foro DEEMU, la votación consiste en seleccionar la causa más importante.',
   imgURL: imageMainCard,
};

export const cards = [
   {
      id: 1,
      title: 'Humanity First - Fondo de Ayuda de Emergencia para Ucrania.',
      option: 'Opción 1',
      content:
         'Como respuesta a la invasión de Ucrania por parte de las fuerzas militares Rusas, Binance Charity emprendió un proyecto destinado a apoyar a organizaciones internacionales a proteger a los civiles de esta terrible situación.',
      imgURL: imageSecondaryCard1,
      url: 'https://www.binance.charity/Ukraine-Emergency-Relief-Fund',
   },
   {
      id: 2,
      title: 'Restaurar los hábitats de Australia.',
      option: 'Opción 2',
      content:
         'Para restaurar la vida silvestre de Australia después del catastrófico incendio que afectó más de 3000 millones de animales, Binance Charity emprendió un proyecto destinado a plantar 100,000 árboles con el fin de restaurar la vida silvestre en la región.',
      imgURL: imageSecondaryCard2,
      url: 'https://www.binance.charity/Restoring-Australia-Habitats',
   },
   {
      id: 3,
      title: 'Binance Lunch for Children.',
      option: 'Opción 3',
      content:
         'En África, alrededor de 23 millones de niños en edad escolar primaria asisten a clase sin alimentos suficientes. Para combatir el hambre, se emprendió un proyecto destinado a ofrecer comida de calidad a niños en edad de educación primaria en Uganda.',
      imgURL: imageSecondaryCard3,
      url: 'https://www.binance.charity/Haiti-Earthquake-Relief',
   },
];
