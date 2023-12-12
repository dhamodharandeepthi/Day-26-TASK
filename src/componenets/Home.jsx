import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { API } from "../api/api";

const Home = () => {
    const [students, setStudents] = useState([]);

    function getStudents() {
        fetch(`${API}`, {
            method: "GET",
        }).then((res) => res.json().then((data) => setStudents(data)));
    }
    useEffect(() => {
        getStudents();
    }, []);

    function deleteStudent(id) {
        fetch(`${API}/${id}`, {
            method: "DELETE",
        }).then(() => getStudents());
    }

    return (
        <Container className="container" minwidth="sm">
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 12, md: 12 }}
                >
                    {students.map((student) => {
                        return (
                            <Grid key={student.id} item xs={3} sm={12} md={3}>
                                <StudentCard
                                    deleteStudent={deleteStudent}
                                    data={student}
                                    id={student.id}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;