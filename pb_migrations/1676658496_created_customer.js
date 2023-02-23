migrate((db) => {
  const collection = new Collection({
    "id": "7n0nywusjbtc9tv",
    "created": "2023-02-17 18:28:16.069Z",
    "updated": "2023-02-17 18:28:16.069Z",
    "name": "customer",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ucpksrkb",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7n0nywusjbtc9tv");

  return dao.deleteCollection(collection);
})
