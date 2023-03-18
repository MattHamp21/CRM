migrate((db) => {
  const collection = new Collection({
    "id": "5cgqkno2ia1i6xp",
    "created": "2023-03-15 00:54:04.527Z",
    "updated": "2023-03-15 00:54:04.527Z",
    "name": "chat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t7l728hl",
        "name": "message",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zw7gz9f7",
        "name": "customer",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "7n0nywusjbtc9tv",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "szurhaab",
        "name": "support",
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
  const collection = dao.findCollectionByNameOrId("5cgqkno2ia1i6xp");

  return dao.deleteCollection(collection);
})
