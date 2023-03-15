import { StyleSheet, Text, View, SafeAreaView, Pressable,Image, ScrollView } from 'react-native'
import React, {useState,useLayoutEffect} from 'react'
import { COLORS } from "../theme/colors";
import { Feather } from '@expo/vector-icons';
import AppHeader from './AppHeader';
import CartModalItem from './CartModalItem';
import { selectProducts } from '../store/slices/productSlice';
import { useSelector } from 'react-redux';

const CartModalScreen = ({setOpenModal, openModal}) => {
  const allProducts = useSelector(selectProducts)
  const [total, setTotal] = useState(0)
  const closeModalPage = () =>{
    setOpenModal(openModal => !openModal)
  }
  useLayoutEffect(()=>{
    setTotal(calcTotal())
  },[])
  const calcTotal = () =>{
    var values = allProducts.map(item => item.price)
    var totalPrice = values.reduce((a,c)=> a+parseInt(c) )
    return totalPrice
  }
  
  return (
    <SafeAreaView style={[styles.container]}>
      <Pressable
        onPress={closeModalPage}
      >
        <AppHeader />
      </Pressable>
      <View style={styles.BottomView}>
        <Text style={styles.subtotal}>SUB TOTAL</Text>
        <Text style={styles.subtotalValue}>${total < 0 ? 0 : total}</Text>
      </View>
      <ScrollView styles={styles.View}>
        {
          allProducts.map(item => (
            <CartModalItem key={item.id} item={item} total={total} setTotal={setTotal}/>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default CartModalScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    Text:{
        flexDirection: 'row',
        justifyContent:"flex-end"
    },
    imgStyle: {
      height: 160,
      width: "50%",
      resizeMode: "contain",
    },
    cartItemContainer:{
      display:"flex",
      flexDirection:"row", 
      alignItems:"center"
    },
    BottomView:{
      position:"absolute",
      zIndex:2,
      bottom:0,
      borderTopColor:"gray",
      backgroundColor:"white",
      borderWidth: 1,
      width:"100%",
      display:"flex",
      flexDirection: "row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:4
    },
    subtotal:{
      fontSize:40,
    },
    subtotalValue:{
      fontSize:30,
      color:"red"
    }
})