import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { API } from "../api/api";
import TeacherCard from "./TeacherCard ";

const Dashboard = () => {
    const [teacher, setTeacher] = useState([]);

    function getTeachers() {
        fetch(`${API}`, {
            method: "GET",
        }).then((res) => res.json().then((data) => setTeacher(data)));
    }
    useEffect(() => {
        getTeachers();
    }, []);

    function deleteTeacher(id) {
        fetch(`${API}/${id}`, {
            method: "DELETE",
        }).then(() => getTeachers());
    }

    return (
        <Container className="container" minwidth="sm">
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 12, md: 12 }}
                >
                    {teacher.map((teacher) => {
                        return (
                            <Grid key={teacher.id} item xs={3} sm={12} md={3}>
                                <TeacherCard
                                    deleteTeacher={deleteTeacher}
                                    data={teacher}
                                    id={teacher.id}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Container>
    );
};

export default Dashboard;