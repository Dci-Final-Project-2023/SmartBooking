import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col p-2 justify-center text-center h-64 bg-slate-200 gap-2">
      <h1 className="text-6xl">404</h1>
      <h2 className="text-3xl">Upps : {"("} </h2>{" "}
      <h3 className="text-2xl">Seite nicht gefunden!</h3>
    </div>
  );
}

export default NotFound;
