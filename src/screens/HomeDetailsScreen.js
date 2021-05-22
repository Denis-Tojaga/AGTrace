import React from "react";
import { StyleSheet, View, Text ,SafeAreaView,Image, ScrollView} from "react-native";
import { Entypo } from '@expo/vector-icons'; 

const HomeDetailsScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
           
            <Text style={{top:'8%',left:'10%',fontFamily:'MoonBold',fontSize:20}}>Trailer loading stats</Text>
            
            <View style={styles.First}>
                <View style={styles.FirstFirst}><Image style={{width:'30%',height:'80%',
            resizeMode:'contain',left:'15%'}}source={require('../ImagesTest/noProfile.png')}/>
            <Text style={{fontFamily:'TrendaRegular',fontSize:20}}>NFC#T46</Text>
            <Image style={{left:'20%'}}source={require("../ImagesTest/Ellipse.png")}/>
            <Text style={{fontFamily:'TrendaSemibold',fontSize:20,left:'30%',fontWeight:'bold'}}>Active</Text>
            <Entypo style={{left:'135%'}}name="chevron-thin-right" size={24} color="black" />
            </View>
            <Text>--------------------------------------------------------------------------------------</Text>
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Trailer</Text>
            <Text style={styles.TextInfo2}>Trailer #1</Text>
            </View>
            
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Last load capacity</Text>
            <Text style={styles.TextInfo2}>1,5t</Text></View>
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Last load start</Text>
            <Text style={styles.TextInfo2}>11:00AM</Text></View>
            <View style={styles.GreenBox}>
            <Text style={styles.TextInfo}>Last load finish</Text>
            <Text style={styles.TextInfo2}>12:00AM</Text>
            </View>
            </View>
            <View style={styles.Second}>
            <View style={styles.FirstFirst}><Image style={{width:'30%',height:'80%',
            resizeMode:'contain',left:'15%'}}source={require('../ImagesTest/noProfile.png')}/>
            <Text style={{fontFamily:'TrendaRegular',fontSize:20}}>NFC#T47</Text>
            <Image style={{left:'20%'}}source={require("../ImagesTest/Ellipse.png")}/>
            <Text style={{fontFamily:'TrendaSemibold',fontSize:20,left:'30%',fontWeight:'bold'}}>Active</Text>
            <Entypo style={{left:'135%'}}name="chevron-thin-right" size={24} color="black" />
            </View>
            <Text>--------------------------------------------------------------------------------------</Text>
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Trailer</Text>
            <Text style={styles.TextInfo2}>Trailer #2</Text>
            </View>
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Last load capacity</Text>
            <Text style={styles.TextInfo2}>1,5t</Text></View>
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Last load start</Text>
            <Text style={styles.TextInfo2}>12:00AM</Text></View>
            <View style={styles.GreenBox}>
            <Text style={styles.TextInfo}>Last load finish</Text>
            <Text style={styles.TextInfo2}>13:00AM</Text>
            </View>
            </View>
            <View style={styles.Third}>
            <View style={styles.FirstFirst}><Image style={{width:'30%',height:'80%',
            resizeMode:'contain',left:'15%'}}source={require('../ImagesTest/noProfile.png')}/>
            <Text style={{fontFamily:'TrendaRegular',fontSize:20}}>NFC#T48</Text>
            <Image style={{left:'20%'}}source={require("../ImagesTest/Ellipse.png")}/>
            <Text style={{fontFamily:'TrendaSemibold',fontSize:20,left:'30%',fontWeight:'bold'}}>Active</Text>
            <Entypo style={{left:'135%'}}name="chevron-thin-right" size={24} color="black" />
            </View>
            <Text>--------------------------------------------------------------------------------------</Text>
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Trailer</Text>
            <Text style={styles.TextInfo2}>Trailer #3</Text>
            </View>
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Last load capacity</Text>
            <Text style={styles.TextInfo2}>2t</Text></View>
            <View style={styles.GreenBox}><Text style={styles.TextInfo}>Last load start</Text>
            <Text style={styles.TextInfo2}>14:00AM</Text></View>
            <View style={styles.GreenBox}>
            <Text style={styles.TextInfo}>Last load finish</Text>
            <Text style={styles.TextInfo2}>16:00AM</Text>
            </View>
            </View>
            
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    First:{
        width:'80%',
        height:'30%',
        top:'12%',
        left:'10%',
        backgroundColor:'rgba(247,250,233,0.5)',
        borderRadius:50
    },
    Second:{
        width:'80%',
        height:'30%',
        top:'18%',
        left:'10%',
        backgroundColor:'rgba(247,250,233,0.5)',
        borderRadius:50
    },
    Third:{
        width:'80%',
        height:'30%',
        top:'24%',
        left:'10%',
        backgroundColor:'rgba(247,250,233,0.5)',
        borderRadius:50
    },
    FirstFirst:{
        width:'50%',
        height:'20%',
        top:'5%',
        flexDirection:'row',
        alignItems:'center'
    },
    GreenBox:{
        width:'90%',
        backgroundColor:'rgba(74,151,21,0.2)',
        height:'18%',
        left:'5%',
        borderRadius:10,
        margin:"1%",
        flexDirection:'row',
        alignItems:'center'
    },
    TextInfo:{
        left:'45%',
        fontFamily:'TrendaSemibold',
        fontSize:15,
        width:'30%'
    },
    TextInfo2:{
        fontFamily:'TrendaSemibold',
        fontSize:15,
        width:'65%',
        textAlign:'right'
    },
    scrollView: {
       width:'100%',
       height:'100%',
       flex:1
    },
});



export default HomeDetailsScreen;