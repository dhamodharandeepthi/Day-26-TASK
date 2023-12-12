import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ data, id, deleteStudent }) => {
    const navigate = useNavigate();
    return (
        <Card className="style" variant="outlined" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={`${data.name}`}
                height="140"
                image={`${data.image}`}
            />
            <CardContent className="card-clr">
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="white">
                    Mail ID : {`${data.email}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => deleteStudent(id)} size="small"
                    style={{ backgroundColor: 'crimson', color: 'white' }}>
                    Delete
                </Button>
                <Button onClick={() => navigate(`/student/view/${id}`)} size="small"
                    style={{ backgroundColor: 'green', color: 'white' }}>
                    View
                </Button>
                <Button
                    onClick={() => navigate(`/student/edit/${id}`)}
                    size="small"
                    color="primary"
                    style={{ backgroundColor: 'blue', color: 'white' }}
                >
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
};

export default StudentCard;