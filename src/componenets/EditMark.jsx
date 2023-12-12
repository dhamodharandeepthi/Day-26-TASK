import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";
import { API } from "../api/api";

const EditMark = () => {
    const { id } = useParams();

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

    useEffect(() => {
        fetch(`${API}/${id}`)
            .then((response) => response.json())
            .then((data) =>
                setStudentDetails({
                    name: data.name,
                    email: data.email,
                    image: data.image,
                    tamil: data.tamil,
                    eng: data.eng,
                    sci: data.sci,
                    soc: data.soc,
                    math: data.math,
                })
            );
    }, []);
    const navigate = useNavigate();
    const onEdit = (updatedData) => {
        fetch(`${API}/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedData),
            headers: { "Content-Type": "application/json" },
        }).then(() => navigate("/"));
    };
    return (
        <div>
            <Form type={"Edit"} studentDetails={studentDetails} onSubmit={onEdit} />
        </div>
    );
};

export default EditMark;