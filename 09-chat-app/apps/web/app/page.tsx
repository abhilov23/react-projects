"use client";
import { useRouter } from "next/navigation";  // Changed from 'next/router'
// import styles from "./page.module.css";  // Remove or comment out if not used
import {TextInput} from "@repo/ui/text-input";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "300px",
      padding: "20px"
    }}> 
      <TextInput 
        size="big" 
        placeholder="room-name"
        onChange={(e) => console.log(e.target.value)}  // Changed to a proper onChange handler
      />
      <button
        onClick={() => {
          router.push('/chat/123');
        }}
      >
        Join Room
      </button>
    </div>
  );
}
