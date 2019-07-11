import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';


export default function ListItem(props) {
    const {
        group,
        onPressCallback,
    } = props;

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => onPressCallback(group)}>
                <Text style={styles.name}>{group.name}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#000',
        marginBottom: 1,
        height: 60,
    },
    containerFocused: {
        backgroundColor: '#dedede',
    },
    name: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        fontSize: 20,
        textAlignVertical: 'bottom',
        height: '100%',
        // height: 44,
    },
});
