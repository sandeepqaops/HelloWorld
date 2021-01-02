import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class HomePage extends Component {
    constructor(props) {
        //constructor to set default state  
        super(props);
        this.state = {
            name: '',
        };
    }
    validateName = (name) => {
        if (name === '') {
            alert('Name cannot be blank');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ flex: 0, height: 150, width: 350 }}
                    source={require('../resources/react-native.png')}
                />
                <View style={styles.textContainer}>
                    <TextInput style={styles.textInput}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                        placeholder={'Enter Your Name'}
                        placeholderTextColor="#CFD8DC"
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={
                            () => this.props.navigation.navigate('HelloPage', {  
                                userName: this.state.name,  
                                otherParam: '101',  
                            })  
                        }>
                        <Text style={styles.buttonText}>
                            SUBMIT
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#CFD8DC',
        flex: 1,
        padding: 50,
    },
    textContainer: {
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

