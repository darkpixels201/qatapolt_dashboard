import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Nav = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Books",
      link: "/books",
    },
    {
      id: 3,
      name: "Dashboard",
      link: "/dashboard",
    },
  ];

  return (
    <div>
      <div
        style={{
          boxShadow: "none",
          display: "flex",
          flexDirection: "row",
          paddingTop: 0,
          paddingBottom: 0,
          // justifyContent: "flex-end",
          cursor: "pointer",
        }}
      >
        {Nav.map((item, index) => (
          <div
            className="bc"
            key={index}
            style={{
              paddingRight: 16,
              paddingLeft: 16,
              width: 63,
              height: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: item.active
                      ? "ClashDisplay-Semibold"
                      : "ClashDisplay-Regular",
                  }}
                >
                  <Link to={item.link}> {item.name} </Link>
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
