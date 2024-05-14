export default function User(props: any) {


  
  if (props.textValue === "") {
    return (
      <div>
        {props.post.map((index: any) => {
          return (
            <div className="post" key={index.key}>
              <h1>{index.title}</h1>
              <h4>{index.text}</h4>
              <p>{index.key}</p>
              {
              (props.guest === "admin") ? <button onClick={() => {props.setPost(props.post.filter((a: any) => a.key !== index.key))}} className="post_button">x</button> : ""
              }
            </div>
          );
        })}
      </div>
    );
  }

  if (props.textValue !== "") {
    return (
      <div key={props.post.key}>
        {props.post.map((index: any) => {
          if (index.text.toLowerCase().includes(props.textValue)) {
            console.log(index);
            return (
              <div className="post">
                <h1>{index.title}</h1>
                <h4>{index.text}</h4>
                <p>{index.key}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
