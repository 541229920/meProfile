import "./index.less";
import { useState } from "react";
import { Typography, Flex, Rate } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const HeaderInfo: React.FC = () => {
  function getCookie(name: string) {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  }

  function getCookieSetUsername() {
    const cookie = getCookie("username");
    if (cookie == "1") return "冯梦奇";
    if (cookie !== "1") return cookie;
  }

  return (
    <div>
      <div className="content-header">
        <div className="header-info-container">
          <Paragraph>
            <Title level={3} style={{ margin: 0, color: "#333" }}>
              🎉<i>{getCookieSetUsername()}</i>的简历
            </Title>
          </Paragraph>
          <p className="header-info">
            <Paragraph strong>HR/面试官,您好✨</Paragraph>
            <Paragraph>
              😄非常荣幸能够得到您的赏识浏览我的个人主页，让我为您介绍下我的主页。
            </Paragraph>
            <Paragraph>
              网站使用的
              <Text keyboard> Vite + React </Text>来搭建，UI 用的蚂蚁开发的
              <Link href="https://ant.design/"> AntV </Link>，
              目前为静态网站，这个只是展示一下个人的网站审美程度，觉得好看就给我打个分吧~
              <br />
              接下来就介绍下个人资料和一些技能吧😁希望能够给您留下深刻的印象！
            </Paragraph>
          </p>
          <Flex gap="center" align="center">
            <Text strong>❤给网站评个分吧：</Text>
            <Rate allowClear={false} count={5} />
          </Flex>
        </div>
      </div>
    </div>
  );
};

const WorkersInfo: React.FC = () => {
  return (
    <>
      <Typography>
        <Paragraph>
          <Title level={3}>⛽工作经历</Title>
        </Paragraph>
         <Paragraph>
          <Title level={5}>税务局</Title>
         </Paragraph>
      </Typography>
    </>
  );
};

export { HeaderInfo, WorkersInfo };
