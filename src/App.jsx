// import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

// import Header from "./components/Header";
function App() {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const { uid, displayName, email } = user;
  //       // console.log(user);
  //       dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
  //       navigate("/browse");

  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });
  // }, []);
  return (
    <div>
      <Provider store={appStore}>
        <Body />{" "}
      </Provider>
    </div>
  );
}

export default App;
