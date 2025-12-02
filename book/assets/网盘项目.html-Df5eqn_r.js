import{_ as s,c as a,a as l,o as e}from"./app-BkadFxXL.js";const i={};function p(t,n){return e(),a("div",null,[...n[0]||(n[0]=[l(`<h1 id="简易网盘系统项目" tabindex="-1"><a class="header-anchor" href="#简易网盘系统项目"><span>简易网盘系统项目</span></a></h1><p>网盘系统</p><p>基于TCP协议实现一个网盘系统，包含客户端，服务端，各自需求如下：</p><ul><li><p>客户端</p><ul><li>(register)用户注册，注册成功后，在服务端的指定目录下为此用户创建一个文件夹，该文件夹下以后存储当前用户 的文件（类似于网盘）</li><li>(login)用户登录</li><li>(ls)查看网盘目录下的所有文件（一级即可）</li><li>(upload)上传文件，如果网盘已存在则重新上传（覆盖）</li><li>(download)下载文件</li></ul></li><li><p>服务端</p><ul><li>支持注册，并为用户初始化相关目录，注册成功之后，将用户的账号以及密码存储到特定的文件夹下</li><li>支持登录</li><li>支持查看当前用户网盘目录下的所有文件</li><li>支持上传</li><li>支持下载</li></ul></li></ul><p><strong>项目环境的搭建</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">设计目录结构</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span>建立config文件夹——》配置信息</span>
<span class="line">	setting<span class="token punctuation">.</span>py</span>
<span class="line"><span class="token number">2.</span>建立db文件夹——》用户账号和密码信息存放</span>
<span class="line"><span class="token number">3.</span>建立files文件夹——》用户的网盘文件</span>
<span class="line"><span class="token number">4.</span>建立src文件夹——》核心功能文件</span>
<span class="line">	server<span class="token punctuation">.</span>py socket服务端</span>
<span class="line">    pan<span class="token punctuation">.</span>py 业务逻辑处理</span>
<span class="line"><span class="token number">5.</span>建立utils文件夹——》存储工具类函数</span>
<span class="line">	req<span class="token punctuation">.</span>py 请求：发送<span class="token operator">/</span>接收</span>
<span class="line"><span class="token number">6</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span>py ——》主程序</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端1 连接成功，创建处理客户端1的业务请求的对象</p><p>客户端2 连接成功，创建处理客户端2的业务请求的对象</p>`,8)])])}const r=s(i,[["render",p]]),o=JSON.parse('{"path":"/python/%E7%BD%91%E7%9B%98%E9%A1%B9%E7%9B%AE.html","title":"简易网盘系统项目","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"python/网盘项目.md"}');export{r as comp,o as data};
