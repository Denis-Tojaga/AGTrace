import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, Dimensions, Image, FlatList } from "react-native";
import SquareCard from "../components/SquareCard";
import Data from "../helpers/Data.js";

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.image} source={require("../images/plant.png")} />
                <Text style={styles.headerText}>Monitoring status</Text>
            </View>

            <View stlye={{
                width: width * 0.4, height: height * 0.35, borderColor: "black",
                borderColor: "black"
            }}>
                <Text>Ovo je velika kartica</Text>
            </View>

            <View style={styles.whiteContainer}>
                <FlatList
                    data={[Data[0], Data[1]]}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <SquareCard picture={item.picture} temperature={item.temperature} status={item.status} />
                        );
                    }}
                />
                <FlatList
                    data={[Data[2], Data[3]]}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <SquareCard picture={item.picture} temperature={item.temperature} status={item.status} />
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5EAF26",
        flex: 1,
    },

    header: {
        width: width,
        height: height * 0.3,
        borderWidth: 1,
        borderColor: "black",
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    headerText: {
        fontSize: 28,
        fontFamily: "TrendaSemibold",
        marginRight: 10,
        marginTop: height * 0.03
    },

    whiteContainer: {
        width: width,
        height: height * 0.6,
        backgroundColor: "white",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        flexDirection: "row"
    },

    image: {
        width: 180,
        height: 190,
        transform: [{ rotate: '40deg' }],
        position: "absolute",
        left: -30,
        top: -30,
        opacity: .7
    }
});


HomeScreen.navigationOptions = {
    headerShown: false
}


export default HomeScreen;