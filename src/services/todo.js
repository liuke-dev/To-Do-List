import update from 'immutability-helper';
import apis from '../http/api'

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    apis.getList().then(res => {
        console.log(res)
    })

}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}


let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}


export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
