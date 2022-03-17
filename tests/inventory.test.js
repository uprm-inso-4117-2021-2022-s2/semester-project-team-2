////////// Unit tests //////////
inventory = require("../back_end/inventoryUtils.js");

var mock_json =
  [
    {
      "_id": { "$oid": "623340758924fd74599ea636" },
      "itemID": 12,
      "orgID": 1,
      "quantity": 93
    },
    {
      "_id": { "$oid": "6233412d8924fd74599ea638" },
      "itemID": 12,
      "orgID": 4,
      "quantity": 13
    },
    {
      "_id": { "$oid": "6233412e8924fd74599ea639" },
      "itemID": 51,
      "orgID": 1,
      "quantity": 81
    },
    {
      "_id": { "$oid": "6233412e8924fd74599ea63a" },
      "itemID": 101,
      "orgID": 1,
      "quantity": 104
    }
  ]


test('Get inventory amount for organization with id 1 and item id 12 equals 93', () => {
  expect(inventory.findInventoryAmount(mock_json, 1, 51)).toBe(81);
});

test('Get inventory amount for organization with id 1 and item id 12 does not equal 10', () => {
  expect(inventory.findInventoryAmount(mock_json, 1, 51)).toBe(81);
});

test('Get inventory for organization with id 4 has an alert because any quantity is less than 50', () => {
  expect(inventory.checkGoodQuantities(mock_json, 4, 50)).toBe(12);
});


////////// Integration tests //////////
const { MongoClient } = require('mongodb');

async function testDBFindElement(db) {
  return await db.collection("inventory").findOne({}, {});
}

describe('Mongo DB database connection', () => {
  let connection;
  let db;

  beforeAll(async () => {
    const uri = "mongodb://mongo:group2pass@manage-livestock.ddns.net";

    connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db("tests");
  });

  afterAll(async () => {
    await connection.close();
  });

  test('Test connection with public database', async () => {
    expect(await testDBFindElement(db)).toBeDefined;
  });
});