import "./index.less";
import { Divider } from "antd";

import { AntSkill } from "../../components/AntProfile";
import { HeaderInfo, WorkersInfo } from "./Personal";

const ContentPage = () => {
  return (
    <div className="Content">
      <HeaderInfo></HeaderInfo>

      <Divider orientation="left" style={{ borderColor: "#888eee" }}>
        ❤️个人信息
      </Divider>

      <div className="dashboard-grid">
        <AntSkill></AntSkill>

        <Divider orientation="left" style={{ borderColor: "#888eee" }}>
          💚工作经历
        </Divider>

        <div className="dashboard-card">
          <WorkersInfo
            title="创领传媒文化有限公司"
            description="⌚️2023年3月至今"
            content={
              <>
                合伙成立的新媒体公司担任公司监事，负责公司技术开发及部分视频剪辑工作。
                <Divider orientation="left" style={{ borderColor: "#888eee" }}>
                  💻 前端开发项目
                </Divider>
                <p>
                  ℹ️公司成立时业务方向为Web3新闻平台的开发，构建自己的数据库，使用Vue3
                  + node.js 框架构建企业微信的快讯发布工具xPanse
                  News，建立新闻监听机制，需要数据可控以及信息，设计了数据库来存放拉取的新闻资讯。用来服务自己客户获取快速数据。
                </p>
                <p>
                  💡因市场环境问题，产品未完全落地时更换方向，临时搭建了用户管理系统，用来统计合作公司的用户信息情况。期间开发其他适合公司用的简单小工具。公司业务仅保留解决客户问题以及新闻内容输出。
                </p>
                <p>
                  🌟后因市场环境问题，保留对于交互教程的内容输出以及工作室交互内容。
                </p>
              </>
            }
          />
        </div>

        <div className="dashboard-card">
          <WorkersInfo
            title="郑州映谷文化传播有限公司"
            description="2020年8月 至 2023年3月"
            content={
              <>
                公司小组负责人，负责团队人员的工作内容的分配；同时负责公司技术开发以及产品调研方面工作。
                <Divider orientation="left" style={{ borderColor: "#888eee" }}>
                  💻 前端开发项目
                </Divider>
                <p>
                  {" "}
                  ℹ️机器猫官方网站是一个具备Web3属性的后台管理系统，前端使用的Vue的框架多为独立开发。使用的Web3.js插件进行获取链上数据显示，网站内容主要有登录、文本编辑以及PPT下载⏬、可视图表以及查询等功能。服务端使用Node.js小请求的处理。
                </p>
                <p>
                  {" "}
                  💡Web3官网多为
                  NFT（非同质化数字藏品）元素较多。其中登录使用Web3.js在链接钱包授权后登录，少部分调研、交互、市场资讯等内容需要支付对应ETH才能浏览。利用
                  web3.js
                  获取拉取区块链信息和用户的数据绑定的钱包地址确认授权为1类型用户（VIP用户）。
                </p>
                <p>
                  ☀️有幸接触到公司对接的Web3应用商店项目 Magic Square
                  的中文运营商，也参与了一次开发者会议，同时也配合参与页面设计选赛，虽并未采纳但获得了约价值500美元的代币。
                </p>
                <p>
                  🌟开发过程中学习的以太坊区块链的Soldity语言，尝试开发 Punk NFT
                  项目，第一次因未完善合约请求拦截部分，导致被外部巡查合约非法授权，造成个人资产损失。
                </p>
              </>
            }
          />
        </div>

        <div className="dashboard-card">
          <WorkersInfo
            title="成都美打科技有限公司"
            description="2019年5月 至 2019年8月"
            content={
              <>
                负责配合UI设计页面和细节调整，微信小程序的页面设计和搭建。
                <Divider orientation="left" style={{ borderColor: "#888eee" }}>
                  💻 前端开发项目
                </Divider>
                <p>
                  ℹ️一家初创型公司开发集鼠小程序针对幼儿社交活动的平台搭建，注重产品在界面上的吸引力。首次接触沙箱转账支付的逻辑讨论和功能实现，第一次接触使用高低地图在小程序中的调用获取城市信息、地图定位坐标显示以及导航功能。
                </p>
                   <p>
                  💡集鼠小程序属于内容发布社交平台，分为广场，发布，个人，消息等板块，仅针对成都本地3~7岁儿童的活动内容的发布。
                </p>
                <p>
                  ⚠️小程序第一次针对用户信息的网络规则的修改，需明确要求开发者在开发小程序时，如调用用户信息必须告知授权，因公司未对开发者说明规则的明确，开发时告知需要简化用户登录流程，取消手机授权通知，最终上线时被审核退回。
                </p>
              </>
            }
          />
        </div>

        <div className="dashboard-card">
          <WorkersInfo
            title="四川点点拿科技有限公司"
            description="2018年5月 至 2019年3月"
            content={
              <>
                公司前端开发实习工程师，负责页面设计和模块交互开发，原始HTML+JS开发公司医疗广告页，负责外包项目的设计开发
                <Divider orientation="left" style={{ borderColor: "#888eee" }}>
                  💻 前端开发项目
                </Divider>
                ℹ️初次进入开发公司接触的第一个项目就是HTML+JS的广告开发，原生JS编写H5和静态聊天框自动回复，长按识别隐藏二维码进群的功能。根据主管任务分发，开发纯静态页面，日开发任务量在20个页面左右。
                <p>
                  ☀️开始首次接触前后端开发的外包项目，根据甲方需求协同后端设计项目的数据库和功能板块。面包店理货管理系统，开发Vue部分页面设计，根据UI实现1:1还原页面。
                </p>
                <p>
                  🌟参与自研项目代码的页面新增，公共代码抽离和组件的封装调用，更新项目产品API的文档编辑。
                </p>
              </>
            }
          />
        </div>

        {/* 
        <div className="dashboard-card">
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
