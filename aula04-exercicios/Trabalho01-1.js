import React from "react";
import { StyleSheet, View, StatusBar, Button } from "react-native";

const Trabalho01 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.statusbar}>
        <StatusBar></StatusBar>
      </View>
      <View style={styles.conatiner1}>
        <View style={styles.box1} />
        <View style={styles.retangulo} />
      </View>
      <View style={styles.container2}>
        <View style={styles.box3} />
        <View style={styles.box2} />
      </View>
      <View style={styles.container1}>
        <View style={styles.box4} />
      </View>
      <View style={styles.container3}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>
      <View style={styles.container3}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>
      <View style={styles.footer}>
        <StatusBar></StatusBar>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    backgroundColor: "#50E3C2",
    height: 25,
  },
  conatiner1: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 40,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  container3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "#F5A623",
  },
  retangulo: {
    height: 30,
    width: 140,
    backgroundColor: "#F5A623",
    marginTop: 20,
  },
  box2: {
    width: "100%",
    height: 78,
    backgroundColor: "#5A90E2",
  },
  box3: {
    width: "100%",
    height: 78,
    backgroundColor: "#9013FE",
  },
  box4: {
    width: "100%",
    height: 13,
    backgroundColor: "#50E3C2",
  },
  footer: {
    backgroundColor: "#5A90E2",
    height: 60,
  },
});

export default Trabalho01;
