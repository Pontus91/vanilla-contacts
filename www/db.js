/**
 * Supports IndexedDB in different browsers.
 */
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

/**
 * Openingen the database. And setting the name of the DB. And version.
 */
let requestToOpenDB = window.indexedDB.open("Contact DB", 1),
  db, // Database
  tx, // Transaction
  store, // Store
  index; // Index so you can search different pieces of data.

/**
 * Error handler.
 */
requestToOpenDB.onerror = function(e){
  console.log("Error while trying to open the database", e.target.errorCode);
}

/**
 * If its successful.
 */
requestToOpenDB.onsuccess = function(e){
  db = requestToOpenDB.result;
}

/**
 * We need to establish the store in this function.
 * Because the store defines the structure of the data.
 */
requestToOpenDB.onupgradeneeded = function(e){
  let db = requestToOpenDB.result,
  store = db.createObjectStore("Contact Store", {
    keyPath: "name"
  });
  index = store.createIndex("Contact", "name", {unique: false});
}

