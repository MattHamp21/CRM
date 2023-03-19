migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // remove
  collection.schema.removeField("u2dltnox")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
