import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const CowryModal = ({setModalVisible,date,transaction,product}) => {
  return (
    <View style={styles.modal}>
      <Pressable onPress={()=>{setModalVisible(false)}} style={styles.cancelContainer}>
        <Feather name="x" size={28} color="white" />
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Thank You</Text>
        <Text style={styles.titleText}>Your recent transaction with us was successful</Text>
      </View>
      <Text style={styles.summary}>Summary</Text>
      <View style={styles.summaryContainer}>
        <AntDesign name="checkcircle" size={35} color="#a7c99d" />
        <Text style={styles.summaryContainerText}>cowry assets limited</Text>
      </View>
      <Text style={styles.summary}>Transaction Details</Text>
      <View style={styles.transactionContainer}>
        <View style={styles.detailsContainer}>
            <Text style={styles.TextOne}>Date</Text>
            <Text style={styles.TextTwo}>{date}</Text>
        </View>
        <View style={styles.detailsContainer}>
            <Text style={styles.TextOne}>Product</Text>
            <Text style={styles.TextTwo}>{product}</Text>
        </View>
        <View style={styles.detailsContainer}>
            <Text style={styles.TextOne}>Transaction Ref</Text>
            <Text style={styles.TextTwo}>#{transaction}</Text>
        </View>
      </View>
    </View>
  )
}

export default CowryModal

const styles = StyleSheet.create({
    modal : {
        width : "100%",
        height : "100%",
        display : "flex",
        backgroundColor : "#e08733"
    },
    cancelContainer : {
        paddingTop: 20,
        paddingLeft: 20
    },
    titleContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center",
        marginTop:20,
        width:"80%",
    },
    titleText:{
        color:"white",
        fontWeight:"bold",
        fontSize:17,
        textAlign:"center"
    },
    summary:{
        color:"white",
        paddingLeft: 20,
        fontWeight:"bold",
        fontSize:17,
        marginTop:20
    },
    summaryContainer:{
        width:"90%",
        height:"25%",
        flexDirection:"column",
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"center",
        backgroundColor:"white",
        marginTop:10,
        borderRadius:5
    },
    summaryContainerText:{
        textTransform:"uppercase",
        marginTop:10,
        fontWeight:"bold",
        color:"#a09898",
        fontSize:17
    },
    transactionContainer:{
        width:"90%",
        height:"17%",
        flexDirection:"column",
        backgroundColor:"white",
        justifyContent:"space-between",
        alignSelf:"center",
        alignItems:"center",
        borderRadius:5,
        margin:4,
        paddingTop:10,
        paddingBottom:15
    },
    detailsContainer:{
        display:"flex",
        width:"95%",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:4
    },
    TextOne:{
        color:"#a09898",
        fontSize:17
    },
    TextTwo:{
        color:"#000",
        fontSize:16,
        fontWeight:"400"
    }
})