import React from "react";

// insert a modifier class using props and ternary operator
function Container(props) {
  return (
    <>
      <div className=
        {  
        "container py-md-5 " + (props.wide ? '' : 'container--narrow')
        }>
          {props.children}
      </div>
    </>
  );
}

export default Container