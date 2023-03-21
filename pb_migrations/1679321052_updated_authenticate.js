migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ihx0o5s45kejr7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hsyqi1x",
    "name": "username",
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
    "id": "50qfopyk",
    "name": "password",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ihx0o5s45kejr7")

  // remove
  collection.schema.removeField("5hsyqi1x")

  // remove
  collection.schema.removeField("50qfopyk")

  return dao.saveCollection(collection)
})
