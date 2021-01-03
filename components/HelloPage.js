import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import testID from 'react-native-testid';

class HelloPage extends Component {
    constructor(props) {
        //constructor to set default state  
        super(props);
        this.state = {
            name: props.route.params.userName,
            otherParam: props.route.params.otherParam,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ flex: 0, height: 150, width: 350 }}
                    source={require('../resources/react-native.png')}
                    {...testID('hello-image')}
                />
                <View style={styles.helloContainer}>
                    <Text style={styles.greetingStyle} {...testID('hello-greeting')}>Hello </Text>
                    <Text style={styles.textStyle} {...testID('hello-name')}>{this.state.name}</Text>
                </View>
                <TouchableOpacity style={styles.button} {...testID('hello-back-button')}
                    onPress={
                        () => this.props.navigation.goBack()
                    }>
                    <Text style={styles.buttonText} {...testID('hello-back-button-text')}>
                        BACK
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HelloPage;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#CFD8DC',
        flex: 1,
        padding: 50,
    },
    helloContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingTop: 100
    },
    greetingStyle: {
        fontSize: 40,
        color: '#4FC3F7',
        borderColor: 'white',
        fontStyle: 'italic',
    },
    textStyle: {
        fontSize: 40,
        color: 'white',
        borderColor: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    button: {
        paddingLeft: 200,
    },
    buttonText: {
        borderWidth: 1,
        width: 150,
        padding: 25,
        borderColor: 'black',
        backgroundColor: '#4FC3F7',
        color: 'white',
        textShadowColor: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

