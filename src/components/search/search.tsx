import { useState } from "react";

export default function Search(props: any) {

  const checkTextValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setTextValue(event.target.value);
  };

  return (
    <div className="asd">
      <input onChange={checkTextValue} className="input_search" type="text" placeholder="search" value={props.textValue} />
    </div>
  );
}
