import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 2,
        borderRadius: 2, //rounded corners
        borderColor: '#ddd', //light gray border
        borderBottomWidth: 0,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        //Drop-Shadow Options only show on ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2
    }
};

export default Card;