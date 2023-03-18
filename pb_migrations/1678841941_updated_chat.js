migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cgqkno2ia1i6xp")

  collection.name = "chats"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cgqkno2ia1i6xp")

  collection.name = "chat"

  return dao.saveCollection(collection)
})
