import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";


const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text>This is Home screen</Text>
            <Button title="Go to home details screen" onPress={() => navigation.navigate("HomeDetails")} />
        </View>
    );
};


const styles = StyleSheet.create({});


export default HomeScreen;