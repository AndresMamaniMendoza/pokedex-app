import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { lightGreen, red } from '@mui/material/colors';
import NotFoundImage from '../../assets/images/NotFoundImage.png';

function NotFoundPage() {
    return (
        <Card sx={{ width: 345, marginTop: '20px', marginBottom: '20px', border: '15px solid', borderRadius: '40px', borderColor: red[500] }}>
            <CardHeader sx={{ backgroundColor: red[300] }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {"P"}
                    </Avatar>
                }
                titleTypographyProps={{ variant: 'h4', alig: 'left', textTransform: 'uppercase' }}
                title={"Pokedex"}
                subheader={"PageNotFound"}
            />
            <CardMedia
                sx={{
                    width: '350px',
                    height: '500px',
                    backgroundColor: lightGreen[100]
                }}
                image={NotFoundImage}
                title={"Duck"}
            />
        </Card>
    );
}

export default NotFoundPage;