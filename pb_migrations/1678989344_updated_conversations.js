migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4yblh7gx",
    "name": "chat",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "5cgqkno2ia1i6xp",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // remove
  collection.schema.removeField("4yblh7gx")

  return dao.saveCollection(collection)
})
