import React from "react";
import { Text, Button, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AsyncSto() {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
        console.log(e.message);
    }
  };

  const storeObject = async (value) => {
    try {
      const jsonvalue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Json", jsonvalue);
    } catch (e) {
        console.log(e.message);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
        console.log(e.message);
    }
  };

  const getObject = async () => {
    try {
      const jsonvalue = await AsyncStorage.getItem("@storage_Json");
      return jsonvalue !== null
        ? console.log(JSON.parse(jsonvalue).name)
        : null;
    } catch (e) {
        console.log(e.message);
    }
  };
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem("@storage_Key");
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteJson = async () => {
    try {
      await AsyncStorage.removeItem("@storage_Json");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="SALVAR" onPress={() => storeData("SALVEIIIII")} />
      <Button title="SALVAR JSON" onPress={() => storeObject({ name: "Matheus Cruz", age: 25 })}/>
      <Button title="RECUPERAR DATA" onPress={() => getData()} />
      <Button title="RECUPERAR OBJETO" onPress={() => getObject()} />
      <Button title="DELETAR DATA" onPress={() => deleteData()} />
      <Button title="DELETAR JSON" onPress={() => deleteJson()} />
    </View>
  );
}

export default AsyncSto;
