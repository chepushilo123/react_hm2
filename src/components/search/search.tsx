import { useContext } from "react";
import { Context } from "../../App";

export default function Search(props: any) {

  const value: any = useContext(Context);

  const checkTextValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setTextValue(event.target.value);
  };

  return (
    <div className="asd">
      <input onFocus={() => {value.setMove(value.move + 1)}} onChange={checkTextValue} className="input_search" type="text" placeholder="search" value={props.textValue} />
    </div>
  );
}
