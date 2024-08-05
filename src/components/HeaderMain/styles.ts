//stylesheet kullanalım ----- dimensions =(responseve görevinde) ekran buyudukce buyur ,ekran kuculdukce kucur.
import { StyleSheet, Dimensions } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  //mini header
  headerMain: {
    height: height * 0.064,
    justifyContent: "center",
    backgroundColor: "#F7D102",
  },
  headerOn: {
    height: height * 0.064,
    width: "75%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOnView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    borderLeftColor: "#F3F2FD",
    borderLeftWidth: 2,
    paddingLeft: 8,
  },
  headerTwo: {
    width: "35%",
    height: height * 0.064,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    // backgroundColor: "red",
  },
});
export default styles;
