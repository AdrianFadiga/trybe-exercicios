const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const containsA = () => {
  return names.reduce((acc, name) => {
    for (let letra in name) {
      if (name[letra] === 'a' || name[letra] === 'A') {
        acc += 1;
      }
    }
    return acc;
  }, 0);
};

console.log(containsA());
