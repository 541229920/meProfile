import "./menu.less";

import { Avatar, List } from "antd";

const data = [
  {
    title: "创领传媒有限公司",
    content: (
      <>
        <p>
          创领传媒有限公司属于合伙创业公司，2023年4月份注册。
        </p>
        <p> 🟢 <strong>在职期间：</strong>合伙成立的新媒体公司担任公司监事，负责公司技术开发及部分视频剪辑工作。</p>
      </>
    ),
    link: "https://www.qcc.com/firm/96c9d20ddbe755a008b722645d459578.html",
  },
  {
    title: "郑州映谷文化传播有限公司",
    content: (
      <>
        <p>郑州映谷文化有限公司是做新媒体信息传播的公司。
        </p>
        <p> 🔴 <strong>在职期间：</strong>公司小组负责人，负责团队人员的工作内容的分配；同时负责公司技术开发以及产品调研方面工作。</p>
      </>
    ),
    link: "https://www.qcc.com/firm/bb276a44c0aeeab302d0a43d73dec8fc.html",
  },
  {
    title: "成都美打科技有限公司",
    content: (
      <>
        <p>初创型网络公司，做本地化社交活动平台。</p>
        <p> 🔴 <strong>在职期间：</strong>负责集鼠App社交平台的前端开发工作，微信小程序开发。</p>
      </>
    ),
    link: "https://www.qcc.com/firm/87cf284b4c8aa78dde749d1b209f4b80.html",
  },
  {
    title: "四川省点点拿科技有限公司",
    content: (
      <>
        <p>
          四川省点点拿网络科技有限公司是一家专注移动媒体的互联网行业新媒体运营广告公司。
        </p>
           <p>🔴 <strong>在职期间：</strong>负责公司的H5静态页面广告开发，外包项目1:1还原和开发。</p>    
      </>
    ),
    link: "https://www.qcc.com/firm/4a545a5d7dfb2c571aa1e1dbf99986c2.html",
  },
];

const MenuNew: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
          }
          title={<a href={item.link}>{item.title}</a>}
          description={item.content}
        />
      </List.Item>
    )}
  />
);

const MenuPage = () => {
  return (
    <div className="MenuPage">
      <div className="menu-content">
      <MenuNew></MenuNew>
      </div>
    </div>
  );
};

export default MenuPage;
