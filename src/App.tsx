import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import LoginPage from "./views/login/Login";
import LayoutPage from "./views/layout/Layout"; // 主页


// 读取cookie
function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

// 路由守卫
const RequireAuth = () => {
  const isLogin = getCookie("isLogin") === "1";
  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={() => {}} />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<LayoutPage />} />
          {/* 这里可以继续嵌套路由 */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;