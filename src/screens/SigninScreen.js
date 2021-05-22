import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";




const { width, height } = Dimensions.get("screen");


const SigninScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient style={{ flex: 1 }} colors={["#58C70B", "#000000"]} start={{ x: 0.5, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}>
                <TouchableOpacity style={{ width: 80, height: 70 }} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" style={styles.icon} />
                </TouchableOpacity>
                <Image style={styles.logo} source={require("../images/logo2.png")} />
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Sign in</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholderTextColor="black"
                        placeholder="Email"
                        keyboardType={"email-address"}
                        autoCorrect={false}
                        autoCapitalize={"none"}
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholderTextColor="black"
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize={"none"}
                    />


                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },

    logo: {

        width: width * 0.7,
        height: height * .4,
        resizeMode: "contain",
        marginBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: .4,
        shadowRadius: 17,
        position: "absolute",
        top: -80,
        left: width * 0.10
    },


    icon: {
        fontSize: 45,
        color: "black",
        marginLeft: 25,
        marginTop: 20
    },

    formContainer: {
        width: width * 0.85,
        height: height * 0.4,
        alignSelf: "center",
        marginHorizontal: 15,
        marginTop: height * 0.15,
    },

    formText: {
        fontSize: 40,
        fontFamily: "TrendaRegular",
        textAlign: "center",
        marginBottom: 30
    },

    inputField: {
        width: width * 0.85,
        height: 65,
        borderRadius: 15,
        fontSize: 20,
        fontFamily: "TrendaLight",
        paddingLeft: 30,
        backgroundColor: "white",
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: .7,
        shadowRadius: 12,
    },
    button: {
        borderRadius: 22,
        backgroundColor: "#CEB01A",
        width: width * 0.8,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: .8,
        shadowRadius: 12,
    },

    buttonText: {
        fontFamily: "TrendaRegular",
        fontSize: 25,
    }


});


SigninScreen.navigationOptions = {
    headerShown: false
}


export default SigninScreen;