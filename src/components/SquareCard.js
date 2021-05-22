import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");



const SquareCard = ({ picture, temperature, status }) => {

    const renderPicture = () => {
        if (picture == "apple")
            return <Image style={{ marginLeft: 10, marginTop: 10, width: 70, height: 80, resizeMode: "cover" }} source={require("../images/apple.png")} />
        else if (picture == "grape")
            return <Image style={{ marginLeft: 10, marginTop: 10, width: 70, height: 80, resizeMode: "cover" }} source={require("../images/grape.png")} />
        else if (picture == "watermelon")
            return <Image style={{ marginLeft: 10, marginTop: 10, width: 78, height: 80, resizeMode: "cover" }} source={require("../images/watermelon.png")} />
        else if (picture == "strawberry")
            return <Image style={{ marginLeft: 10, marginTop: 10, width: 78, height: 80, resizeMode: "cover" }} source={require("../images/strawberry.png")} />
    }


    return (
        <View style={styles.card}>
            <View stlye={styles.imageContainer}>
                {renderPicture()}
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.temperatureText}>{temperature}°</Text>
                <View style={status == "Bad" ? styles.badStatus : styles.goodStatus}>
                    <Text>{status}</Text>
                </View>
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    card: {
        width: width * 0.45,
        height: width * 0.4,
        backgroundColor: "white",
        borderRadius: 22,
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 6
        },
        shadowOpacity: .3,
        shadowRadius: 16,

    },

    imageContainer: {
        width: "80%",
        height: "100%",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 10
    },

    rightContainer: {
        flexDirection: "column",
        width: "40%",
        height: "100%",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    temperatureText: {
        fontSize: 33,
        fontFamily: "TrendaRegular",
        marginBottom: 40
    },

    badStatus: {
        width: 60,
        height: 25,
        backgroundColor: "#E23334",
        color: "black",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
    },

    goodStatus: {
        backgroundColor: "#60AE26",
        width: 60,
        height: 25,
        color: "black",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
    }


});


export default SquareCard;