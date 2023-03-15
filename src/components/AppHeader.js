import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import Logo from "./Logo";
import { COLORS } from "../theme/colors";
import { Entypo } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { selectCurrentProductCount } from "../store/slices/productSlice";

const AppHeader = ({ showBackBtn = false, navigation, setOpenModal, openModal }) => {
  const counter = useSelector(selectCurrentProductCount)
  console.log(counter)
  const openModalPage = () =>{
    setOpenModal(!openModal)
    console.log(openModal)
  }

  return (
    <View style={[styles.container]}>
      <Logo showBackBtn={showBackBtn} navigation={navigation} />
      <Pressable
        onPress={openModalPage}
       style={[styles.cartContainer]}>
        <Entypo name="shopping-cart" size={24} color="red" />
        <Text>{counter}</Text>
      </Pressable>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 55,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartContainer:{
    flexDirection: "row",
  }
});
