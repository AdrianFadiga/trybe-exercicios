const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
//Funções de dano
const damageCalculator = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const DragonDamage = () => damageCalculator(dragon.strength, 15);
const warriorDamage = () =>
  damageCalculator(warrior.strength * 2, warrior.strength);
const mageDamageAndManaWasted = () => {
  let manaWasted = 15;
  if (mage.mana > 15) {
    let damage = damageCalculator(mage.intelligence * 2, mage.intelligence);
    return { damage, manaWasted };
  } else {
    manaWasted = 0;
    return 'Não possui mana suficiente';
  }
};

//Objeto dos turnos:

const gameActions = {
  warriorTurn: () => {
    let damageDealt = warriorDamage();
    dragon.healthPoints -= damageDealt;
    warrior.damage = damageDealt;
  },
  mageTurn: () => {
    let damageDealtAndManaWasted = mageDamageAndManaWasted();
    damageDealtAndManaWasted = Object.entries(damageDealtAndManaWasted);
    mage.mana -= damageDealtAndManaWasted[1][1];
    dragon.healthPoints -= damageDealtAndManaWasted[0][1];
    mage.damage = damageDealtAndManaWasted[0][1];
  },
  dragonTurn: () => {
    let damageDealt = DragonDamage();
    mage.healthPoints -= damageDealt;
    warrior.healthPoints -= damageDealt;
    dragon.damage = damageDealt;
  },
  battleMembers: () => {
    console.log(battleMembers);
  }
  }

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamageAndManaWasted);
gameActions.dragonTurn(DragonDamage);
gameActions.battleMembers();

