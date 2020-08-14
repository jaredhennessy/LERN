import React, { useContext } from "react";
import UserContext from "../../UserContext/UserContext";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import UserAvatar from "../../components/UserAvatar";
import Container from "@material-ui/core/Container";

export default function EditProfile() {
  const { userData } = useContext(UserContext);

  return (
    <Container>
      <h1>Edit Profile</h1>
      <h2>{userData.user}</h2>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="first"
              label="First"
              type="first"
              id="first"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="last"
              label="Last"
              type="last"
              id="last"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </form>
        </Grid>
        <Grid item md={4}>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="new-password"
              label="New Password"
              type="password"
              id="new-password"
              autoComplete="new-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm-new-password"
              label="Confirm New Password"
              type="password"
              id="confirm-new-password"
              autoComplete="confirm-new-password"
            />
          </form>
        </Grid>
        <Grid item md={4} justify-content="center">
          <UserAvatar />
          <Button>Edit Profile Picture</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
