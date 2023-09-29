import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Card from '../../components/Card'
import styles from "./ListPage.style";
import { useData } from '../../context/userContext';

const ListPage = () => {
  const { user } = useData();
  const [store, setStore] = useState(null);
  const [search, setSearch] = useState(null);

  function HandlePress() {

  }
  useEffect(() => {
    async function FetchData() {
      await fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((res) => setStore(res));
    }
    FetchData();
  }, [])

  function HandleChange(e) {
    if (e.length >= 1 && store) {
      let filtered = store.filter((item) => item.title.toLowerCase().includes(e.toLowerCase()))
      setSearch(filtered);
    }
    else if (e.length < 1) {
      setSearch(null);
    }
  }
  return (
    <View style={styles.ListPage}>
      {user &&
        <View style={styles.userbox}>
          <Text style={styles.userstatus}>
            Username: {user?.username}
          </Text>
          user && <TouchableOpacity onPress={() => HandlePress()} style={styles.button}>
            <Text >Log Out</Text>
          </TouchableOpacity>
        </View>
      }
      <View style={styles.searchArea}>
        <Text style={styles.header}>
          First App Market
        </Text>

        <Text style={styles.title}>
          Find Your Maches!!
        </Text>
        <TextInput
          style={styles.input}
          blurOnSubmit={true}
          inputMode="search"
          onChangeText={(e) => HandleChange(e)}
        // value={text}
        />
      </View>
      <ScrollView style={styles.scroll}>

        {store == null ? <Text>Loading...</Text> :
          search?.length > 0 && search != null &&
          search?.map((item) => (
            <Card key={item.id} product={item} />
          )) ||
          search == null &&
          store?.map((item) => (
            <Card key={item.id} product={item} />
          )) ||
          search.length == 0 && <Text>No Matches Found!</Text>
        }
        <Text style={styles.title}>This application made by omerceltikk</Text>
      </ScrollView>
    </View>
  )
}

export default ListPage