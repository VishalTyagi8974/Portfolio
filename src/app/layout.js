"use client";
import "@fontsource/poppins";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
// Ensure it’s correctly loaded

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically import Bootstrap JS only on the client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        const cursorWidth = cursor.offsetWidth; // Center horizontally
        const cursorHeight = cursor.offsetHeight; // Center vertically

        cursor.style.left = `${e.clientX - cursorWidth}px`;
        cursor.style.top = `${e.clientY - cursorHeight}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        <main>
          <div ref={cursorRef} className="cursor d-none d-md-block">
            <img style={{ width: "250px" }} src="/cursorBg.svg" alt="Custom Cursor" />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}

