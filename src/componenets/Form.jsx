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

const formValidationSchema = yup.object({
    name: yup.string().required("Please enter a Name"),
    email: yup.string().required("Please provide email address"),
    tamil: yup
        .number()
        .typeError("Must be number")
        .required("Please enter mark")
        .min(0)
        .max(100),
    eng: yup
        .number()
        .typeError("Must be number")
        .required("Please enter mark")
        .min(0)
        .max(100),
    sci: yup
        .number()
        .typeError("Must be number")
        .required("Please enter mark")
        .min(0)
        .max(100),
    soc: yup
        .number()
        .typeError("Must be number")
        .required("Please enter mark")
        .min(0)
        .max(100),
    math: yup
        .number()
        .typeError("Must be number")
        .required("Please enter mark")
        .min(0)
        .max(100),
});

const Form = ({ onSubmit, type, studentDetails }) => {
    const { handleSubmit, handleChange, errors, handleBlur, touched, values } =
        useFormik({
            initialValues: {
                name: studentDetails.name,
                email: studentDetails.email,
                image: studentDetails.image,
                tamil: studentDetails.tamil,
                eng: studentDetails.eng,
                sci: studentDetails.sci,
                soc: studentDetails.soc,
                math: studentDetails.math,
            },
            enableReinitialize: `${type === "Add" ? false : true}`,
            validationSchema: formValidationSchema,
            onSubmit: (values) => {
                let { tamil, eng, sci, soc, math } = values;
                tamil = +tamil;
                eng = +eng;
                sci = +sci;
                soc = +soc;
                math = +math;
                const data = { ...values, tamil, eng, sci, soc, math };
                // console.log(values);
                onSubmit(data);
            },
        });
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
                        {type === "Add" ? "Add" : "Edit"} Student Details
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
                                    error={errors.tamil && touched.tamil ? true : false}
                                    helperText={errors.tamil && touched.tamil ? errors.tamil : ""}
                                    onChange={handleChange}
                                    value={values.tamil}
                                    fullWidth
                                    id="tam"
                                    label="Tamil Mark"
                                    onBlur={handleBlur}
                                    name="tamil"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    error={errors.eng && touched.eng ? true : false}
                                    helperText={errors.eng && touched.eng ? errors.eng : ""}
                                    onChange={handleChange}
                                    value={values.eng}
                                    fullWidth
                                    id="eng"
                                    label="English Mark"
                                    onBlur={handleBlur}
                                    name="eng"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    error={errors.sci && touched.sci ? true : false}
                                    helperText={errors.sci && touched.sci ? errors.sci : ""}
                                    onChange={handleChange}
                                    value={values.sci}
                                    fullWidth
                                    id="sci"
                                    label="Science Mark"
                                    onBlur={handleBlur}
                                    name="sci"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={errors.soc && touched.soc ? true : false}
                                    helperText={errors.soc && touched.soc ? errors.soc : ""}
                                    onChange={handleChange}
                                    value={values.soc}
                                    fullWidth
                                    id="soc"
                                    label="Social Mark"
                                    onBlur={handleBlur}
                                    name="soc"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={errors.math && touched.math ? true : false}
                                    helperText={errors.math && touched.math ? errors.math : ""}
                                    onChange={handleChange}
                                    value={values.math}
                                    fullWidth
                                    id="math"
                                    label="Math Mark"
                                    onBlur={handleBlur}
                                    name="math"
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