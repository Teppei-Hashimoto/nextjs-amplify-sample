import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import {
  Typography,
  Button,
  Container,
  TextField,
  Box,
  Grid,
} from "@mui/material";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>ユーザー登録</title>
      </Head>
      <Container maxWidth="md">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <TextField
              required
              id="user-name"
              label="User Name"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="password"
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="password-again"
              label="Password Again"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button>登録</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Signup;
