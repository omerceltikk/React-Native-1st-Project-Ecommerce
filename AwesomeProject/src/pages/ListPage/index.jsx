import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Card from '../../components/Card'

const ListPage = () => {
  const [store, setStore] = useState(null);
  async function FetchData(){
    await fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((res) => setStore(res));
    
  }
  FetchData();
  return (
    <View>
      {store == null ? <Text>Loading...</Text> : 
      store?.map((item) => (
        <Card key={item.id} product={item}/>
        ))
      }
      
    </View>
  )
}

export default ListPage