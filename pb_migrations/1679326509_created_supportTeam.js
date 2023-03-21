migrate((db) => {
  const collection = new Collection({
    "id": "smmbcsxm5hdny73",
    "created": "2023-03-20 15:35:09.164Z",
    "updated": "2023-03-20 15:35:09.164Z",
    "name": "supportTeam",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ca8rjlax",
        "name": "user",
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
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("smmbcsxm5hdny73");

  return dao.deleteCollection(collection);
})
