
import React, { useEffect } from "react";
import { useNavigation } from "@/context/navigation-context";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  pageName: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className,
  pageName
}) => {
  const { 
    currentPage, 
    setCurrentPage, 
    previousPage, 
    setPreviousPage,
    transitionState, 
    setTransitionState 
  } = useNavigation();

  useEffect(() => {
    if (currentPage !== pageName) {
      setPreviousPage(currentPage);
      setCurrentPage(pageName);
      
      // Start entering animation
      setTransitionState('entering');
      
      // After entering animation completes, set to entered state
      const timer = setTimeout(() => {
        setTransitionState('entered');
      }, 500); // Match this to your animation duration
      
      return () => clearTimeout(timer);
    }
  }, [currentPage, pageName, setPreviousPage, setCurrentPage, setTransitionState]);

  // Determine animation classes based on transition state
  const animationClasses = {
    entering: 'animate-fade-in animate-scale-in',
    entered: 'opacity-100 scale-100',
    exiting: 'animate-fade-out animate-scale-out',
    exited: 'opacity-0 scale-95'
  };

  return (
    <div
      className={cn(
        "transition-all duration-500 ease-in-out",
        animationClasses[transitionState],
        className
      )}
    >
      {children}
    </div>
  );
};
