import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


export default function AlertDialog({onYes, onClose,open}) {
 



  return (
    <div>
      
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={onYes}>Yes</Button>
          <Button autofocus onClick = {onClose}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
