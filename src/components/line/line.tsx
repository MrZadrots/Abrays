import React from "react";
import { dataType } from "../../types/types";


interface LineItemProps{
    line:dataType;
}
export const Line:React.FC<LineItemProps> = ({line}) =>{
    console.log(line)
    return(
        <tr>
            <td>{line.id.toLocaleString()}</td>
            <td>{line.title}</td>
            <td>{line.body}</td>
        </tr>
    )
}

