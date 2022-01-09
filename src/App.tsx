import React from "react";
interface appProps {
  className?: string;
}
export const App: React.FC<appProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h2>react typescript tailwind template</h2>
    </div>
  );
};
