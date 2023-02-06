import * as React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import {  DialogTitle } from '@material-ui/core';

export default function FormDialog(props) {
  
     const handleClickOpen = () => {
         props.setOpen(true);
      };
    
      const handleClose = () => {
        props.setOpen(false);
      };

      return (
    
          <Dialog open={props.open} onClose={handleClose}>

            <DialogTitle>Editar</DialogTitle>

            <DialogContent>
             
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nome do jogo"
                defaultValue={props.name}
                type="text"
                fullWidth
              />

            <TextField
                autoFocus
                margin="dense"
                id="cost"
                label="Preço"
                defaultValue={props.cost}
                type="text"
                fullWidth
              />

            <TextField
                autoFocus
                margin="dense"
                id="category"
                label="Categoria"
                defaultValue={props.category}
                type="text"
                fullWidth
              />

            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Salvar</Button>
              <Button onClick={handleClose}>Excluir</Button>
            </DialogActions>
          </Dialog>
     
      );
    }