import Link from "next/link";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useUser } from "../src/context/AuthContext";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export default function Header() {
  const { user } = useUser();
  const router = useRouter();

  const signOut = async () => {
    await Auth.signOut();
    router.push("/");
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{ display: "flex", flexDirection: "row", padding: 1 }}>
          <Box sx={{ padding: 1 }}>
            <Link href="/">
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
          </Box>
          {user && (
            <Box sx={{ padding: 1 }}>
              <Link href="/about">
                <Button sx={{ color: "#fff" }}>ログイン済み</Button>
              </Link>
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }}></Box>
          {user ? (
            <Box sx={{ padding: 1 }}>
              <Button sx={{ color: "#fff" }} onClick={() => signOut()}>
                ログアウト
              </Button>
            </Box>
          ) : (
            <>
              <Box sx={{ padding: 1 }}>
                <Link href="/auth/login">
                  <Button sx={{ color: "#fff" }}>ログイン</Button>
                </Link>
              </Box>
              <Box sx={{ padding: 1 }}>
                <Link href="/auth/signup">
                  <Button sx={{ color: "#fff" }}>登録</Button>
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, height: 80 }}></Box>
    </>
  );
}
