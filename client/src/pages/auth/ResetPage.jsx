import { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form } from "../../components/forms/CustomForm";

export default function ResetPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    token: "",
    newPassword: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Set New Password</h1>
      <TextField
        type="text"
        label="Token"
        value={formData.token}
        onChange={(e) => setFormData({ ...formData, token: e.target.value })}
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
        label="New Password"
        value={formData.newPassword}
        onChange={(e) =>
          setFormData({ ...formData, newPassword: e.target.value })
        }
      />
      <Button variant="contained" type="submit">
        Reset Password
      </Button>
    </Form>
  );
}
