import React from "react";
import AppBar from "@mui/material/AppBar";
import AddMark from "./AddMark";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import "../App.css"
const Header = ({ mode, setMode }) => {
    const navigate = useNavigate();
    return (
        <div className="top">
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: 'lightblue' }}>
                    <Button onClick={() => navigate("/")} style={{ color: 'black' }}>
                        <HomeIcon />Home
                    </Button>
                    <Button onClick={() => navigate("/add")} style={{ color: 'black' }}>
                        Add Student
                    </Button>
                    <Button onClick={() => navigate("/dash")} style={{ color: 'black' }}>
                        Teacher-Dashboard
                    </Button>
                    <Button onClick={() => navigate("/add/teacher")} style={{ color: 'black' }}>
                        Add Teacher
                    </Button>
                    <Button
                        style={{ marginLeft: "auto" }}
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        color="inherit"
                    >
                        {mode === "light" ? "dark" : "light"} Theme
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;


export function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}