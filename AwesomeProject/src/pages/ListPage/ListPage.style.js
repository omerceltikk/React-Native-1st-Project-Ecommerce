import { StyleSheet } from "react-native"

export default StyleSheet.create({
  ListPage: {
    backgroundColor: "#060047"
  },
  searchArea: {
    margin: 20,

  },
  title: {
    fontWeight: "600",
    paddingLeft: 10,
    fontSize: 15,
    color: "#B9B4C7",
    margin: 10,
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    paddingLeft: 10,
    color: "#E74646",
    margin: 10

  },
  input: {
    borderRadius: 100,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderColor: "#e7e7e7",
    borderWidth: 1
  },
  scroll:{
    marginBottom:300
  },
  userstatus:{
    color: "#B9B4C7",
    fontWeight: "600",
    padding:10,
    alignSelf:"flex-end"
    
  },
  userbox:{
    flexDirection:"column-reverse",
    alignSelf:"flex-end",
    padding:10

  },
  button:{
    padding:10,
    paddingHorizontal:20,
    // width:"50%",
    textAlign:"center",
    alignSelf:"center",
    backgroundColor:"#E74646",
    borderRadius:10,
    color:"#fff"
    
  },
})