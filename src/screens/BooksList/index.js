import React from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Button,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

import ListItem from './ListItem';
import ScreenNames from '../ScreenNames';
import * as Model from '../../Model';


export default class BooksListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: [],
        };
    }

    componentDidMount() {
        this.reloadGroups();
    }

    reloadGroups() {
        Model.getGroups().then((groups) => {
            this.setState({
                ...this.state,
                groups: groups,
            });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { groups } = this.state;

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={() => this.reloadGroups()}
                />
                <View style={styles.groupsListContainer}>
                    {groups.length > 0 ? (
                        <FlatList
                            data={groups.map((group) => {
                                return {
                                    key: group.id,
                                    group: group,
                                };
                            })}
                            renderItem={({item}) => (
                                <ListItem
                                    group={item.group}
                                    onPressCallback={(group) => {
                                        navigate(ScreenNames.GROUP_INFO, {
                                            group: group,
                                        })
                                    }}
                                />
                            )}
                        />
                    ) : (
                        <Text>{'There are no books'}</Text>
                    )}
                </View>
                <View style={styles.addgroupButtonContainer}>
                    <Button
                        onPress={() => navigate(ScreenNames.CREATE_GROUP)}
                        title='Add one'
                        color='black'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addgroupButtonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    groupsListContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40,
    },
});
