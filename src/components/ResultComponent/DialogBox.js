import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

//input arguments: selectedImages - array of image urls, isDialogOpen - boolean, setIsDialogOpen - functions
//returns - A dialog or pop-up, displaying a list of images passed as argument.
const DialogBox = ({ selectedImages, isDialogOpen, setIsDialogOpen }) => {
    return (
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <DialogTitle>Property Images</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => setIsDialogOpen(false)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <List>
                    {selectedImages.map((image, index) => (
                        <ListItem key={index}>
                            <ListItemText>
                                <img
                                    src={image}
                                    alt={`Hotel ${index + 1}`}
                                    style={{ maxWidth: '100%' }}
                                />
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
}

export default DialogBox;
