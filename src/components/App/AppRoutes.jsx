import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {/* index - мы указывается когда нужен роут по умолчанию, то есть "/"  */}
      <Route index element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
