import { useContext } from "react";
import { Context } from "../../App";

export default function User(props: any) {

  const value: any = useContext(Context);

  const postFilter = () => {
    return value.post.filter((a: any) => a.title.includes(value.textValue))
  }

  const deletePost = (number: any) => {
    const post = [...value.post];
    post.map((item, index) => {
      if(number == item.key) {
        post.splice(index, 1)
      }
    return props.setPost([...post]);
    })
    value.setMove(value.move + 1)
  }

    return (
      <div>
        {postFilter().map((index: any) => {
          return (
            <div className="post" key={index.key}>
              <h1>{index.title}</h1>
              <h4>{index.text}</h4>
              <p>{index.key}</p>
              {
              (props.guest === "admin") ? <button onClick={() => {deletePost(index.key)}} className="post_button">x</button> : ""
              }
            </div>
          );
        })}
      </div>
    );
  
}
