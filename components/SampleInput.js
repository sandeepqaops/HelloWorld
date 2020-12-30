import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
    state = {
        username: '',
    }
    handleUsername = (text) => {
        this.setState({ username: text })
    }
    prompt = (username, pass) => {
        alert('username: ' + username)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    placeholder="Username"
                    placeholderTextColor="#CFD8DC"
                    onChangeText={this.handleUsername} />
                <TouchableOpacity style={styles.button}
                 onPress = {
                    () => this.prompt(this.state.username)
                 }>
                    <Text style={styles.buttonText}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Inputs;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#CFD8DC',
        flex: 1,
        padding: 50,
    },
    button: {
        paddingLeft: 200,
    },
    textInput: {
        margin: 15,
        width: 350,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
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