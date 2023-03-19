migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // remove
  collection.schema.removeField("xx4kvb4q")

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wi6guzic",
    "name": "supporTeamMember",
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
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xx4kvb4q",
    "name": "supportTeamMembers",
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

  // remove
  collection.schema.removeField("u2dltnox")

  // remove
  collection.schema.removeField("wi6guzic")

  return dao.saveCollection(collection)
})
