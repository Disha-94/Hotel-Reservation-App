import React, { useState } from 'react';
import {
    Container,
    Box,
    Grid,
} from '@mui/material';
import HotelCard from './HotelCard';
import DialogBox from './DialogBox';

const styles = {
    gridItem: {
        display: 'flex'
    }
}

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
        <Container sx={{ mt: 3, maxHeight: '70vh', overflow: 'auto' }}>
            <Box mt={3}>
                <Grid container spacing={1}>
                    {hotels.map((hotel) => (
                        <Grid item key={hotel.id} xs={4} sx={styles.gridItem}>
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