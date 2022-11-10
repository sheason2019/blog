import Link from "../../../../common/components/link";
import FooterItem from "../footer-item";
import GithubSvg from "../github-svg";
import QQSvg from "../qq-svg";

const Footer = () => {
  return (
    <div class="footer items-center bg-gray-200 mt-4 grid grid-cols-1 md:grid-cols-3">
      <FooterItem>
        <div>ICP码</div>
        <div class="mt-2">审批中</div>
      </FooterItem>
      <FooterItem>
        <div>联系方式</div>
        <div class="mt-1 flex items-center">
          <QQSvg />
          811627877@qq.com
        </div>
        <div class="mt-1 flex items-center">
          <GithubSvg />
          <Link target="_black" href="https://github.com/sheason2019">
            https://github.com/sheason2019
          </Link>
        </div>
      </FooterItem>
      <FooterItem>
        <div>博客项目地址</div>
        <div class="mt-1 flex items-center">
          <GithubSvg />
          <Link target="_black" href="https://github.com/sheason2019/blog">
            https://github.com/sheason2019/blog
          </Link>
        </div>
      </FooterItem>
    </div>
  );
};

export default Footer;
