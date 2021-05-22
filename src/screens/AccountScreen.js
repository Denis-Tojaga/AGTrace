
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, Image,TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { navigate } from "../helpers/navigation";
const AccountScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Me}>
            <View style={styles.Me2}>
                <Text style={styles.MeText1}>Hello,</Text>
                <Text style={styles.MeText2}>Denis</Text>   
            </View>
            <Image style={{resizeMode:'contain',width:'100%',height:'100%',left:'90%'}}
            source={require("../ImagesTest/noProfile.png")}/>
            </View>
            
            <View style={styles.NFC}><Text style={styles.NFCText}>Active NFC Tags</Text>
            <View style={{flexDirection:'row', top:'5%',alignItems:'center',left:'20%'}}>
                <Image source={require("../ImagesTest/Ellipse.png")}/>
            <Text style={{fontSize:40, left:'5%',fontFamily:'TrendaRegular'}}>74</Text>
            <Image source={require("../ImagesTest/Curve.png")}/></View>
            
            </View>
            <TouchableWithoutFeedback>
            <View style={styles.PersonalInfo}>
                <View style={{backgroundColor:"rgb(234,200,28)",width:'15%',height:'85%',justifyContent:'center',alignItems:'center', borderRadius:5}}><FontAwesome5 name="pen" size={24} color="black" /></View>
                
                <Text style={{fontSize:23,left:'30%',fontFamily:'TrendaRegular'}}>Change personal info</Text>
                <Entypo style={{left:'40%'}}name="chevron-thin-right" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
            <View style={styles.PersonalInfo2}>
                <View style={{backgroundColor:"rgba(206,220,156,0.3)",width:'15%',height:'85%',justifyContent:'center',alignItems:'center', borderRadius:5}}>
                    <Ionicons name="md-share-social-outline" size={24} color="black" /></View>
                
                <Text style={{fontSize:23,left:'30%',fontFamily:'TrendaRegular'}}>Share data</Text>
                <Entypo style={{left:'325%'}}name="chevron-thin-right" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity style={styles.Logout}onPress={() => navigate("Welcome")}>
            <View style={{flexDirection:'row'}}><MaterialIcons name="logout" size={24} color="red" />
            <Text style={{color:'white',fontSize:17,fontFamily:'TrendaRegular'}}>Sign out</Text>
            </View>
            </TouchableOpacity>
           
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        paddingTop: StatusBar.currentHeight,
    },
    Me:{
        height:'15%',
        width:'31%',
        top:'10%',
        left:'13%',
        
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    Me2:{
        borderColor:'lightblue',
        borderStyle:"solid",
        borderWidth:1,
    },
    MeText1:{
        fontSize:45,
        color:"rgb(94,175,38)",
        fontFamily:"TrendaRegular"
    },
    MeText2:{
        fontSize:45,
        color:"rgb(51,97,19)",
        fontFamily:"TrendaSemibold"
    },
    NFC:{
        width:'80%',
        backgroundColor:'red',
        height:'25%',
        top:'15%',
        left:'10%',
        right:'10%',
        borderRadius:40,
        backgroundColor:'rgba(234,250,176,0.4)',
    },
    NFCText:{
        fontSize:30,
        top:'10%',
        left:'10%',
        fontFamily:'TrendaRegular'
    },
    PersonalInfo:{
        flexDirection:'row',
        width:'70%',
        height:'5%',
        top:'50%',
        left:'8%',
        alignItems:'center',
    },
    PersonalInfo2:{
        flexDirection:'row',
        width:'70%',
        height:'5%',
        top:'57%',
        left:'8%',
        alignItems:'center',
    },
    Logout:{
        top:'70%',
        flexDirection:'row',
        backgroundColor:'black',
        width:'35%',
        height:'7%',
        left:'28%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15
    }
});


export default AccountScreen;