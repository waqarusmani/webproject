import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function BasicTextFields() {

    const loginForm = useFormik({
        initialValues: {
            email:"",
            password:''
        },
        validationSchema: yup.object({
         email: yup.string().email().required(),
         password: yup.string().required()
        }),
        onSubmit: (values) => {

            console.log("~ values:", values)
        }
    })

    console.log("login form=>", loginForm)

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" 
       name="email"
       error={loginForm.errors.email}
       helperText={loginForm.errors.email}
       onChange={loginForm.handleChange}
      />
      <TextField type={'password'} id="outlined-basic" label="Password" variant="outlined"
      name="password"
      onChange={loginForm.handleChange}
      />
      <Button variant="contained" onClick={loginForm.handleSubmit} >Login</Button>
    </Box>
  );
}
