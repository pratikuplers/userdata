import * as React from 'react'; 
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


const baseURL = "https://jsonplaceholder.typicode.com/users";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const User = () => {
    const [posts, setPostData] = useState(null);    
    const {id}  = useParams();  
    useEffect(() => {

      
        axios.get(`${baseURL}/${id}`).then((response) => {
          setPostData(response.data);
        });
      }, [id]);
      if (!posts) return null;
  return (
    
    <Box>
      <Grid   columns={{ xs: 4, sm: 8, md: 6 }}>
        
            <Grid item xs={4} sm={4} md={12}>
              <Item>
                  <Avatar
                    alt="Remy Sharp"
                    src={process.env.PUBLIC_URL + '/assets/images/user.png'}
                    sx={{ width: 200, height: 200 }}
                    style={{marginLeft: '650px'}}
                  />
                  <ul className='employee-details' style={{ listStyle: 'none', display: 'inline'}}>
                      <li><strong>ID: </strong>  {posts.id}</li>
                      <li><strong>Name: </strong>  {posts.name}</li>
                      <li><strong>Username: </strong>  {posts.username}</li>
                      <li><strong>Email: </strong>  <Link to={`mailto:${posts.email}`} target={`_self`}>{posts.email}</Link></li>
                      <li><strong>Address: </strong>  <Link to={`https://www.google.com/maps`} target={`_blank`} title={`Address`}>{posts.address.street} {posts.address.suite} {posts.address.city} {posts.address.zipcode}</Link></li>
                      <li><strong>Phone: </strong>  <Link to={`tel:${posts.phone}`} target={`_self`} title={posts.phone}>{posts.phone}</Link></li>
                      <li><strong>Website: </strong> <Link to={`https://www.google.com/`} target={`_blank`} title={posts.website}>{posts.website}</Link></li>
                      <li><strong>Company Name: </strong>  {posts.company.name}</li>

                  </ul>
              </Item>
            </Grid>
        
      </Grid>
    </Box>
  )
}

export default User;