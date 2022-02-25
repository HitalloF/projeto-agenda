import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios';

export default function FormDialog(props) {
  const [editeValue, setEditValues] = React.useState({
    id: props.id,
    name: props.name,
    numero: props.numero,
  });

  const handleEditContato = () => {
    Axios.put('http://localhost:3001/edit', {
      name: editeValue.name,
      numero: editeValue.numero,
      id: editeValue.id,
    });
    handleClose();
    window.location.reload();
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleDeleteGames = () => {
    Axios.delete(`http://localhost:3001/delete/${editeValue.id}`, {
      id: editeValue.id,
    });
    handleClose();
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues((preValue) => ({
      ...preValue,
      [value.target.id]: value.target.value,
    }));
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="ID"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            defaultValue={props.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="numero"
            label="Numero"
            defaultValue={props.numero}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={handleDeleteGames}>
            Excluir
          </Button>
          <Button color="primary" onClick={handleEditContato}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
