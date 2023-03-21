migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cgqkno2ia1i6xp")

  // remove
  collection.schema.removeField("szurhaab")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cgqkno2ia1i6xp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szurhaab",
    "name": "support",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "uvs2ix5ibcddw7b",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
