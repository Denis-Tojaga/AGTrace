import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, Dimensions, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SquareCard from "../components/SquareCard";
import Data from "../helpers/Data.js";

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.image} source={require("../images/plant.png")} />
            </View>

            <View style={styles.floatingCard}>
                <Image style={{ marginLeft: 2, marginTop: 15, width: 130, height: 110 }} source={require("../images/cloud.png")} />
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.degreeText}> 22° Rain</Text>
                    <Text style={styles.windText}> Wind 8km/h</Text>
                </View>
            </View>

            <View style={styles.whiteContainer}>
                <FlatList
                    data={[Data[0], Data[1]]}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    snapToAlignment={true}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("HomeDetails")}>
                                <SquareCard picture={item.picture} temperature={item.temperature} status={item.status} />
                            </TouchableOpacity>
                        );
                    }}
                />
                <FlatList
                    data={[Data[2], Data[3]]}
                    keyExtractor={(item) => item.id}
                    bounces={false}
                    snapToAlignment={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("HomeDetails")}>
                                <SquareCard picture={item.picture} temperature={item.temperature} status={item.status} />
                            </TouchableOpacity>
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

    floatingCard: {
        width: width * 0.6,
        height: height * 0.2,
        paddingLeft: 5,
        position: "absolute",
        top: 80,
        marginHorizontal: 70,
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: .7,
        shadowRadius: 12,
    },


    degreeText: {
        fontSize: 20,
        fontFamily: "TrendaSemibold",
        fontWeight: "800",
        marginBottom: 35
    },


    windText: {
        fontFamily: "TrendaSemibold",
        fontSize: 14,
        marginRight: 15
    },


    header: {
        width: width,
        height: height * 0.3,
        flexDirection: "row",
        justifyContent: "flex-end"
    },


    whiteContainer: {
        width: width,
        height: height * 0.6,
        backgroundColor: "white",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        flexDirection: "row",
        paddingTop: 20
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