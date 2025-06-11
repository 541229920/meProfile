import "./index.less";

import { AntSkill, AntImage } from "./AntProfile";
import { HeaderInfo,WorkersInfo } from "./Personal";

const ContentPage = () => {
  return (
    <div className="Content">
      <HeaderInfo></HeaderInfo>
      <div className="dashboard-grid">
        <AntSkill></AntSkill>
        <div className="dashboard-card">
          <WorkersInfo></WorkersInfo>
        </div>
         <div className="dashboard-card">
          <WorkersInfo></WorkersInfo>
        </div>

        {/* <div className="dashboard-card">
          <h3>快速操作</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <button
              className="add-user-button"
              style={{ backgroundColor: "#28a745" }}
            >
              添加用户
            </button>
            <button
              className="view-report-button"
              style={{ backgroundColor: "#17a2b8" }}
            >
              查看报告
            </button>
            <button
              className="system-settings-button"
              style={{ backgroundColor: "#ffc107" }}
            >
              系统设置
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export { ContentPage };
