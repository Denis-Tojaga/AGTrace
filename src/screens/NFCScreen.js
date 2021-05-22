import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const NFCScreen = () => {

    return (
        <View>
            <Text>This is NFC screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({});



NFCScreen.navigationOptions = {
    title: "NFC",
    tabBarIcon: <MaterialCommunityIcons name="cellphone-nfc" size={24} color="black" />
};


export default NFCScreen;