import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'
import Card from '../../components/Card'

const ListPage = () => {
  const [store, setStore] = useState(null);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    async function FetchData() {
      await fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((res) => setStore(res));
    }
    FetchData();
  }, [])

  function HandleChange(e){
   if(e.length >= 1 && store){
   let filtered = store.filter((item) => item.title.toLowerCase().includes(e.toLowerCase()))
   setSearch(filtered);
   }
   else if(e.length < 1){
    setSearch(null);
   }
  }
  return (
    <View style={styles.ListPage}>
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

    </View>
  )
}
const styles = StyleSheet.create({
  ListPage: {
    
    backgroundColor: "#fdf5eb"
  },
  searchArea:{
    margin:20,
    
  },
  title:{
    fontWeight:"600",
    paddingLeft:10,
    fontSize:15,
    color:"#B9B4C7",
    margin:10,
  },
  header:{
    fontWeight:"800",
    fontSize:30,
    paddingLeft:10,
    color:"#5C5470",
    margin:10

  },
  input:{
    borderRadius:100,
    paddingHorizontal:20,
    backgroundColor:"#fff",
    borderColor:"#e7e7e7",
    borderWidth:1
  },
})
export default ListPage