import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { API } from "../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const TeacherView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState([]);
    useEffect(() => {
        fetch(`${API}/${id}`)
            .then((res) => res.json())
            .then((data) => setTeacher(data));
    }, [id]);

    if (!teacher.name)
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
                    image={teacher.image}
                    alt={teacher.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        {teacher.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Contact : {teacher.email}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary">
                        Subject : {teacher.subject}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>

            </CardActions>
        </Card>
    );
};

export default TeacherView;