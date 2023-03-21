migrate((db) => {
  const collection = new Collection({
    "id": "6ihx0o5s45kejr7",
    "created": "2023-03-20 13:57:26.567Z",
    "updated": "2023-03-20 13:57:26.567Z",
    "name": "authenticate",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l9xmfuu2",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "uvs2ix5ibcddw7b",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("6ihx0o5s45kejr7");

  return dao.deleteCollection(collection);
})
