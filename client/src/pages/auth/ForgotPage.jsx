import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Form } from "../../components/forms/CustomForm";

export default function ForgotPage() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Reset your Password</h1>
      <TextField
        type="email"
        label="Email Id"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Button variant="contained" type="submit">
        Send Email
      </Button>
    </Form>
  );
}
