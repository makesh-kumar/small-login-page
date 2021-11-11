import React from "react";

function ErrorText(props) {
  return (
    <div style={{ color: "red" }}>
      <p style={{ margin: 0, paddingLeft: "35px", maxWidth: "280px" }}>
        *{props.children}
      </p>
    </div>
  );
}

export default ErrorText;
