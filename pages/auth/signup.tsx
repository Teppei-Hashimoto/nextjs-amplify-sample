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
import { useForm, SubmitHandler } from "react-hook-form";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useUser } from "../../src/context/AuthContext";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  password: string;
}

const Signup: NextPage = () => {
  // const { user } = useUser();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const signUpAmplify = async (data: IFormInput): Promise<CognitoUser> => {
    const { username, password } = data;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
      });
      console.log(user);
      return user;
    } catch (error) {
      // console.error(error);
      throw error;
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      const signUpUser = signUpAmplify(data);
      router.push("/auth/login");
    } catch (error) {
      console.error("error signup", error);
    }
  };

  return (
    <>
      <Head>
        <title>ユーザー登録</title>
      </Head>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                id="username"
                label="User Name"
                variant="outlined"
                {...register("username", { required: true })}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                {...register("password", { required: true })}
              />
            </Grid>
            {/* <Grid item>
              <TextField
                required
                id="password-again"
                label="Password Again"
                variant="outlined"
              />
            </Grid> */}
            <Grid item>
              <Button type="submit">登録</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Signup;
