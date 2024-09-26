import React from "react";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ padding: 60 }}>{children}</div>
    </div>
  );
}

export default Layout;
