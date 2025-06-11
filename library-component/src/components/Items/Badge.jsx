import React from "react"; 
import "../../Styles/Badge.css"


export default function Badge({label, color="primary"})  {
    return <span className={`badge badge-${color}`}>{label} </span>
    
}