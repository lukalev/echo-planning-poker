import update from 'immutability-helper';
/**
 * Get initial items.
 * @return {Array}
 */
export function getAll() {
    return [];
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, value) {
    let index = items.findIndex(item => item.id === itemId);
    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            values: {$set: items[index].values.concat(value)}
        }
    });
}

/**
 * A counter to generate a unique id for an item.
 * @type {Number}
 */
let storyCounter = 1;

function getNextId() {
    return getAll().length + storyCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
/**
 * Adds a new story item on the list and returns the new updated list (immutable).
 *
 * @param {Array} items
 * @param {Number} itemId
 * @param {Object} data
 * @return {Array}
 */
export function addStoryToList(items, itemId, data) {
    let index = items.findIndex(item => item.id === itemId);
    let item = Object.assign({
        id: getNextId()
    }, data);
    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            stories: {$set: items.stories.concat([item])}
        }
    });
}