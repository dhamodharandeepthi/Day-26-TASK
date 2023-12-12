import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../api/api";
import Form from "./TeacherForm";

const TeacherEdit = () => {
    const { id } = useParams();

    const [teacherDetails, setTeacherDetails] = useState({
        name: "",
        email: "",
        image: "",
        subject: "",
    });

    useEffect(() => {
        fetch(`${API}/${id}`)
            .then((response) => response.json())
            .then((data) =>
                setTeacherDetails({
                    name: data.name,
                    email: data.email,
                    image: data.image,
                    subject: data.subject
                })
            );
    }, []);
    const navigate = useNavigate();
    const onEdit = (updated) => {
        fetch(`${API}/${id}`, {
            method: "PUT",
            body: JSON.stringify(updated),
            headers: { "Content-Type": "application/json" },
        }).then(() => navigate("/dash"));
    };
    return (
        <div>
            <Form type={"Edit"} teacherDetails={teacherDetails} onSubmit={onEdit} />
        </div>
    );
};

export default TeacherEdit;