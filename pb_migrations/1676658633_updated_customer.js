migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n0nywusjbtc9tv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftt911hb",
    "name": "age",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 130
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uocropda",
    "name": "address",
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
    "id": "9zj6aokb",
    "name": "phone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 20,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t8vejbze",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fagfrs3o",
    "name": "country",
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
  const collection = dao.findCollectionByNameOrId("7n0nywusjbtc9tv")

  // remove
  collection.schema.removeField("ftt911hb")

  // remove
  collection.schema.removeField("uocropda")

  // remove
  collection.schema.removeField("9zj6aokb")

  // remove
  collection.schema.removeField("t8vejbze")

  // remove
  collection.schema.removeField("fagfrs3o")

  return dao.saveCollection(collection)
})
