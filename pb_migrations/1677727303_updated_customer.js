migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n0nywusjbtc9tv")

  // remove
  collection.schema.removeField("fmmhlq7g")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n0nywusjbtc9tv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmmhlq7g",
    "name": "convos",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "bt7svpx0lsr24wt",
      "cascadeDelete": false,
      "maxSelect": 10,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
