import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Contextprv } from "../../contexts/Contextprv";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";

export default function OrderDate(props) {
  var now = moment().format();
  const { myUser, myOutlet, setMyDate,myDate } = useContext(Contextprv);
  let newTime = new Date();
  let tomorrow = new Date();
  tomorrow = moment(tomorrow).add(5, "day").format("YYYY-MM-DD");
  let  month = moment(tomorrow).add(1, 'month').format("YYYY-MM-DD");
  const [mydate, setDate] = useState(newTime);
  const [maxDate, setmaxDate] = useState(month);
  // const Token = props.route.params.myToken;
  return (
    <View style={styles.container}>
      <Text style={styles.txtOrder}>Choose Order Date</Text>
      <Calendar
        initialDate={mydate}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={mydate}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={maxDate}
        onDayPress={day => {
            console.log('selected day', day);
            setMyDate(day.dateString)
          }}
      />
      <Text>{myDate}</Text>
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
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 20,
  },
});
