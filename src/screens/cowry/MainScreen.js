import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import CowryModal from './cowryComponents/CowryModal'

const MainScreen = () => {
  const [ModalVisible, setModalVisible] = useState(false)
  const date = "16 March 2023"
  const product = "Money Mark Fund"
  const transaction = "2029466870"
  return (
    <View style={styles.container}>
        <Modal
            styles = {styles.modal}
            animationType="slide"
            transparent={true}
            visible={ModalVisible}
            onRequestClose={() => {
                setModalVisible(!ModalVisible);
            }}
        >
            <CowryModal 
                setModalVisible={setModalVisible}
                date={date}
                product={product}
                transaction={transaction}
            />
        </Modal>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                setModalVisible(true);
            }}
        >
        <Text style={styles.text}>Open Modal</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        backgroundColor:"green",
        padding:4,
        borderRadius:3
    },
    text:{
        color:"white"
    },
    
})               