import React from "react";
import { StyleSheet, Text, Button, View, Image, Dimensions, ImageBackground, TouchableOpacity, LogBox } from "react-native";

const { width, height } = Dimensions.get("screen");


const WelcomeScreen = ({ navigation }) => {

    LogBox.ignoreAllLogs();

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require("../images/welcome.png")}>
                <Image style={styles.logo} source={require("../images/logo.png")} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    backgroundImage: {
        width: width,
        height: height,
    },

    logo: {

        width: width * 0.8,
        height: height * .5,
        resizeMode: "contain",
        marginBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: .4,
        shadowRadius: 17,
    },

    button: {
        borderRadius: 20,
        backgroundColor: "#CEB01A",
        width: width * 0.8,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 40,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowOpacity: .9,
        shadowRadius: 9,
    },

    buttonText: {
        fontFamily: "TrendaRegular",
        fontSize: 25,
    }
});


WelcomeScreen.navigationOptions = {
    headerShown: false
}


export default WelcomeScreen;