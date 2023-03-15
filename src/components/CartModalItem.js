import { StyleSheet, Text, View, ScrollView, Pressable,Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import React, {useState} from 'react'
import { selectProducts } from '../store/slices/productSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/slices/productSlice';

const CartModalItem = ({item, total, setTotal}) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const allProducts = useSelector(selectProducts)
  const increaseQuantity = () =>{
    setQuantity(quantity + 1)
    setTotal(total + item.price)
  }
  const decreaseQuantity = () =>{
    quantity < 1 ? removeItem() : setQuantity(quantity - 1)
    setTotal(total - item.price)
  }
  
  const removeItem = () =>{
    console.log("value")
    // var newProducts = allProducts.filter(item => item === item.productName);
    // dispatch(setProducts(newProducts))
    // console.log(newProducts)
  }
  return (
    <View style={styles.cartItemContainer}>
        <Image
          source={{
              uri : item.image
          }}
          style={styles.imgStyle}
        />
        <View style={styles.ItemDetails}>
            <Text style={styles.titleText}>{item.productName}</Text>
            <Text style={styles.descriptionText}>{item.productName}</Text>
            <View style={styles.quantityContainer}>
                <Pressable onPress={decreaseQuantity}>
                  <Feather name="minus-circle" size={24} color="gray" />
                </Pressable>
                <Text>{quantity}</Text>
                <Pressable onPress={increaseQuantity}>
                  <Feather name="plus-circle" size={24} color="gray" />
                </Pressable>
            </View>
            <Text style={styles.amount}>${item.price * quantity}</Text>
        </View>
    </View>
  )
}

export default CartModalItem

const styles = StyleSheet.create({
    imgStyle: {
        height: 160,
        width: "50%",
        resizeMode: "contain",
      },
    cartItemContainer:{
        display:"flex",
        flexDirection:"row", 
        alignItems:"center",
        margin:4
      },
    titleText:{
        fontWeight:"bold",
        fontSize:15
      },
    descriptionText:{
        fontWeight:"normal",
      },
    quantityContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"40%",
        paddingVertical:4
      },
    ItemDetails:{
        display:"flex",
        height:"70%",
        width:"50%",
      },
    amount:{
        color:"red",
        fontWeight:"normal",
        fontSize:15
    },

})