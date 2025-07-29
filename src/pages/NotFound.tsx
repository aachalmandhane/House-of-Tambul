import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-playfair text-6xl font-bold mb-4 text-traditional-green">404</h1>
        <p className="font-inter text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-fresh-green hover:text-traditional-green underline font-inter">
          Return to House of Tambul
        </a>
      </div>
    </div>
  );
};

export default NotFound;
