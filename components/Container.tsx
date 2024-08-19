import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="xl:max-w-5xl mx-auto bg-gray-800 px-10 py-4 rounded-lg min-h-screen">
      {children}
    </div>
  );
}

export default Container;
