import * as React from "react";
import { Script } from "gatsby";

import App from "../components/App";
import Layout from "../components/layout";

const IndexPage = () => {
  const [display] = React.useState("context");

  return (
    <Layout display={display}>
      <App />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <Script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        (function(m,e,t,r,i,k,a){m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
     k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
        ym(97046842, "init", {
          clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
     });`,
      }}
    />
    <title>Главная</title>
  </>
);
