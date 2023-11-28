import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import useAuth from '../../Hooks/useAuth';
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "../component/SocialLogin";
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { imageUplode } from "../api/ultis";
import logo from '../assets/images/logo.png'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const { user, createUser } = useAuth();
  const [district, setdistrict] = useState([]);
  const [upValue, SetDUpValue] = useState([])
  const [upValue2, SetDUpValue2] = useState('')
  const [bloodGroup, setBloodgroup] = useState("");
  const [distValue, SetDistValue] = useState('')
  const [image, setimage] = useState('')

  console.log(image);
    const axiosPublic = useAxiosPublic()

  useEffect(() => {
         axiosPublic('/dist')
        .then(res => {
        const names = res.data.map((name) => name.name);
        setdistrict(names )
      });
  }, [axiosPublic]);

  useEffect(() => {
         axiosPublic('/upazi')
        .then(res => {
        const names = res.data.map((name) => name.name);
        SetDUpValue(names )
      });
  }, [axiosPublic]);



  //// handel submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const image = data.get('file')
    const password = data.get('password')



    const uploded = await imageUplode(image)
    console.log(uploded);

  


    const user = {
      Name: data.get("lastName"),
      email: data.get("email"),
      image: uploded?.data?.display_url,
      bloodGroup: bloodGroup, 
      district: distValue, 
      upazilia: upValue2,
      status: 'active',
      role: 'donor'
    };

    console.log(user);
    




    console.log(user);
    const result = await createUser(user.email, password);
    console.log(result.user);
    if(result.user){
      const res = await axiosPublic.post('/users', user )
      console.log(res.data)
      if(res.data.insertedId){
        toast.success("Register Successful");
           navigate('/')
      }
    }



 


  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <div>
            <img className="w-40" src={logo} alt="" />
          </div>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
             
              <Grid item xs={12} sm={6}>
                  <label></label>
                    <select
                      name=""
                      id=""
                      onChange={(e) => SetDistValue(e.target.value)}
                      className="border px-4 py-4 rounded-md w-full"
                    >
                      {
                        district.map(items => <option key={items}  value={items}>{items}</option> )
                      }
                    </select>
              </Grid>
               
              <Grid item xs={12} sm={6}>
                  <label></label>
                    <select
                      name=""
                      id=""
                      onChange={(e) => SetDUpValue2(e.target.value)}
                      className="border px-4 py-4 rounded-md w-full"
                    >
                      {
                        upValue?.map((items, idx) => <option key={idx} value={items}>{items}</option> )
                      }
                    </select>
              </Grid>
              <Grid item xs={12} sm={6}>
              <label></label>
                    <select
                      name=""
                      id=""
                      onChange={(e) => setBloodgroup(e.target.value)}
                      className="border px-4 py-4 rounded-md w-full"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input type="file" name="file" id="" className=" px-4 py-3 rounded-md w-full" />
              </Grid>
             
              
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: 'red' }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" sx={{ color: 'red', }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          <div>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </ThemeProvider>
  );
}
