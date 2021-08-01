import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { prototype } from 'emittery';

export default class index extends React.Component 
{
    render() {
        return  <View>
                    <Text> {this.props.name} </Text>
                    <Text> {this.props.age} </Text>
                </View>
        
    }     
}

index.prototypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

index.defaultProps = {
    name: 'ali veli',
    age: 26
}