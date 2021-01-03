import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import testID from 'react-native-testid';

class HomePage extends Component {
    constructor(props) {
        //constructor to set default state  
        super(props);
        this.state = {
            name: '',
        };
        this.MAX_VAR_LENGTH = 40;
    }
    processName = () => {
        if (this.state.name === '') {
            alert('Name Cannot be Blank');
            return;
        }
        if(this.state.name.length > this.MAX_VAR_LENGTH){
            alert('Maximum length of this variable is '+ this.MAX_VAR_LENGTH);
            this.setState({name : ''})
            return;
        }
        this.props.navigation.navigate('HelloPage', {  
            userName: this.state.name,  
            otherParam: '101',  
        });  
        this.setState({name : ''})
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ flex: 0, height: 150, width: 350 }}
                    source={require('../resources/react-native.png')}
                    {...testID('home-image')}
                />
                <View style={styles.textContainer}>
                    <TextInput style={styles.textInput}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                        placeholder={'Enter Your Name'}
                        placeholderTextColor="#CFD8DC"
                        {...testID('home-name-field')}
                    />
                    <TouchableOpacity style={styles.button} {...testID('home-submit-button')}
                        onPress={
                            () => this.processName()
                        }>
                        <Text style={styles.buttonText} {...testID('home-submit-button-text')}>
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

