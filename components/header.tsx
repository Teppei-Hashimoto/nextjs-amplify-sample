import Link from "next/link";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Header() {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ display: "flex", flexDirection: "row", padding: 1 }}>
          <Box sx={{ padding: 1 }}>
            <Link href="/">
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
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
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, height: 80 }}></Box>
    </>
  );
}
