// Import Libraries for making a component
import React from 'react';
import {
    Text, 
    View
} from 'react-native';

// Make a component
const Header = ( props ) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    ); 
};

/**
 * Pale Gold: #C0B283
 * Silk: #DCD0C0
 * Paper: #F4F4F4
 * Charcoal: #373737
 */

const styles = {
    viewStyle: {
        backgroundColor: '#C0B283',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 5,
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
    },
    textStyle: {
        fontSize: 30,
        fontWeight: '500',
        fontStyle: 'normal',
        fontFamily: 'Arial',
        color: '#F4F4F4' //Paper
    }
};

// Make the component available to other parts of the app
export default Header;
