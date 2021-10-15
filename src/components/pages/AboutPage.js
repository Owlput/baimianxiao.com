import React from "react";
import '../../assets/css/genuineStyle.css'
import sponsor from '../../assets/images/sponsor.png'

export function AboutPage() {
  return (
    <div className="aliContV" id="pageWrapper">
      <CSSInjector/>
      <h1>关于</h1>
      <div>
        <div>
          <h2>本项目</h2>
          <p id="aboutProject">
            本项目为开源项目，GitHub仓库在<a href="https://github.com/Owlput/baimianxiao.com">这里</a>。本项目使用MIT协议开源，欢迎贡献代码/Review。<br/>
            本项目<b>不接受任何形式的捐赠/赞助</b>，如果你想让本站办的更好，请多搜集白面鸮相关内容<b>并连同作者联系信息</b>投至邮箱。取得授权后将收入本站。
          </p>
        </div>
        <div>
          <h2>本人</h2>
          <p>白面鸮天下第一！！！！！！</p>
        </div>
        <div id="sponsor">
          <h2>赞助</h2>
          <p>扫码赞助（要恰饭的嘛，用爱发电怎么可能，赶紧给爷打钱）</p>
          <img src={sponsor} alt="Sponsor QR Code"></img>
        </div>
      </div>
    </div>
  );
}
function CSSInjector(){
  return(
    <style>
      {`
      #pageWrapper{
        width:90%
      }
      #aboutProject b {
        font-size:2em;
      }
      #sponsor{
        display:flex;
        flex-direction:column;
        align-items:center;
      }
      #sponsor img{
        width:300px
      }
      `}
    </style>
  )
}