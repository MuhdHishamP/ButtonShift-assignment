import React from "react";
import { Typography, CssBaseline } from "@mui/material";
import Layout from "./layout/Layout";
import Kanban from "./components/Kanban/Kanban";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Typography variant="h4" sx={{ fontWeight: "bold"}}>
          Work Board
        </Typography>
        <Kanban />
      </Layout>
    </>
  );
}

export default App;
