import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import BasicTable from "./marksTable";
import { API } from "../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ViewMark = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState([]);
    useEffect(() => {
        fetch(`${API}/${id}`)
            .then((res) => res.json())
            .then((data) => setStudent(data));
    }, [id]);
    const marks = {
        tamil: student.tamil,
        eng: student.eng,
        sci: student.sci,
        soc: student.soc,
        math: student.math,
    };
    const totalMark = marks
        ? Object.values(marks).reduce((acc, sum) => acc + sum, 0)
        : 0;

    if (!student.name)
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        );
    return (
        <Card
            variant="outlined"
            className="view"
            sx={{ maxWidth: 600, maxHeight: 700 }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={student.image}
                    alt={student.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        {student.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Contact : {student.email}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="dark">
                        Total Marks : {totalMark} <sub>/500</sub>
                    </Typography>
                    <BasicTable marks={marks} />
                </CardContent>
            </CardActionArea>
            <CardActions>

            </CardActions>
        </Card>
    );
};

export default ViewMark;