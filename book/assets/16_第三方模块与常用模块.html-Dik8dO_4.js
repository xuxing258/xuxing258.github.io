import{_ as s,c as a,a as e,o as p}from"./app-DOVazbfl.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="第三方模块-常用模块" tabindex="-1"><a class="header-anchor" href="#第三方模块-常用模块"><span>第三方模块+常用模块</span></a></h1><h2 id="_1-第三方模块" tabindex="-1"><a class="header-anchor" href="#_1-第三方模块"><span>1.第三方模块</span></a></h2><p>Python的第三方模块是指由社区开发者创建和维护，非Python官方发布的软件包或库。这些模块极大地丰富了Python的功能，覆盖了从网络请求、数据分析、机器学习、Web框架、数据库操作到GUI开发等众多领域。使用第三方模块，开发者可以快速集成复杂功能，提高开发效率。</p><p>如何安装第三方模块：需要使用到pip的管理工具</p><p>pip是一个第三方模块包管理工具，默认安装Python解释器时自动会安装</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">pip install 模块名</span>
<span class="line">——》安装第三方模块</span>
<span class="line"></span>
<span class="line">pip list</span>
<span class="line">——》查询安装的模块</span>
<span class="line"></span>
<span class="line">pip uninstall 模块名</span>
<span class="line">——》删除第三方模块</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">由于pip默认是从外网安装下载<span class="token punctuation">:</span>https<span class="token punctuation">:</span><span class="token operator">//</span>pypi<span class="token punctuation">.</span>org<span class="token operator">/</span></span>
<span class="line">模块较小下载的话没有什么问题</span>
<span class="line">模块较大下载速度就会比较慢</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">换源安装<span class="token punctuation">:</span></span>
<span class="line">pip install 模块名 <span class="token operator">-</span>i 国内镜像源</span>
<span class="line">requests 爬虫阶段需要学习到的库</span>
<span class="line">Successfully installed 成功安装</span>
<span class="line"></span>
<span class="line">PIP国内源<span class="token punctuation">:</span></span>
<span class="line"><span class="token number">1</span>）清华大学</span>
<span class="line">PIP源地址：https<span class="token punctuation">:</span><span class="token operator">//</span>pypi<span class="token punctuation">.</span>tuna<span class="token punctuation">.</span>tsinghua<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>simple</span>
<span class="line"><span class="token number">2</span>）阿里云</span>
<span class="line">PIP源地址：http<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple<span class="token operator">/</span></span>
<span class="line"><span class="token number">3</span>）豆瓣</span>
<span class="line">PIP源地址：http<span class="token punctuation">:</span><span class="token operator">//</span>pypi<span class="token punctuation">.</span>douban<span class="token punctuation">.</span>com<span class="token operator">/</span>simple<span class="token operator">/</span></span>
<span class="line"><span class="token number">4</span>）中国科学技术大学</span>
<span class="line">PIP源地址：http<span class="token punctuation">:</span><span class="token operator">//</span>pypi<span class="token punctuation">.</span>mirrors<span class="token punctuation">.</span>ustc<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>simple<span class="token operator">/</span></span>
<span class="line"><span class="token number">5</span>）华中科技大学</span>
<span class="line">PIP源地址：http<span class="token punctuation">:</span><span class="token operator">//</span>pypi<span class="token punctuation">.</span>hustunique<span class="token punctuation">.</span>com<span class="token operator">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)])])}const o=s(l,[["render",i]]),r=JSON.parse('{"path":"/python/16_%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A8%A1%E5%9D%97%E4%B8%8E%E5%B8%B8%E7%94%A8%E6%A8%A1%E5%9D%97.html","title":"第三方模块+常用模块","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1.第三方模块","slug":"_1-第三方模块","link":"#_1-第三方模块","children":[]}],"git":{},"filePathRelative":"python/16_第三方模块与常用模块.md"}');export{o as comp,r as data};
