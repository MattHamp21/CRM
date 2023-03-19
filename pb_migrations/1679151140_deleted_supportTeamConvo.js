migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sod0x4g671d2dni");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "sod0x4g671d2dni",
    "created": "2023-02-17 18:26:13.086Z",
    "updated": "2023-02-17 18:40:49.520Z",
    "name": "supportTeamConvo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wql2uwnk",
        "name": "team_members",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "uvs2ix5ibcddw7b",
          "cascadeDelete": false,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "no7xowyr",
        "name": "convos",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "bt7svpx0lsr24wt",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
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
