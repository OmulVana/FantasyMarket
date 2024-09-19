import elvenBow from './assets/Elvenbow.webp';
import healthPot from './assets/Healingpotion.jpg';
import crystal from './assets/Crystal.jpg';
import dragonArmor from './assets/DragonscaleArmor.webp';
import wand from './assets/wandfireball.jpg';
import plug from './assets/buttplug.webp';
import magicSword from './assets/inventory_items/magic_sword.webp';
import mysticWand from './assets/inventory_items/Mystic_Wand.png'
import bowDrow from './assets/inventory_items/Drow_Bow.webp'
import shieldDragon from './assets/inventory_items/Dragon_Shield.jpg'
import invRing from './assets/inventory_items/Ring_Invisibility.webp'
import speedBoots from './assets/inventory_items/Boots_Speed.jpeg'
import prtAmulet from './assets/inventory_items/Amulet_Protection.jpg'
import pwrStaff from './assets/inventory_items/Staff_Power.jpeg'
import tomeKnow from './assets/inventory_items/Tome_Knowledge.jpg'
import wisPot from './assets/inventory_items/Wisdom_Potion.jpg'



export const PROMOTION_ITEMS = [
  {
    id: 'elfBow',
    name: "Enchanted Elven Bow",
    category: "Weapon",
    price: 1500,
    image: elvenBow,
    description: "A beautifully crafted bow from the ancient elven forests, imbued with magical properties that enhance accuracy and power.",
  },
  {
    id: 'hpPot',
    name: "Mystic Healing Potion",
    category: "Potion",
    price: 300,
    image: healthPot,
    description: "A powerful potion that rapidly restores health and vitality to the drinker, essential for any adventurer.",
  },
  {
    id: 'dragonScaleArmor',
    name: "Dragon Scale Armor",
    category: "Armor",
    price: 2500,
    image: dragonArmor,
    description: "Armor made from the scales of a dragon, offering unmatched protection and a fearsome appearance.",
  },
  {
    id: 'crystalLight',
    name: "Crystal of Eternal Light",
    category: "Artifact",
    price: 5000,
    image: crystal,
    description: "A radiant crystal that provides continuous illumination and is said to have protective and cleansing properties.",
  },
  {
    id: 'wandFB',
    name: "Wand of Fireballs",
    category: "Wand",
    price: 2000,
    image: wand,
    description: "A wand capable of casting devastating fireballs, ideal for those who wield magic with a fiery touch.",
  },
  {
    id: 'butt',
    name: "Buttplug of Eternity",
    category: "Rod",
    price: 6900,
    image: plug,
    description: "A mysterious artifact with unknown properties, rumored to grant eternal pleasure and power to its bearer.",
  },
];

export const MAGIC_ITEMS = [
  {
    id: 'swordEnh',
    name: "Enchanted Sword",
    category: "Weapon",
    price: 150,
    image: magicSword,
    description: "A sword imbued with powerful enchantments that increase its sharpness and strength in battle.",
  },
  {
    id: 'wandMys',
    name: "Mystic Wand",
    category: "Wand",
    price: 1209,
    image: mysticWand,
    description: "A wand infused with ancient magic, capable of channeling a wide range of mystical spells.",
  },
  {
    id: 'drowBow',
    name: "Drow Bow",
    category: "Weapon",
    price: 200,
    image: bowDrow,
    description: "A finely crafted bow used by the drow, designed for precision and strength in dark and challenging environments.",
  },
  {
    id: 'dragonShd',
    name: "Dragon Shield",
    category: "Armor",
    price: 175,
    image: shieldDragon,
    description: "A shield forged from dragon scales, providing excellent protection and a fearsome look.",
  },
  {
    id: 'potWis',
    name: "Potion of Wisdom",
    category: "Potion",
    price: 50,
    image: wisPot,
    description: "A potion that enhances the drinker’s intelligence and insight, aiding in solving complex problems and magical knowledge.",
  },
  {
    id: 'ringInv',
    name: "Ring of Invisibility",
    category: "Accessory",
    price: 300,
    image: invRing,
    description: "A magical ring that grants its wearer the ability to become invisible at will, perfect for stealth and evasion.",
  },
  {
    id: 'bootsSpd',
    name: "Boots of Speed",
    category: "Armor",
    price: 100,
    image: speedBoots,
    description: "Boots that significantly increase the wearer’s speed, allowing for rapid movement and quick escapes.",
  },
  {
    id: 'tomeKno',
    name: "Tome of Knowledge",
    category: "Book",
    price: 250,
    image: tomeKnow,
    description: "An ancient book filled with valuable knowledge and spells, increasing the reader’s magical and scholarly abilities.",
  },
  {
    id: 'amuletPrt',
    name: "Amulet of Protection",
    category: "Accessory",
    price: 180,
    image: prtAmulet,
    description: "An amulet that provides a protective shield around the wearer, reducing damage and enhancing defense.",
  },
  {
    id: 'staffPower',
    name: "Staff of Power",
    category: "Wand",
    price: 2200,
    image: pwrStaff,
    description: "A powerful staff that enhances the wielder’s magical abilities, capable of casting powerful and destructive spells.",
  }
];

