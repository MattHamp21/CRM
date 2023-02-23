migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sod0x4g671d2dni")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "no7xowyr",
    "name": "convos",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "bt7svpx0lsr24wt",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sod0x4g671d2dni")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "no7xowyr",
    "name": "field1",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "bt7svpx0lsr24wt",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
