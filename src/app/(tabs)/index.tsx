import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";
import events from "../../../assets/data/events";

const event = events[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.price}>${event.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: 400,
    aspectRatio: 1,
  },
});
