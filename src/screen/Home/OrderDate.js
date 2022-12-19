import React, { useContext, useState } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Contextprv } from "../../contexts/Contextprv";
import { Card } from "@rneui/themed";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { AntDesign } from "expo-vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";

export default function OrderDate(props) {
  const navigation = useNavigation();
  var now = moment().format();
  const {
    myUser,
    myOutlet,
    setMyDate,
    myDate,
    myTitle,
    timeRes,
    setTimeres,
    rpeople,
    setPeople,
  } = useContext(Contextprv);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, SetShow] = useState(false);
  const [text, setText] = useState("Please Choose Date Reservation");
  const [showAlert, setShowAlert] = useState(false);

  function AlertShow() {
    if (myDate && rpeople === "") {
      setShowAlert(true);
    } else {
      navigation.navigate("foodmenu");
    }
  }
  const AlertHide = () => {
    setShowAlert(false);
  };
  function Onchange(event, selectedDate) {
    const currentDate = selectedDate || date;
    SetShow(Platform.OS === " ios");
    setDate(currentDate);

    let tempdate = new Date(currentDate);
    let dday = tempdate.getDay();
    let fdate =
      tempdate.getDate() +
      "/" +
      (tempdate.getMonth() + 1) +
      "/" +
      tempdate.getFullYear();
    let ftime = tempdate.getHours() + ":" + tempdate.getMinutes();
    setText(dday);
    setMyDate(fdate);
    setTimeres(ftime);
  }

  function ShowMode(currentMode) {
    SetShow(true);
    setMode(currentMode);
  }
  function addPeople(count) {
    setPeople(count);
  }

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <View style={styles.row}>
          <Image source={myOutlet} style={styles.logo} />
          <Text style={styles.title}>{myTitle}</Text>
        </View>
      </Card>

      <Text style={styles.txtOrder}>Choose Order Date</Text>
      {/* <Text style={styles.txtOrder}>{text}</Text> */}

      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => ShowMode("date")}
      >
        <Text style={styles.appButtonText}>Date Reservation</Text>
      </TouchableOpacity>
      {myDate && (
        <Card containerStyle={styles.card}>
          <Text style={styles.txtUnversal}>Date Reservation For : </Text>
          <Text style={styles.txtUnversal}>{myDate}</Text>
        </Card>
      )}
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => ShowMode("time")}
      >
        <Text style={styles.appButtonText}>Time Reservation</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={Onchange}
        />
      )}
      {timeRes && (
        <Card containerStyle={styles.card}>
          <Text style={styles.txtUnversal}>Time Reservation For : </Text>
          <Text style={styles.txtUnversal}>{timeRes}</Text>
        </Card>
      )}

      <Card containerStyle={styles.cardQty}>
        <TextInput
          keyboardType="numeric"
          style={styles.txtinput}
          onChangeText={(e) => addPeople(e)}
        />
        {rpeople ? (
          <Text style={styles.txtUnversal2}>
            Reservation for: {rpeople} People
          </Text>
        ) : (
          <Text style={styles.txtUnversal2}>Reservation for: ? People</Text>
        )}
      </Card>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => AlertShow()}
        >
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      {AlertShow && (
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Choose Reservation"
          message="Please Choose Date & Time Reservation"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="understood"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            AlertHide();
          }}
          onConfirmPressed={() => {
            AlertHide();
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  txtOrder: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "300",
    letterSpacing: 3,
    marginTop: 10,
  },
  txtUnversal: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "300",
    letterSpacing: 3,
    color: "white",
  },
  txtUnversal2: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "300",
    letterSpacing: 3,
    marginTop: 15,
    margin: 10,
  },
  logo: {
    width: 100,
    height: 80,
    justifyContent: "flex-start",
    borderRadius: 10,
  },
  card: {
    width: "80%",
    borderRadius: 10,
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  title: {
    justifyContent: "center",
    alignSelf: "center",
    left: 20,
    fontSize: 13,
    color: "white",
    fontWeight: "200",
    letterSpacing: 3,
  },
  appButtonContainer: {
    marginTop: 10,
    marginBottom: 5,
    elevation: 8,
    backgroundColor: "#D1B000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  cardQty: {
    borderRadius: 10,
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
  },
  qty: {
    flexDirection: "row",
  },
  txtqty: {
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "300",
  },
  txtinput: {
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  cardBottom: {
    borderRadius: 10,
  },
});
