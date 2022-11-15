import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default class ChatList extends Component {
    render() {
        return (
            <List>
                <ListItem button={true}>
                    Chat 1
                </ListItem>
                <ListItem button={true}>
                    Chat 2
                </ListItem>
            </List>
        )
    }
}