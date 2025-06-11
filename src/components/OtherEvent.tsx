function onLogout(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  window.location.reload();
}

const BtnOnLogout: React.FC = () => (
  <button className="logout-button" onClick={() => onLogout("isLogin")}>
    退出登录
  </button>
);

export { BtnOnLogout };