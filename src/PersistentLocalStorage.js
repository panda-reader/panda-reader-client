import { AsyncStorage } from 'react-native';


export const saveObject = async (key, obj) => {
    try {
        const serializedObject = JSON.stringify(obj);
        await AsyncStorage.setItem(key, serializedObject);
    } catch (error) {
        // add logging
    }
};

export const getObject = async (key) => {
    let resultObj = undefined;

    try {
        const serializedObject = await AsyncStorage.getItem(key);

        if (serializedObject !== null) {
            resultObj = JSON.parse(serializedObject);
        }

    } catch (error) {
        // add logging
    }

    return resultObj;
};
