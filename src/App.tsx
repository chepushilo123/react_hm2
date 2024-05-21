import { useState, createContext } from "react";
import Admin from "./components/admin/Admin";
import Modal from "./components/modal/Modal";
import User from "./components/user/User";
import ModalButton from "./components/modalButton/ModalButton";
import Search from "./components/search/search";
import Statistics from "./components/statistics/Statistic";




export const Context = createContext(null);


function App() {


  
  const [move, setMove] = useState(0);
  const [guest, setGuest] = useState("admin");
  const [textValue, setTextValue] = useState("");

  const [post, setPost] = useState<any[]>([
    {
      title: "qwerty",
      text: "Lorem ipsum dolor sit amet.",
      key: 2003,
    },
    {
      title: "sanya",
      text: "Lorem ipsum dolor sit ametsdgwergergtv erwrgvtrgr3t g.",
      key: 204,
    },
    {
      title: "petya",
      text: "rgbberb wefv rffvw wvrv wrv wvr rvgv rv, erfg ewvewr, er erfw ",
      key: 207,
    },
    {
      title: "senya",
      text: "Lorem rexf eiwrf iefr efefe.",
      key: 233,
    },
  ]);



  const value: any = {
    post,
    textValue,
    move,
    setMove
  };

  if (guest === "user" || guest === "admin") {
    return (
      <>
        <Context.Provider value={value}>
          {guest === "admin" ? <Admin setPost={setPost} /> : ""}
          {guest === "user" ? (<Search setTextValue={setTextValue}/>) : ("")}
          <ModalButton guest={guest} setGuest={setGuest} />
          <User setPost={setPost} guest={guest} />
          <Statistics />
        </Context.Provider>
      </>
    );
  } else {
    return <Modal guest={guest} setGuest={setGuest} />;
  }
}

export default App;
