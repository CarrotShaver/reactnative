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


const styles = {
    viewStyle: {
        backgroundColor: '#565656',
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
        color: '#F7F7F7'
    }
};

// Make the component available to other parts of the app
export {Header};
