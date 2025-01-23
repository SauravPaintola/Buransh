import { Albert_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Static/Navbar";
import Footer from "./components/Static/Footer";
import TopBar from "./components/Static/TopBar";

// Load the Albert Sans font from Google Fonts
const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata = {
  title: "Buransh Foundation: Transforming Lives Through Social Service",
  description:
    "The Buransh Foundation is dedicated to uplifting communities through education, awareness, and empowerment initiatives. Join us in making a difference.",
  keywords:
    "Buransh Foundation, social service, community upliftment, education, awareness campaigns, empowerment, charity, NGO, Uttarakhand , Saurav Paintola",
  author: "Buransh Foundation",
  og: {
    title: "Buransh Foundation: Transforming Lives Through Social Service",
    description:
      "Discover how the Buransh Foundation is committed to creating a positive impact through innovative programs in education, awareness, and community support.",
    image: "/assets/logomini.png", // Replace with the actual image path
    url: "https://www.buranshfoundation.in", // Replace with your foundation's URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Buransh Foundation: Transforming Lives Through Social Service",
    description:
      "Join the Buransh Foundation in its mission to empower communities and bring about social change through education and awareness.",
    image: "/assets/logomini.png", // Replace with the actual image path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albertSans.className}>
      <body className="antialiased overflow-x-hidden">
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
