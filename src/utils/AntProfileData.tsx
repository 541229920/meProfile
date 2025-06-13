import { Badge, Typography} from "antd";
import type { DescriptionsProps } from "antd";

const { Link } = Typography;

export const AntProfileData: DescriptionsProps["items"] = [
   {
    key: '1',
    label: '💵期望薪资',
    children: '7000+',
  },
  {
    key: '2',
    label: '🏠当前住址',
    children: '河南省郑州市',
  },
  {
    key: '3',
    label: '⛩️工作年限',
    children: '5年',
  },
  {
    key: '4',
    label: '📱联系方式',
    children: (
       <Link href={`tel:{18137855851}`}>18137855851</Link>
    ),
  },
  {
    key: '5',
    label: '💌邮箱',
    children: (
      <Link href={`mailto:{541229920@qq.com}`}>541229920@qq.com</Link>
    ),
  },
  {
    key: "6",
    label: ( <Badge.Ribbon text="🛠Skill" color="black" key="badge" style={{fontSize:'16px'}}>🛠 技术栈 </Badge.Ribbon> ),
    span: 5,
    children: (
      <>
        熟练使用CSS3 \ HTML5 \ Less \ Scss 以及响应式布局 <br />
        Vite构建Vue(3年)和React(1年)前端框架开发
        <br />
        熟练使用 JavaScript \ typeScrip 针对不同环境的语言开发
        <br />
        Node.js \ Express \ Next.js \ MySQL \ Navicat 的后台服务器搭建开发
        <br />
        以太坊区块链 web3.js 的开发经验
        <br />
        前端请求 Ajax 的封装以及调用包括跨链请求
        <br />
        使用 PostMan \ Github \ VSCode \ SourecTree \ PhotoShop \ 剪映
        <br />
      </>
    ),
  }
];