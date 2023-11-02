import React from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

const SearchComponent = ({ searchCriteria, setSearchCriteria, handleSearch }) => {
    return (
        <Box mt={3}>
            <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                    <TextField
                        label="Location (City, State, Country)"
                        variant="outlined"
                        value={searchCriteria.location}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, location: e.target.value })
                        }
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Check-in (YYYY-MM-DD)"
                        variant="outlined"
                        type="date"
                        value={searchCriteria.checkin}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, checkin: e.target.value })
                        }
                        fullWidth
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Check-out (YYYY-MM-DD)"
                        variant="outlined"
                        type="date"
                        value={searchCriteria.checkout}
                        onChange={(e) =>
                            setSearchCriteria({ ...searchCriteria, checkout: e.target.value })
                        }
                        fullWidth
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={6}>
                            <TextField
                                label="Adults (13 and over)"
                                variant="outlined"
                                type="number"
                                value={searchCriteria.adults}
                                onChange={(e) =>
                                    setSearchCriteria({ ...searchCriteria, adults: e.target.value })
                                }
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Children"
                                variant="outlined"
                                type="number"
                                value={searchCriteria.children}
                                onChange={(e) =>
                                    setSearchCriteria({ ...searchCriteria, children: e.target.value })
                                }
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={6}>
                            <TextField
                                label="Pets"
                                variant="outlined"
                                type="number"
                                value={searchCriteria.pets}
                                onChange={(e) =>
                                    setSearchCriteria({ ...searchCriteria, pets: e.target.value })
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Currency"
                                variant="outlined"
                                value={searchCriteria.currency}
                                onChange={(e) =>
                                    setSearchCriteria({ ...searchCriteria, currency: e.target.value })
                                }
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleSearch(searchCriteria)}
                fullWidth
                sx={{ marginTop: '20px' }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchComponent;