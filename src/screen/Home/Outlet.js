import React, {useContext} from "react";
import { Contextprv } from "../../contexts/Contextprv";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RestoScreen from "../../component/Outlet/RestoScreen";
import { useNavigation } from "@react-navigation/native";

export default function Outlet() {
  const navigation = useNavigation();
  const {myOutlet, setMyOutlet} = useContext(Contextprv)
  const slides = {
    den: require("../../../assets/Images/Outles/DEN/den.jpg"),
    pier: require("../../../assets/Images/Outles/PIER/pier1.jpg"),
    wharf: require("../../../assets/Images/Outles/WHARF/wharf2.jpg"),
  };
  const slidetxt = {
    den: "Somerset Grand Citra Jakarta, Jl. Prof. DR. Satrio Setiabudi No.Kav. 1, RT.5/RW.2, Kuningan, Karet Kuningan, Kuningan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940",
    pier: "Pondok Putri Duyung 7 Taman Impian Jaya Ancol, Jaln Lodan Timur No. 7, Ancol, Pademangan, RW.10, Ancol, Kec. Pademangan, Kota Jakarta Utara, Daerah Khusus Ibukota Jakarta 14430",
    wharf:
      "Taman Impian Jaya Ancol, Pantai Karnaval, Ancol Beach City Mall Lantai 1, Ancol,Pademangan, RW.10, Ancol, Kec. Pademangan, Daerah Khusus Ibukota Jakarta 14430",
  };
  return (
    <View style={Styles.container}>
      <ScrollView>
        <RestoScreen
          onPress={() =>
            navigation.navigate("Reserve", {
              imageData: slides.den,
              desc: slidetxt.den,
              title: "DEN Of Kalaha",
              dens: setMyOutlet('DEN Of Kalaha')
            })
          }
          buttonTitle="DEN Of Kalaha"
          OutletImage={slides.den}
        />
        <RestoScreen
          onPress={() =>
            navigation.navigate("Reserve", {
              imageData: slides.pier,
              desc: slidetxt.pier,
              title: "PIER By Kalaha",
              dens: setMyOutlet('PIER By Kalaha')
            })
          }
          buttonTitle="PIER By Kalaha"
          OutletImage={slides.pier}
        />
        <RestoScreen
          onPress={() =>
            navigation.navigate("Reserve", {
              imageData: slides.wharf,
              desc: slidetxt.den,
              title: "Kalaha@TheWHARF",
              dens: setMyOutlet('Kalaha@TheWHARF')
            })
          }
          buttonTitle="Kalaha@TheWHARF"
          OutletImage={slides.wharf}
        />
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131312",
  },
});
