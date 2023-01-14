import React from "react";
import { colors } from "../../utils/Colors";
import '../../Assets/css/style.css'

const CustomSearchFilter = (props) => {
  return (
    <div>
      <div
        className="form-floating h-5 mt-1 "
        style={{
          display: "flex",
          justifyContent: "center",
          width: 300,
          alignSelf: "center",
            // margintop: window.innerWidth <= 775 ? "100" : "100",
        }}
      >
        <input
          style={{
            height: 4,
            width: window.innerWidth <= 775 ? "100%" : "80%",
            // width: 500,
            padding: 20,
            borderRadius: 50,
            border:"solid",
            borderWidth:1,
            borderColor:colors.grey,
            outline:"none",
          }}
          className="inputborder"
          type="text"
          id="floatingInput"
          placeholder={props.placeholder}
          onChange={props.onChange}
          // onChange={(txt) => {
          //   let data = tableExample.filter((item) =>
          //     item.user.name.includes(txt) ? item : ""
          //   );
          //   setFilterList(data);
          //   console.log("Fltered Data",data);
          // }}
        />
        {/* <label>Search</label> */}
      </div>
    </div>
  );
};

export default CustomSearchFilter;
