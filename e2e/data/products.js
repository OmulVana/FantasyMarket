// Mirrors a subset of src/magicItems.js. Kept as plain data so the tests never import app code.

export const PROMO_PRODUCTS = [
  { id: 'elfBow', name: 'Enchanted Elven Bow', category: 'Weapon', price: 1500 },
  { id: 'hpPot', name: 'Mystic Healing Potion', category: 'Potion', price: 300 },
  { id: 'dragonScaleArmor', name: 'Dragon Scale Armor', category: 'Armor', price: 2500 },
  { id: 'crystalLight', name: 'Crystal of Eternal Light', category: 'Artifact', price: 5000 },
  { id: 'wandFB', name: 'Wand of Fireballs', category: 'Wand', price: 2000 },
  { id: 'butt', name: 'Buttplug of Eternity', category: 'Rod', price: 6900 },
];

export const REGULAR_PRODUCTS = [
  {
    id: 'swordEnh',
    name: 'Enchanted Sword',
    category: 'Weapon',
    price: 150,
    description: 'A sword imbued with powerful enchantments that increase its sharpness and strength in battle.',
  },
  { id: 'wandMys', name: 'Mystic Wand', category: 'Wand', price: 1209 },
  { id: 'drowBow', name: 'Drow Bow', category: 'Weapon', price: 200 },
  { id: 'dragonShd', name: 'Dragon Shield', category: 'Armor', price: 175 },
  { id: 'potWis', name: 'Potion of Wisdom', category: 'Potion', price: 50 },
  { id: 'ringInv', name: 'Ring of Invisibility', category: 'Accessory', price: 300 },
  { id: 'bootsSpd', name: 'Boots of Speed', category: 'Armor', price: 100 },
  { id: 'tomeKno', name: 'Tome of Knowledge', category: 'Book', price: 250 },
  { id: 'amuletPrt', name: 'Amulet of Protection', category: 'Accessory', price: 180 },
  { id: 'staffPower', name: 'Staff of Power', category: 'Wand', price: 2200 },
];
