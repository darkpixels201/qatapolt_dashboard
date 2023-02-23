import React from "react";
import { colors } from "../../utils/Colors";

function CustomButton(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        // backgroundGradient: <LinearGradient colors={["#8E59E2", "#f3f3f3"]} />,
        color: props.color || colors.black ,
        display: props.display || "flex",
        width: props.width || "100%",
        height: props.height,
        borderColor: props.borderColor,
        borderRadius: props.borderRadius || 8,
        borderWidth: props.borderWidth,
        opacity: props.opacity,
        alignItems: props.alignItems || "center",
        alignSelf: props.alignSelf || "center",
        justifyContent: props.justifyContent || "center",
        marginTop: props.marginTop,
        shadowColor: props.shadowColor || "black",
        shadowRadius: props.shadowRadius || 8,
        //   alignItems: props.alignItems ||  "center",
        justifyContent: props.justifyContent || "center",
        marginBottom: props.marginBottom,
        marginHorizontal: props.marginHorizontal,
        paddingVertical: props.paddingVertical || 12,
        cursor: "pointer",
      }}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      <div style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {props.icon ? props.icon : null}

          <div style={{fontSize: 15 }}>{props.title}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomButton;
