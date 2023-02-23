migrate((db) => {
  const collection = new Collection({
    "id": "sod0x4g671d2dni",
    "created": "2023-02-17 18:26:13.086Z",
    "updated": "2023-02-17 18:26:13.086Z",
    "name": "supportTeamConvo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wql2uwnk",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "uvs2ix5ibcddw7b",
          "cascadeDelete": false,
          "maxSelect": null,
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
  const collection = dao.findCollectionByNameOrId("sod0x4g671d2dni");

  return dao.deleteCollection(collection);
})
