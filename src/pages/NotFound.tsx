
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-2xl font-medium mb-4">Page Not Found</p>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you were looking for. The page may have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/">
                <Home size={16} className="mr-2" /> Return Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="#" onClick={() => window.history.back()}>
                <ArrowLeft size={16} className="mr-2" /> Go Back
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
