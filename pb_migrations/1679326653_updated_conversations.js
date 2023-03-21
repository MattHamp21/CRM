migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt7svpx0lsr24wt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uwkabzdi",
    "name": "supportTeamMember",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "smmbcsxm5hdny73",
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
  collection.schema.removeField("uwkabzdi")

  return dao.saveCollection(collection)
})
