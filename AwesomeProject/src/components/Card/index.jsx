import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({product}) => {
  return (
    <View style={styles.Cardstyle}>
      <Text>
        {product.id}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  Cardstyle:{
    margin: 20,
    padding: 20,
    
  }
})
export default Card