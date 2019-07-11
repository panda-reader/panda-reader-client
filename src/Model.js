import * as PersistentLocalStorage from './PersistentLocalStorage';

export const getUserSessionKey = async () => {
    return await PersistentLocalStorage.getObject('userSessionKey');
}

export const getGroups = async () => {
    let groups = await PersistentLocalStorage.getObject('groups');

    if (groups === undefined) {
        groups = [];
    }

    return groups;
}

const genereteUUID = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const createGroup = async (group) => {
    let groups = await PersistentLocalStorage.getObject('groups');

    if (groups === undefined) {
        groups = []
    }

    group.id = genereteUUID();
    groups.push(group);

    return PersistentLocalStorage.saveObject('groups', groups);
}
