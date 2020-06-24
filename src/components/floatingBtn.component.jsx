import React from 'react'
import {withRouter} from "react-router-dom";


function FloatingButton(props) {

    const styles = {
        position : "fixed",
        right : "5rem",
        bottom : "5rem ",
        width : "10rem",
        height : "10rem",
        backgroundColor : "#13C4A3",
        display : "flex",
        "justifyContent" : "center",
        "alignItems" : "center",
        color : "#fff",
        fontSize : "2.5rem",
        borderRadius : "50%",
        fontFamily: "Bebas Neue",
        cursor : "pointer",
        lineHeight : "2.5rem",
        TextAlign : "center",
        zIndex : "1200"
    }

    return (
        <div style={styles} onClick={()=>props.history.push("/menu")}>
                Order <br/> Now !
        </div>
    )
}

export default withRouter(FloatingButton);
