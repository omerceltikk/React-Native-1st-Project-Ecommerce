import React from 'react'
import styles from "./Card.style"
import { Text, View ,Image, Dimensions} from 'react-native'

// const win = Dimensions.get('window');
const Card = ({product}) => {

  return (
    <View style={styles.cardStyle}>
     <Image
     src={product.image}
     style={styles.imageStyle}
     />
     <View style={styles.cardText}>
      <Text style={styles.title}>
        {product.title}
      </Text>
      <Text style={styles.description}>
        {product.description.length > 100 ? product.description.slice(0,100) : product.description}...
      </Text>
      <Text style={styles.price}>
        {product.price} $
      </Text>
      </View> 
    </View>
  )
}
export default Card