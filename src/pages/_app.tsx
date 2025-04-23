import type { AppProps } from "next/app";
import "../styles/globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
