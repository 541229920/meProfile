import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.less";

// 设置cookie
function setLoginCookie(name, value, hours) {
  const d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000); 
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [login] = useState({ user: "1", pass: "1" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (
        formData.username === login.user &&
        formData.password === login.pass
      ) {
        // 设置4小时有效的cookie
        setLoginCookie("isLogin", "1", 12);
        setLoginCookie("username", formData.username, 12);

        if (onLogin) onLogin(formData.username);
        navigate("/"); // 跳转主页
      } else {
        setError("用户名或密码错误");
      }
    } catch {
      setError("登录失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-contaner">
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1
            style={{
              color: "#333",
              marginBottom: "10px",
              fontSize: "28px",
              fontWeight: "300",
            }}
          >
            欢迎登录
          </h1>
          <p style={{ color: "#666", margin: 0 }}>请输入您的账号信息</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label className="login-label">用户名</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="请输入用户名"
              className="login-input"
              onFocus={(e) => (e.target.style.borderColor = "#667eea")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label className="login-label">密码</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="请输入密码"
              className="login-input"
              onFocus={(e) => (e.target.style.borderColor = "#667eea")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="login-button"
            onMouseOver={(e) => {
              if (!loading) e.target.style.backgroundColor = "#5a67d8";
            }}
            onMouseOut={(e) => {
              if (!loading) e.target.style.backgroundColor = "#667eea";
            }}
          >
            {loading ? "登录中..." : "登录"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            测试账号：{login.user}/{login.pass}
          </p>
          <div style={{ marginTop: "15px" }}>
            <a href="#" style={{ color: "#667eea", textDecoration: "none" }}>
              忘记密码？
            </a>
            <span style={{ margin: "0 10px" }}>|</span>
            <a href="#" style={{ color: "#667eea", textDecoration: "none" }}>
              注册账号
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
