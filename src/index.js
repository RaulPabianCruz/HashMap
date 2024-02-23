import HashMapFactory from './HashMapFactory.js';

const hashTable = HashMapFactory();
hashTable.set('Raul', 25);
hashTable.set('Brienne', 30);
hashTable.set('Brienne', 29);
console.log(hashTable.entries());
console.log(hashTable.length());
