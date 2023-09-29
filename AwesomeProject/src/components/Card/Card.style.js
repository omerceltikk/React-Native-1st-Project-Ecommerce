import { StyleSheet } from "react-native"

export default StyleSheet.create({
  cardStyle:{
    marginHorizontal:20,
    marginVertical:10,
    padding: 10,
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"#ffffff",
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset:{width:30,height:30},
    overflow:"scroll"
  
  },
  imageStyle:{
    height:140,
    width:120,
    padding:10,
    margin:10
  },
  cardText:{
    flexDirection:"column",
    flex:1,
    padding:10,
    gap:10,
  
  },
  description:{
    fontStyle:"italic",
    fontWeight:"400",
    color:"#adadad"
  },
  title:{
    fontWeight:"700"
  },
  price:{
    color:"#8EACCD",
    marginTop:10,
    textAlign:"right",
    fontWeight:"700"
  }
})