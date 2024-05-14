import { useState } from "react";
import Admin from "./components/admin/Admin";
import Modal from "./components/modal/Modal";
import User from "./components/user/User";
import ModalButton from "./components/modalButton/ModalButton";
import Search from "./components/search/search";

function App() {


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





  if (guest === "user" || guest === "admin") {
    return (
      <>
        {guest === "admin" ? <Admin post={post} setPost={setPost} /> : ""}
        {guest === "user" ? (<Search post={post} textValue={textValue} setTextValue={setTextValue}/>) : ("")}
        <ModalButton guest={guest} setGuest={setGuest} />
        <User post={post} setPost={setPost} textValue={textValue} guest={guest} />
      </>
    );
  } else {
    return <Modal guest={guest} setGuest={setGuest} />;
  }
}

export default App;
