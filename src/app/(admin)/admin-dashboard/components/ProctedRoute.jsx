"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children, route, callback }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      // Redirect to login Page if access token is not present
      router.push(`${route}?callback=${callback}`);
      toast.warning("Please login to access this Page", {
        style: {
          color: "red",
        },
      });
    } else {
      setLoading(false);
    }

    // Additional checks for admin access can be implemented here
  }, []);

  if (loading) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
