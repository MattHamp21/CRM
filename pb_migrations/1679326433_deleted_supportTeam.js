migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uvs2ix5ibcddw7b");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "uvs2ix5ibcddw7b",
    "created": "2023-02-17 18:25:23.831Z",
    "updated": "2023-03-20 15:30:05.848Z",
    "name": "supportTeam",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4fsu7kbc",
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
        "id": "qvibvkqd",
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
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
