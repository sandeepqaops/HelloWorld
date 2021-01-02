import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
        const user_name = this.state.name; 
        const other_param = this.state.otherParam;
        return (
            <View style={styles.container}>
                <Image
                    style={{ flex: 0, height: 150, width: 350 }}
                    source={require('../resources/react-native.png')}
                />
                <Text style={{ marginTop: 16,fontSize: 20,}}>  
                    This is Profile Screen and we receive value from Home Screen  
                </Text>  
                <Text style={styles.textStyle}>User Name: {JSON.stringify(user_name)}</Text>  
                <Text style={styles.textStyle}>Other Param: {JSON.stringify(other_param)}</Text> 
                <TouchableOpacity style={styles.button}
                        onPress={
                            () => this.props.navigation.goBack()
                        }>
                        <Text style={styles.buttonText}>
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
    textStyle: {
        margin: 15,
        width: 350,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
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

