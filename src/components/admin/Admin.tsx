import { useState, useContext } from "react";
import { Context } from "../../App";




export default function Admin(props: any) {
  const [name, setName] = useState("");
  const [description, setDescriptoin] = useState("");
  const [index, setIndex] = useState("");

  const value: any = useContext(Context);
  console.log(value)


  const handlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlerDescriptoin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptoin(event.target.value);
  };

  const handlerIndex = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(event.target.value);
  };

  const createPost = () => {
    let checkIndex = false;

    value.post.map((item: any) => {
      item.key == Number(index) && checkIndex != false ? (checkIndex = false) : (checkIndex = true);
    });

    if (checkIndex != false) {
      props.setPost([...value.post, { title: name, text: description, key: index },]);
      value.setMove(value.move + 1)
      checkIndex = false;
    }


  };

  return (
    <div className="window">
      <div className="create_text">
        <input onChange={handlerName} type="text" placeholder="Название" value={name} />
        <input onChange={handlerDescriptoin} type="text" placeholder="Описание" value={description} />
        <input onChange={handlerIndex} type="number" placeholder="ключ" value={index} />
      </div>
      <div className="create_post">
        <input onClick={createPost} type="submit" value="Создать" />
      </div>
    </div>
  );
}
