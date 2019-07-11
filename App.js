import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import BooksListScreen from './src/screens/BooksList';
// import GroupInfoScreen from './src/screens/GroupInfo';
// import CreateGroupScreen from './src/screens/CreateGroup';

import ScreenNames from './src/screens/ScreenNames';

import { AsyncStorage } from 'react-native';

// // import Model from './src/Model';

// AsyncStorage.clear();


// AsyncStorage.removeItem('groups').then(() => {
//     // AsyncStorage.getItem('lal').then((e) => {
//     //     alert(e);
//     // })
// })

const MainNavigator = createStackNavigator({
    [ScreenNames.BOOKS_LIST]: {
        screen: BooksListScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Books',
        }),
    },
    // [ScreenNames.GROUP_INFO]: {
    //     screen: GroupInfoScreen,
    //     navigationOptions: ({ navigation }) => ({
    //         title: `Group: ${navigation.state.params.group.name}`,
    //     }),
    // },
    // [ScreenNames.CREATE_GROUP]: {
    //     screen: CreateGroupScreen,
    //     navigationOptions: ({ navigation }) => ({
    //         title: `Create group`,
    //     }),
    // },
});


// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.model = new Model();
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <GroupsScreen model={this.model}/>
//             </View>
//         )
//     }
// }



// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 20,
//         height: '100%',
//         width: '100%'
//     },
// });

const App = createAppContainer(MainNavigator);

export default App;
