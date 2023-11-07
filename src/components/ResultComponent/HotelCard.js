import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    MobileStepper,
    Paper,
    Rating,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    card: {
        width: '100%',
        paddingBottom: '10px'
    },
    cardMedia: {
        flex: 1
    },
    cardContent: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column'
    },
    cardActions: {
        marginLeft: '10px'
    }
}

//input arguments: hotel - array of objects, handleViewImages and handleReserveNow - functions
//returns - A card, containing information about the hotel passed as argument.
const HotelCard = ({ hotel, handleViewImages, handleReserveNow }) => {
    return (
        <Card sx={styles.card}>
            <CardMedia
                component={() => SwipeableTextMobileStepper(hotel.images)}
                height="200"
                sx={styles.cardMedia}
                image={hotel.images[0]}
                title={hotel.name}
            />
            <CardContent sx={styles.cardContent}>
                <Typography variant='h6' sx={{ mt: 2 }}>
                    Price: {hotel.price.currency} {hotel.price.total}
                </Typography>
                <Rating value={hotel.rating} precision={0.25} readOnly/>
                <Typography variant="body2" color="text.secondary">
                    {hotel.address}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {hotel.bedrooms} Bedroom(s), {hotel.bathrooms} Bathroom(s), {hotel.beds} Bed(s).
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Capacity: {hotel.persons} person(s)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Superhost: 
                    {hotel.isSuperhost ? 
                    <DoneIcon color='success'/> 
                    : 
                    <CloseIcon color='error'/>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Reviews: {hotel.reviewsCount} (Rating: {hotel.rating ? hotel.rating : 'NA'})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Type: {hotel.type}
                </Typography>
            </CardContent>
            <CardActions sx={styles.cardActions}>
                <Button
                    variant="outlined"
                    onClick={() => handleViewImages(hotel.images)}
                >
                    Images
                </Button>
                <Button
                    variant="contained"
                    onClick={() => handleReserveNow(hotel.url)}
                >
                    Reserve
                </Button>
            </ CardActions>
        </Card>
    );
};

const SwipeableTextMobileStepper = (images) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            />
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((url, index) => (
                    <div key={url}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={url}
                                alt={`Image - ${index}`}
                            />
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                    </Button>
                }
            />
        </Box>
    );
}

export default HotelCard;
