migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uvs2ix5ibcddw7b")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uvs2ix5ibcddw7b")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
