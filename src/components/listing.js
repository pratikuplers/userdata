import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/users";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Listing = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
   
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {post.map((user) => (
          
            <Grid item xs={4} sm={4} md={4} key={user.id}>
                <Link to={`/user/${user.id}`}>
                  <Item>
                    <Grid>
                        <Avatar
                          alt="Remy Sharp"
                          src={'/assets/images/user.png'}
                          sx={{ width: 56, height: 56 }}
                        />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                        <Typography noWrap>{user.name}</Typography>
                      </Grid>
                  </Item>
                </Link>
            </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default Listing