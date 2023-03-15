import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal
} from "react-native";
import React, { useEffect } from "react";
import AppHeader from "../../components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import ScreenContainer from "../../components/ScreenContainer";
import { styles } from "./styles";
import MediumText from "../../components/MediumText";
import RegularText from "../../components/RegularText";
import Icon from "@expo/vector-icons/Entypo";
import { COLORS } from "../../theme/colors";
import { ProductsInCategory } from "../../services/Api";
import ProductCard from "../../components/ProductCard";
import LoadSpinner from "../../components/LoadingSpinner";
import { useDispatch } from "react-redux";
import { setCurrentProducts, setCurrentProductCount, setProducts } from "../../store/slices/productSlice";
import CartModalScreen from "../../components/CartModalScreen";
import { useSelector } from "react-redux";
import { selectCurrentProductCount, selectCurrentProduct, selectProducts } from "../../store/slices/productSlice";

const ProductDetailsScreen = () => {
  const product = useRoute().params;
  const navigation = useNavigation();
  const [relatedProducts, setRelatedProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false)
  const dispatch = useDispatch();
  const productFromStore = useSelector(selectCurrentProduct)
  const ProductCount = useSelector(selectCurrentProductCount)
  const allProducts = useSelector(selectProducts)

  console.log(allProducts)
  const renderHeader = () => {
    return (
      <>
        <Image
          source={{ uri: product.item.image }}
          style={styles.productImage}
        />
        <MediumText style={styles.title}>{product.item.title}</MediumText>
        <RegularText style={styles.price}>${product.item.price}</RegularText>
        <Text style={styles.description}>{product.item.description}</Text>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>YOU MAY ALSO LIKE</Text>
        </View>
      </>
    );
  };

  useEffect(() => {
    const loadRelatedProducts = async () => {
      setLoading(true);
      const result = await ProductsInCategory(product.item.category);
      console.log(result.data);
      setRelatedProducts(result.data);
      setLoading(false);
    };

    loadRelatedProducts().catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  const addToCart = () =>{
    let prod = {
      id:product.item.id,
      productName:product.item.title,
      price:product.item.price,
      quantity:1,
      image:product.item.image
    }

    dispatch(setCurrentProducts({
      currentProduct: prod,
    }))
    if (productFromStore.currentProduct.productName !== prod.productName){
      dispatch(setCurrentProductCount())
    }

    dispatch(setProducts([...allProducts, prod]))
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <CartModalScreen setOpenModal={setOpenModal}/>
      </Modal>
      <AppHeader showBackBtn navigation={navigation} setOpenModal={setOpenModal} openModal={openModal}/>
      <ScreenContainer>
        {loading ? (
          <LoadSpinner />
        ) : (
          <>
            <View style={styles.container}>
              <FlatList
                ListHeaderComponent={renderHeader}
                renderItem={({ item }) => <ProductCard item={item} />}
                data={relatedProducts}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
              />
            </View>
            <View style={styles.cartButtonContainer}>
              <TouchableOpacity onPress={addToCart} style={styles.cartBtn}>
                <Icon name="plus" size={25} color={COLORS.gray} />
                <Text style={styles.cartBtnText}>ADD TO CART</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.cartBtn,
                  {
                    justifyContent: "flex-end",
                  },
                ]}
              >
                <Icon name="heart-outlined" size={25} color={COLORS.gray} />
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
