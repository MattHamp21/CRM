migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pww7hwfg",
    "name": "customer_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "7n0nywusjbtc9tv",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
