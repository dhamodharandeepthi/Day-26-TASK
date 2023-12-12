import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ marks }) {
    function createData(academicPeriod, Tamil, English, Science, Social, Maths) {
        return { academicPeriod, Tamil, English, Science, Social, Maths }; // ES6 Objects Syntax
    }

    const rows = [
        createData(
            "Quartely Marks",
            marks.tamil,
            marks.eng,
            marks.sci,
            marks.soc,
            marks.math
        ),
    ];
    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 550 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell align="right">Tamil</TableCell>
                        <TableCell align="right">English</TableCell>
                        <TableCell align="right">Science</TableCell>
                        <TableCell align="right">Social</TableCell>
                        <TableCell align="right">Maths</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.academicPeriod}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.academicPeriod}
                            </TableCell>
                            <TableCell align="right">{row.Tamil}</TableCell>
                            <TableCell align="right">{row.English}</TableCell>
                            <TableCell align="right">{row.Science}</TableCell>
                            <TableCell align="right">{row.Social}</TableCell>
                            <TableCell align="right">{row.Maths}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
