migrate((db) => {
  const collection = new Collection({
    "id": "g9jvzbkqhyppndr",
    "created": "2023-05-03 07:41:46.957Z",
    "updated": "2023-05-03 07:41:46.957Z",
    "name": "links",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rdxiilln",
        "name": "url",
        "type": "url",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "qe9qxmfl",
        "name": "shortSlug",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 6,
          "max": 16,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ads8ydqp",
        "name": "createdBy",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ngzjtpij",
        "name": "click",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_euBYM0D` ON `links` (`shortSlug`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id = createdBy",
    "deleteRule": "@request.auth.id = createdBy",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g9jvzbkqhyppndr");

  return dao.deleteCollection(collection);
})
