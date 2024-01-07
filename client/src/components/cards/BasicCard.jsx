import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Account Information
        </Typography>
        <Typography variant="h5" component="div">
          John Doe
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          User
        </Typography>
        <Typography variant="body2">email@example.com</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Logout</Button>
      </CardActions>
    </Card>
  );
}
