import React from 'react';
import { Text, TouchableHighlight, TouchableOpacity } from 'react-native';

const Button = ({ buttonPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
        onPress={buttonPress} 
        style = {buttonStyle}>
            <Text style = {textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#F4F4F4',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Arial',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#C0B283',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#373737',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;