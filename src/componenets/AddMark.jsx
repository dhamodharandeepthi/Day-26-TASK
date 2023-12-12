import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";
import Form from "./Form";


const AddMark = () => {
    const [studentDetails, setStudentDetails] = useState({
        name: "",
        email: "",
        image: "",
        tamil: "",
        eng: "",
        sci: "",
        soc: "",
        math: "",
    });

    const navigate = useNavigate();
    const addNewUser = async (newUser) => {

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
            //setUser([...user, data])

            navigate("/")
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Form type={"Add"} studentDetails={studentDetails} onSubmit={addNewUser} />
        </div>
    );
};

export default AddMark;