import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

const formValidationSchema = yup.object({
    name: yup.string().required("Please enter a Name"),
    email: yup.string().required("Please provide email address"),
    subject: yup.string().required("please enter a role")
});

const Form = ({ onSubmit, type, teacherDetails }) => {
    const { handleSubmit, handleChange, errors, handleBlur, touched, values } =
        useFormik({
            initialValues: {
                name: teacherDetails.name,
                email: teacherDetails.email,
                image: teacherDetails.image,
                subject: teacherDetails.subject,

            },
            enableReinitialize: `${type === "Add" ? false : true}`,
            validationSchema: formValidationSchema,
            onSubmit: (newUser) => {
                console.log('onclicked', newUser)
                addNewUser(newUser);
            },
        });
    const navigate = useNavigate()
    const addNewUser = async (newUser) => {

        try {
            const resposne = await fetch(
                `${API}`,
                {
                    method: "POST",
                    body: JSON.stringify(newUser),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await resposne.json();
            console.log(data);
            //setUser([...user, data])
            navigate("/dash")

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        {type === "Add" ? "Add" : "Edit"} Teacher Details
                    </Typography>{/*Use typography to present your design and content as clearly and efficiently as possible.*/}
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>{/*The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.*/}
                                <TextField
                                    error={errors.name && touched.name ? true : false}
                                    helperText={errors.name && touched.name ? errors.name : ""}
                                    onBlur={handleBlur}
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    error={errors.email && touched.email ? true : false}
                                    helperText={errors.email && touched.email ? errors.email : ""}
                                    onChange={handleChange}
                                    value={values.email}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    onBlur={handleBlur}
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={errors.image && touched.image ? true : false}
                                    helperText={errors.image && touched.image ? errors.image : ""}
                                    onChange={handleChange}
                                    value={values.image}
                                    fullWidth
                                    id="image"
                                    label="Profile Picture"
                                    onBlur={handleBlur}
                                    name="image"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    error={errors.subject && touched.subject ? true : false}
                                    helperText={errors.subject && touched.subject ? errors.subject : ""}
                                    onChange={handleChange}
                                    value={values.subject}
                                    fullWidth
                                    id="sub"
                                    label="staff"
                                    onBlur={handleBlur}
                                    name="subject"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {type === "Add" ? "Add" : "Edit"}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Form;