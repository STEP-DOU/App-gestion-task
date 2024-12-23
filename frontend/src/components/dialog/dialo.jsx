import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import axios from "axios";
import '../../App.css'
import { MenuItem } from '@mui/material';

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        description: props.description,
        priorite: props.priorite,
        statut: props.statut,
    });


    const handleEditValues = () => {
        console.log(props.baseUrl)
        axios.put(`http://localhost:3001/edit`, {
            id: editValues.id,
            name: editValues.name,
            description: editValues.description,
            priorite: editValues.priorite,
            statut: editValues.statut,
        });
        handleClose();

    }

    const handleDeleteGame = () => {
        axios.delete(`http://localhost:3001/delete/${editValues.id}`)
    }

    const handleChangeValues = (value)=>{
        setEditValues(prevValues=>({
                ...prevValues,
                [value.target.id]: value.target.value,
            })
        )
    }

    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>

            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Changer le status de la Tache</DialogTitle>
                <DialogContent>
                    <label htmlFor="">Status : </label>
                <select
                    className=" rounded-2xl"
                    name="statut"
                    id="statut"
                    autoFocus
                    margin="dense"
                    onChange={handleChangeValues}
                    defaultValue={props.statut}
                >
                    <option value="" disabled>Choisissez</option>
                    <option value="Valide">Valider</option>
                    <option value="Close">Close</option>
                    <option value="En Cours">En Cours</option>
                </select>
                   
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEditValues}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
