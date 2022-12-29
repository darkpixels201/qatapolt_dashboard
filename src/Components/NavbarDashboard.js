import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const NavbarDashboard = () => {
  const menu = [
    {
      id: 1,
      menuItem: { name: "Products", path: "" },
      subMenu: [
        { name: "Products", path: "/dashboard/products" },
        { name: "Remove Products", path: "" },
      ],
    },
    {
      id: 2,
      menuItem: { name: "Order", path: "/dashboard/order" },
    },
    {
      id: 3,
      menuItem: { name: "Stock", path: "/dashboard/stock" },
    },
  ];

  return (
    <div>
      <Sidebar>
        <Menu>
          {menu.map((item, index) => (
            <div key={index}>
              {item.subMenu ? (
                <SubMenu label={item.menuItem.name}>
                  {item.subMenu?.map((s, i) => (
                    <MenuItem routerLink={<Link to={s.path} />} key={i}>
                      {s.name}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem routerLink={<Link to={item.menuItem.path} />}>
                  {item.menuItem.name}
                </MenuItem>
              )}
            </div>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default NavbarDashboard;
