import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import BasketballImage from "./assets/products/basketball1.jpeg";
import Avartor from "./assets/icons/avatar.png";
import reactDom from "react-dom";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>판매되는 상품들</Text>
      <View style={styles.productCard}>
        <View>
          <Image
            style={styles.productImage}
            source={BasketballImage}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.productContents}>
          <Text style={styles.productName}>농구공</Text>
          <Text style={styles.productPrice}>50000</Text>
        </View>
        <View style={styles.productFooter}>
          <View style={styles.productSeller}>
            <Image style={styles.productAvator} source={Avartor} />
            <Text style={styles.productSellerName}>그랩</Text>
          </View>
          <Text style={styles.productDate}>3분 전</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: 32,
  },
  productCard: {
    width: 320,
    borderColor: "rgb(230,230,230)",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "white",
  },
  productImage: {
    width: "100%",
    height: 210,
  },
  productContents: {
    padding: 10,
  },
  productSeller: {
    flexDirection: "row",
    alignItems: "center",
  },
  productAvator: {
    width: 20,
    height: 20,
  },
  productFooter: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
  },
  productName: {
    fontSize: 17,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 17,
  },
  productSellerName: {
    fontSize: 17,
  },
  productDate: { fontSize: 17 },
});
