migrate((db) => {
  const collection = new Collection({
    "id": "bt7svpx0lsr24wt",
    "created": "2023-02-17 18:28:28.312Z",
    "updated": "2023-02-17 18:28:28.312Z",
    "name": "conversations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u2dltnox",
        "name": "messages",
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
        "id": "0h4cef0s",
        "name": "date_started",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "215a3jlo",
        "name": "resolved",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tlwi7ygi",
        "name": "issue",
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
        "id": "pww7hwfg",
        "name": "cutomer_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "7n0nywusjbtc9tv",
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
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt");

  return dao.deleteCollection(collection);
})
