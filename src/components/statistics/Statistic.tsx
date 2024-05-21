import { useContext } from "react";
import { Context } from "../../App";

export default function Statistics() {

 
    const value: any = useContext(Context)

    return(
        <div className="statistic">
            <p className="def">Statistics: {value.move}</p>
        </div>
    );
}
