import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: "16px",
  textAlign: 'center',
  color: "#d8f2da",
  width: "70vw",
}));

export default function BasicGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          
            <Item>
                <h1>{props.item.title}</h1>
                <p align="right">{props.item.date}</p>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
