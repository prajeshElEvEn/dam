import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form } from "../../components/forms/CustomForm";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <TextField
        type="email"
        label="Email Id"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <TextField
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <>
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            </>
          ),
        }}
        label="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <Stack direction={"row"} spacing={1}>
        <Link component={RouterLink} to="/auth/forgot">
          Forgot Password?
        </Link>
      </Stack>
      <Button variant="contained" type="submit">
        Login
      </Button>
      <Stack direction={"row"} spacing={1}>
        <Typography>{"Don't have an account?"}</Typography>
        <Link component={RouterLink} to="/auth/register">
          Register
        </Link>
      </Stack>
    </Form>
  );
}
