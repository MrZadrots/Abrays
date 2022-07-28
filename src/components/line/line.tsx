import React from "react";
import { dataType } from "../../types/types";
import './line.css'

interface LineItemProps{
    line:dataType;
}
export const Line:React.FC<LineItemProps> = ({line}) =>{
    return(
        <tr>
            <td><span className="lineText">{line.id.toLocaleString()}</span></td>
            <td><span className="lineText">{line.title}</span></td>
            <td><span className="lineText">{line.body}</span></td>
        </tr>
    )
}

