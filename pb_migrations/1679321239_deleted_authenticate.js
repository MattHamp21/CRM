migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6ihx0o5s45kejr7");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6ihx0o5s45kejr7",
    "created": "2023-03-20 13:57:26.567Z",
    "updated": "2023-03-20 14:04:12.276Z",
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
      },
      {
        "system": false,
        "id": "5hsyqi1x",
        "name": "username",
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
        "id": "50qfopyk",
        "name": "password",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
