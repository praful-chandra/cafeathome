import React from 'react';

const style  ={
fontFamily : 'Bahnscrift',
fontWeight : 'Bold',
textAlign :'center',
width: '100%',
border:'1px solid',
fontSize : "1.5rem",
backgroundColor : '#2C006E',
color:'white',
padding : "1rem 0"
}

function TopBarComponent() {
    return (
        <div style={style} >
            We at Café @ Home are committed to keeping you and your family healthy and safe. All safety measures are taken.
        </div>
    )
}

export default TopBarComponent
