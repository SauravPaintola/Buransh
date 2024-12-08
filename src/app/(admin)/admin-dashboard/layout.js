import "../../../app/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
// import ProtectedRoute from "./components/ProctedRoute";
// export const metadata = {
//   title: "Qurixx Smart Health Test",
//   description:
//     "Take our free smart health self-assessment test to identify potential issues like digestive problems, joint pain, sexual and mental health concerns, and more. Get a full report with personalized recommendations, health products or book a consultation with our healthcare professionals for expert advice.",
//   keywords:
//     "Comprehensive health assessment, Online health questionnaire, Digestive health checker, Sexual health risk assessment, Liver disease symptoms checker, Mental health evaluation tool, Kidney health self-assessment, Health test for men and women, Personalized health recommendations, Online health diagnostics",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body className="flex ">
        {/* <ProtectedRoute route="admin-login" callback="/admin-dashboard"> */}

        <div className="w-screen">
          {children}
          <ToastContainer />
        </div>
        {/* </ProtectedRoute> */}
      </body>
    </html>
  );
}
