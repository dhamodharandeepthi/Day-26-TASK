import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";
import Form from "./TeacherForm";



const TeacherDetails = () => {
    const [teacherDetails, setTeacherDetails] = useState({
        name: "",
        email: "",
        image: "",
        subject: "",
    });

    const navigate = useNavigate();
    const addNew = async (newUser) => {

        try {
            const response = await fetch(
                `${API}`,
                {
                    method: "POST",
                    body: JSON.stringify(newUser),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            console.log(data);
            setUser([...user, data])


            navigate("/dash")
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Form type={"Add"} teacherDetails={teacherDetails} onSubmit={addNew} />
        </div>
    );
};

export default TeacherDetails;