import React, { useState } from 'react';
import {
    Container,
    Box,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "../App.css";

//input arguments: hotel - array of objects, handleViewImages and handleReserveNow - functions
//returns - A card, containing information about the hotel passed as argument.
const HotelCard = ({ hotel, handleViewImages, handleReserveNow }) => {
    return (
        <Card sx={{ width: 300, mb: 2, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <CardHeader
                title={hotel.name}
                subheader={`Price: ${hotel.price.currency} ${hotel.price.total}`}
                className='card-header'
            />
            <CardContent>
                <Typography>Address: {hotel.address}</Typography>
                <Typography>City: {hotel.city}</Typography>
                <Typography>Bedrooms: {hotel.bedrooms}</Typography>
                <Typography>Beds: {hotel.beds}</Typography>
                <Typography>Bathrooms: {hotel.bathrooms}</Typography>
                <Typography>{hotel.isSuperhost ? 'Superhost' : 'Not a Superhost'}</Typography>
                <Typography>Capacity: {hotel.persons} persons</Typography>
                <Typography>Reviews: {hotel.reviewsCount} (Rating: {hotel.rating})</Typography>
                <Typography>Type: {hotel.type}</Typography>
                <Typography>Preview Amenities:</Typography>
                <ul>
                    {hotel.previewAmenities.map((amenity) => (
                        <li key={amenity}>{amenity}</li>
                    ))}
                </ul>
                <Grid container spacing={1}>
                    <Grid item>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={() => handleViewImages(hotel.images)}
                        >
                            View Images
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => handleReserveNow(hotel.url)}
                        >
                            Reserve Now
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

//input arguments: selectedImages - array of image urls, isDialogOpen - boolean, setIsDialogOpen - functions
//returns - A dialog or pop-up, displaying a list of images passed as argument.
const DialogBox = ({ selectedImages, isDialogOpen, setIsDialogOpen }) => (
    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Hotel Images</DialogTitle>
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

//Wrapper function to map all the resulting hotels in an orderly fashion.
const HotelList = ({ hotels }) => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleViewImages = (images) => {
        setSelectedImages(images);
        setIsDialogOpen(true);
    };

    const handleReserveNow = (url) => {
        window.open(url, '_blank');
    };
    return (
        <Container sx={{ mt: 3, maxHeight: '90vh', overflow: 'auto' }}>
            <Box mt={3}>
                <Grid container spacing={1}>
                    {hotels.map((hotel) => (
                        <Grid item key={hotel.id} xs={4} sx={{ display: 'flex' }}>
                            <HotelCard
                                hotel={hotel}
                                handleViewImages={handleViewImages}
                                handleReserveNow={handleReserveNow}
                            />
                        </Grid>
                    ))}
                </Grid>
                <DialogBox
                    selectedImages={selectedImages}
                    isDialogOpen={isDialogOpen}
                    setIsDialogOpen={setIsDialogOpen}
                />
            </Box>
        </Container>
    );
};

export default HotelList;