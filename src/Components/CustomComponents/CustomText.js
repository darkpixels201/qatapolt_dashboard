import React from "react";

function CustomText({...props}) {
  return (
    <div onClick={props.onClick} disabled={!props.onClick} >
      <div>
        <div
          style={{
            color: props.color || "black",
            fontSize: props.fontSize || 20,
            margin: props.margin,
            marginTop: props.margin,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            alignSelf: props.alignSelf || "flex-start",
            fontWeight: props.fontWeight,
            fontStyle: props.fontStyle,
            textAlign: props.textAlign,
            fontFamily: props.fontFamily,
            textAlign: props.textAlign,
          }}
        >
          {props.title}
          {props.value}
        </div>
      </div>
    </div>
  );
}

export default CustomText;
