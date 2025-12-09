import{_ as s,c as a,a as p,o as e}from"./app-DWS4XIiF.js";const t={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="搭建web框架" tabindex="-1"><a class="header-anchor" href="#搭建web框架"><span>搭建web框架</span></a></h1><ul><li>服务器</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 遵循http协议(了解)</span></span>
<span class="line"><span class="token comment"># 请求格式</span></span>
<span class="line"><span class="token number">1.</span>请求首行<span class="token punctuation">(</span>标识http版本<span class="token punctuation">,</span>当前请求方式<span class="token punctuation">)</span></span>
<span class="line"><span class="token number">2.</span>请求头<span class="token punctuation">(</span>一大堆kv键值对<span class="token punctuation">)</span></span>
<span class="line"><span class="token number">3.</span>\\r\\n<span class="token punctuation">(</span>空行<span class="token punctuation">)</span></span>
<span class="line"><span class="token number">4.</span>请求体<span class="token punctuation">(</span>并不是所有请求方式都有<span class="token punctuation">,</span>get没有post有<span class="token punctuation">,</span>存放的是post请求提交的数据<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 响应格式</span></span>
<span class="line"><span class="token number">1.</span>响应首行<span class="token punctuation">(</span>标识http版本<span class="token punctuation">,</span>响应状态码<span class="token punctuation">)</span></span>
<span class="line"><span class="token number">2.</span>响应头<span class="token punctuation">(</span>一大堆kv键值对<span class="token punctuation">)</span></span>
<span class="line"><span class="token number">3.</span>\\r\\n<span class="token punctuation">(</span>空行<span class="token punctuation">)</span></span>
<span class="line"><span class="token number">4.</span>响应体<span class="token punctuation">(</span>返回给浏览器展示给用户看的数据<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 请求方式</span></span>
<span class="line"><span class="token comment"># post:朝后端提交数据(比如登录或者注册功能提交数据校验)</span></span>
<span class="line"><span class="token comment"># get:超后端要数据(比如访问首页)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 响应状态码:用一串数字来表示一些复杂的状态或者描述性信息</span></span>
<span class="line"><span class="token comment"># 1xx:服务端已经成功接收到了数据正在处理,可以继续提交额外的数据</span></span>
<span class="line"><span class="token comment"># 2xx:服务端已经成功响应了你想要的数据(200 OK请求成功)</span></span>
<span class="line"><span class="token comment"># 3xx:重定向(当你在访问一个需要登录之后才能看待的页面,会自动跳转到登录页面)</span></span>
<span class="line"><span class="token comment"># 4xx:请求错误(404请求资源不存在,403当前请求不合法)</span></span>
<span class="line"><span class="token comment"># 5xx:服务器内部错误(500)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建套接字</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 绑定地址</span></span>
<span class="line">server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># 被动等待连接</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    conn<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 接收客户端连接,产生为这个客户端服务的套接字,以及客户端地址</span></span>
<span class="line">    data <span class="token operator">=</span> conn<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>  <span class="token comment"># 接收客户端数据</span></span>
<span class="line">    data <span class="token operator">=</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> </span>
<span class="line">    s <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span></span>
<span class="line">    conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span>s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">   </span>
<span class="line">    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>web应用本质</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token number">1.</span>接收解析http请求<span class="token punctuation">,</span>获取具体的请求信息</span>
<span class="line"><span class="token number">2.</span>处理本次http请求<span class="token punctuation">,</span>完成本次请求的业务的逻辑处理</span>
<span class="line"><span class="token number">3.</span>构造并返回处理结果<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">&gt;</span>http响应</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问不同的数据" tabindex="-1"><a class="header-anchor" href="#访问不同的数据"><span>访问不同的数据</span></a></h2><ul><li>分支版</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建套接字</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 绑定地址</span></span>
<span class="line">server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># 被动等待连接</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    conn<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 接收客户端连接,产生为这个客户端服务的套接字,以及客户端地址</span></span>
<span class="line">    data <span class="token operator">=</span> conn<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>  <span class="token comment"># 接收客户端数据</span></span>
<span class="line">    data <span class="token operator">=</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    path <span class="token operator">=</span> data<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line">    conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">b&#39;HTTP/1.1 200 OK\\r\\n\\r\\n&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> path <span class="token operator">==</span> <span class="token string">&#39;/python/&#39;</span><span class="token punctuation">:</span></span>
<span class="line">        s <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span></span>
<span class="line">        conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span>s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">elif</span> path <span class="token operator">==</span> <span class="token string">&#39;/java/&#39;</span><span class="token punctuation">:</span></span>
<span class="line">        s <span class="token operator">=</span> <span class="token string">&#39;Hello java!&#39;</span></span>
<span class="line">        conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span>s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">elif</span> path <span class="token operator">==</span> <span class="token string">&#39;/index/&#39;</span><span class="token punctuation">:</span></span>
<span class="line">        conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">b&#39;index index index&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">b&#39;web&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数版</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 将对应的功能封装到函数中,将访问的后缀和要执行的函数名对应关系添加到列表或者字典中</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建套接字</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 绑定地址</span></span>
<span class="line">server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># 被动等待连接</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回html页面</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">python</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;python.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        s <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 读取文件</span></span>
<span class="line">    <span class="token keyword">return</span> s</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 普通数据</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    s <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 文件</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">java</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;a.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        s <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列表</span></span>
<span class="line">list1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">&#39;/python/&#39;</span><span class="token punctuation">,</span> python<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">&#39;/java/&#39;</span><span class="token punctuation">,</span> java<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">&#39;/index/&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    conn<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 接收客户端连接,产生为这个客户端服务的套接字,以及客户端地址</span></span>
<span class="line">    data <span class="token operator">=</span> conn<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>  <span class="token comment"># 接收客户端数据</span></span>
<span class="line">    data <span class="token operator">=</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    path <span class="token operator">=</span> data<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line">    conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">b&#39;HTTP/1.1 200 OK\\r\\n\\r\\n&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    func <span class="token operator">=</span> <span class="token boolean">None</span>  <span class="token comment"># 用来存储要执行的函数名字</span></span>
<span class="line">    <span class="token comment"># 循环列表</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> list1<span class="token punctuation">:</span>  <span class="token comment"># 当前循环(&#39;/python/&#39;, python)</span></span>
<span class="line">        <span class="token keyword">if</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> path<span class="token punctuation">:</span></span>
<span class="line">            func <span class="token operator">=</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">break</span></span>
<span class="line">            </span>
<span class="line">    <span class="token keyword">if</span> func<span class="token punctuation">:</span></span>
<span class="line">        res <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        res <span class="token operator">=</span> <span class="token string">b&#39;404 not found&#39;</span></span>
<span class="line">    conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line">    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="传递数据给html页面" tabindex="-1"><a class="header-anchor" href="#传递数据给html页面"><span>传递数据给html页面</span></a></h2><ul><li>jinja2传递数据</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 利用第三方模块:pip install jinja2</span></span>
<span class="line"><span class="token comment"># (了解,django内置有方法用)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">python</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    users <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;qingqing&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;python.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        s <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 读取文件</span></span>
<span class="line">    tem <span class="token operator">=</span> Template<span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># 模板处理</span></span>
<span class="line">    res <span class="token operator">=</span> tem<span class="token punctuation">.</span>render<span class="token punctuation">(</span>users<span class="token operator">=</span>users<span class="token punctuation">)</span>  <span class="token comment"># 调用render函数传递数据</span></span>
<span class="line">    <span class="token keyword">return</span> res<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># html页面</span></span>
<span class="line"><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> users <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> users<span class="token punctuation">.</span>age <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>pymysql:python获取数据库数据</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 数据准备</span></span>
<span class="line"><span class="token comment"># 1.进入数据库:mysql -uroot -p密码</span></span>
<span class="line"><span class="token comment"># 2.创建数据库:create database day1;</span></span>
<span class="line"><span class="token comment"># 3.切换数据库:use day1;</span></span>
<span class="line"><span class="token comment"># 4.创建表: create table student(id int primary key, name varchar(32), age int);</span></span>
<span class="line"><span class="token comment"># 5.插入数据:insert into student values(1, &#39;xixi&#39;, 19),(2, &#39;haha&#39;, 20);</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 利用第三方模块:pip install pymysql</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_users</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 1.连接数据库</span></span>
<span class="line">    conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                           port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span></span>
<span class="line">                           user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                           password<span class="token operator">=</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                           db<span class="token operator">=</span><span class="token string">&#39;day1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                           charset<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 2.通过连接产生游标</span></span>
<span class="line">    cur <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span>cursor<span class="token operator">=</span>pymysql<span class="token punctuation">.</span>cursors<span class="token punctuation">.</span>DictCursor<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># cursor默认不传参获取数据是元组格式,</span></span>
<span class="line">    <span class="token comment"># pymysql.cursors.DictCursor读取数据是列表套字段的格式</span></span>
<span class="line">    <span class="token comment"># 3.读取表中数据</span></span>
<span class="line">    sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39; select * from student;&#39;&#39;&#39;</span>  <span class="token comment"># 获取数据库student表中所有数据</span></span>
<span class="line">    cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>  <span class="token comment"># 执行sql语句</span></span>
<span class="line">    <span class="token comment"># 4.获取数据</span></span>
<span class="line">    data_list <span class="token operator">=</span> cur<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获取到操作的数据</span></span>
<span class="line">    <span class="token keyword">return</span> data_list</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>前端+后端+数据库</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"><span class="token keyword">from</span> jinja2 <span class="token keyword">import</span> Template</span>
<span class="line"><span class="token keyword">import</span> pymysql</span>
<span class="line"></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建套接字</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 绑定地址</span></span>
<span class="line">server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># 被动等待连接</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_users</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 1.连接数据库</span></span>
<span class="line">    conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                           port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span></span>
<span class="line">                           user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                           password<span class="token operator">=</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                           db<span class="token operator">=</span><span class="token string">&#39;day1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                           charset<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 2.通过连接产生游标</span></span>
<span class="line">    cur <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span>cursor<span class="token operator">=</span>pymysql<span class="token punctuation">.</span>cursors<span class="token punctuation">.</span>DictCursor<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># cursor默认不传参获取数据是元组格式,</span></span>
<span class="line">    <span class="token comment"># pymysql.cursors.DictCursor读取数据是列表套字段的格式</span></span>
<span class="line">    <span class="token comment"># 3.读取表中数据</span></span>
<span class="line">    sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39; select * from student;&#39;&#39;&#39;</span>  <span class="token comment"># 获取数据库student表中所有数据</span></span>
<span class="line">    cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>  <span class="token comment"># 执行sql语句</span></span>
<span class="line">    <span class="token comment"># 4.获取数据</span></span>
<span class="line">    data_list <span class="token operator">=</span> cur<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获取到操作的数据</span></span>
<span class="line">    <span class="token keyword">return</span> data_list</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回html页面</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">python</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># users = {&#39;name&#39;: &#39;qingqing&#39;, &#39;age&#39;: 18}</span></span>
<span class="line">    data_list <span class="token operator">=</span> get_users<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># [{id:..., name: , age:...}]</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;python.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        s <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 读取文件</span></span>
<span class="line">    tem <span class="token operator">=</span> Template<span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># 模板处理</span></span>
<span class="line">    res <span class="token operator">=</span> tem<span class="token punctuation">.</span>render<span class="token punctuation">(</span>a<span class="token operator">=</span>data_list<span class="token punctuation">)</span>  <span class="token comment"># 调用render函数传递数据</span></span>
<span class="line">    <span class="token keyword">return</span> res<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 普通数据</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    s <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 文件</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">java</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;a.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        s <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 后缀和函数的对应关系</span></span>
<span class="line"><span class="token comment"># 列表</span></span>
<span class="line">list1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">&#39;/python/&#39;</span><span class="token punctuation">,</span> python<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">&#39;/java/&#39;</span><span class="token punctuation">,</span> java<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">&#39;/index/&#39;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    conn<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 接收客户端连接,产生为这个客户端服务的套接字,以及客户端地址</span></span>
<span class="line">    data <span class="token operator">=</span> conn<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>  <span class="token comment"># 接收客户端数据</span></span>
<span class="line">    data <span class="token operator">=</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    path <span class="token operator">=</span> data<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line">    conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">b&#39;HTTP/1.1 200 OK\\r\\n\\r\\n&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    func <span class="token operator">=</span> <span class="token boolean">None</span>  <span class="token comment"># 用来存储要执行的函数名字</span></span>
<span class="line">    <span class="token comment"># 循环列表</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> list1<span class="token punctuation">:</span>  <span class="token comment"># 判断当前循环(&#39;/python/&#39;, python)</span></span>
<span class="line">        <span class="token keyword">if</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> path<span class="token punctuation">:</span></span>
<span class="line">            func <span class="token operator">=</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">break</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> func<span class="token punctuation">:</span></span>
<span class="line">        res <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        res <span class="token operator">=</span> <span class="token string">b&#39;404 not found&#39;</span></span>
<span class="line">    conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 浏览器可以充当任何服务器的客户端</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="django准备" tabindex="-1"><a class="header-anchor" href="#django准备"><span>django准备</span></a></h1><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 必须下载制定版本</span></span>
<span class="line">pip install django<span class="token operator">==</span><span class="token number">4.2</span></span>
<span class="line">pip install mysqlclient</span>
<span class="line"></span>
<span class="line"><span class="token comment"># python环境最好用python3.8及以上</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 第三方库下载失败怎么办:</span></span>
<span class="line"><span class="token comment"># 1.加上镜像文件下载 pip install mysqlclient -i https://pypi.tuna.tsinghua.edu.cn/simple/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2.去管网下载源文件之后pip install 源文件地址/源文件名</span></span>
<span class="line"><span class="token comment"># 下载地址:https://pypi.org/project/mysqlclient/2.2.4/#files</span></span>
<span class="line"><span class="token comment"># 下载对应python版本的库</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)])])}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/django/01-web%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"搭建web框架","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"访问不同的数据","slug":"访问不同的数据","link":"#访问不同的数据","children":[]},{"level":2,"title":"传递数据给html页面","slug":"传递数据给html页面","link":"#传递数据给html页面","children":[]}],"git":{},"filePathRelative":"django/01-web服务器.md"}');export{o as comp,u as data};
