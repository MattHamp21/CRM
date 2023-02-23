migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sod0x4g671d2dni")

  // add
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wql2uwnk",
    "name": "team_members",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "uvs2ix5ibcddw7b",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sod0x4g671d2dni")

  // remove
  collection.schema.removeField("no7xowyr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wql2uwnk",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "uvs2ix5ibcddw7b",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
