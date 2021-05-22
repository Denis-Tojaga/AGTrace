import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { navigate } from "../helpers/navigation";


const SigninScreen = () => {

    return (
        <View>
            <Text>This is SigninScreen screen</Text>
            <Button title="Go to Home screen" onPress={() => navigate("Home")} />
        </View>
    );
};


const styles = StyleSheet.create({});


export default SigninScreen;