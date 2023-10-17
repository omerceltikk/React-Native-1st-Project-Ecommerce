import React from "react";
import {View } from "react-native";
import ListPage from "../ListPage";
import MainPage from "../MainPage";
import { useData } from "../../context/userContext";

const General = () => {
  const {user} = useData();
  return (
    <View>
      <MainPage />
      {/* <ListPage/> */}
    </View>
  )
}

export default General