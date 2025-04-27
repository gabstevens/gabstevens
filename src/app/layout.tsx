import "../styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import StyledComponentsRegistry from "../lib/registry";

gsap.registerPlugin(useGSAP);
const gaId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
