migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smmbcsxm5hdny73")

  // remove
  collection.schema.removeField("ca8rjlax")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("smmbcsxm5hdny73")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
