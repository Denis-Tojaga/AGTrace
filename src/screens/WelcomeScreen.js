import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";


const WelcomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text>This is home screen</Text>
            <Button title="Go to signin screen!" onPress={() => navigation.navigate("Signin")} />
            <Button title="Go to signup screen!" onPress={() => navigation.navigate("Signup")} />
        </View>
    );
};


const styles = StyleSheet.create({});


export default WelcomeScreen;