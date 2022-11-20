import * as React from 'react';
import Button from '@mui/material/Button';
// import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';



const emails = ['username@gmail.com', 'user02@gmail.com'];


// export default class DialogList extends Component {
//     render() {
//         return (
//             <Dialog>
//                 <Button variant="outlined" >
//                     Open simple dialog
//                 </Button>
//             </Dialog>
//         )
//     }
// }










// export interface SimpleDialogProps {
//     open: boolean;
//     selectedValue: string;
//     onClose: (value: string) => void;
// }

// function SimpleDialog(props: SimpleDialogProps) {
//     const { onClose, selectedValue, open } = props;

//     const handleClose = () => {
//         onClose(selectedValue);
//     };

//     const handleListItemClick = (value: string) => {
//         onClose(value);
//     };





//2

//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <DialogTitle>Set backup account</DialogTitle>
//             <List sx={{ pt: 0 }}>
//                 {emails.map((email) => (
//                     <ListItem button onClick={() => handleListItemClick(email)} key={email}>
//                         <ListItemAvatar>
//                             <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
//                                 <PersonIcon />
//                             </Avatar>
//                         </ListItemAvatar>
//                         <ListItemText primary={email} />
//                     </ListItem>
//                 ))}
//                 <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
//                     <ListItemAvatar>
//                         <Avatar>
//                             <AddIcon />
//                         </Avatar>
//                     </ListItemAvatar>
//                     <ListItemText primary="Add account" />
//                 </ListItem>
//             </List>
//         </Dialog>
//     );
// }

// export default function SimpleDialogDemo() {
//     const [open, setOpen] = React.useState(false);
//     const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = (value: string) => {
//         setOpen(false);
//         setSelectedValue(value);
//     };

//     return (
//         <div className='DialogList'>
//             <Typography variant="subtitle1" component="div">
//                 Selected: {selectedValue}
//             </Typography>
//             <br />
//             <Button variant="outlined" onClick={handleClickOpen}>
//                 Open simple dialog
//             </Button>
//             <SimpleDialog
//                 selectedValue={selectedValue}
//                 open={open}
//                 onClose={handleClose}
//             />
//         </div>
//     );
// }