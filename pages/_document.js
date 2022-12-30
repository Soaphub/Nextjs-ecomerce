import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document';

export default function _document() {
  return (
  <Html lang="en">
    <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
        crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700;900&family=Play:wght@400;700&display=swap" rel="stylesheet"/>
    </Head>
    <body>
        <Main/>  
        <NextScript/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
</Html>
  )
}
