import React, { useState } from "react";
import Home from "./componenets/Home";
import Header from "./componenets/Header";
import NotFound from "./componenets/NotFound";
import AddMark from "./componenets/AddMark";
import EditMark from "./componenets/EditMark";
import ViewMark from "./componenets/ViewMark";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./App.css";
import TeacherDetails from "./componenets/TeacherDetails";
import Dashboard from "./componenets/Dash";
import TeacherEdit from "./componenets/TeacherEdit";
import TeacherView from "./componenets/TeacherView";

const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={3} style={{ minHeight: "100vh" }}>
          <Header mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMark />} />
            <Route path="/student/edit/:id" element={<EditMark />} />
            <Route path="/student/view/:id" element={<ViewMark />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/add/teacher" element={<TeacherDetails />} />
            <Route path="/teacher/edit/:id" element={<TeacherEdit />} />
            <Route path="/teacher/view/:id" element={<TeacherView />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;