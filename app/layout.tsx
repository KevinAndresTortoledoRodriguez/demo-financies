import type { Metadata } from "next";
import localFont from "next/font/local";
import Grid from '@mui/material/Grid2';

import Sidebar from "./components/SideBar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{height:'100vh', margin:0}}>
        <Grid container style={{height:'100vh', margin:0, padding:0}}>
          <Grid size={12} style={{height:'5vh', backgroundColor:'cyan'}} container>
            <Grid size={1}>Logo</Grid>            
            <Grid size={10} textAlign={'center'}>Cabecero</Grid>
            <Grid size={1}>Logout</Grid>
          </Grid>
          <Grid container size={12} style={{height:'90vh'}} > 
            <Sidebar />
            <Grid size={10} container>            
              {children}
            </Grid>              
          </Grid>
          <Grid size={12} style={{height:'5vh', backgroundColor:'pink'}}  container justifyContent={'center'} alignItems={'center'}>
            Administracion de finanzas.
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
