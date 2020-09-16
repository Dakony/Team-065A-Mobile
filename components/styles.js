const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  home: {
    flex: 1,
    backgroundColor: "#009688"
  },

  titlespalsh: {
    textAlign: "center",
    fontSize: 20,
    color: "#3E4993"
  },
  appButtonContainer: {
    width: 300,
    height: 50,
    marginTop: 50,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#009688"
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  },

  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  sigincontainer: {
    flex: 1,
    backgroundColor: "#009387"
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a"
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14
  },
  button: {
    alignItems: "center",
    marginTop: 50
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#009688"
  },
  signUp: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  textSign: {
    fontSize: 18,
    fontWeight: "bold"
  }
};
export default styles;
