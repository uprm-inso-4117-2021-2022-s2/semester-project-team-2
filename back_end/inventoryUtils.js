exports.findInventoryAmount = function findInventoryAmount(json, orgID, itemID) {
    for (let inventory of json) {
        if (inventory.orgID == orgID && inventory.itemID == itemID) {
            return inventory.quantity;
        }
    }
}

exports.checkGoodQuantities = function findInventoryAmount(json, orgID, minQuantity) {
    for (let inventory of json) {
        if (inventory.orgID == orgID && inventory.itemID < minQuantity) {
            return inventory.itemID;
        }
    }
    return;
}