migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cgqkno2ia1i6xp")

  // remove
  collection.schema.removeField("2vrptyvm")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cgqkno2ia1i6xp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vrptyvm",
    "name": "link",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "bt7svpx0lsr24wt",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
