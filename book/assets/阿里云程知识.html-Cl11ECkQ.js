import{_ as s,c as a,a as e,o as l}from"./app-oYpRxrJy.js";const i={};function p(t,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h4 id="购买服务器" tabindex="-1"><a class="header-anchor" href="#购买服务器"><span>购买服务器</span></a></h4><blockquote><p>登录阿里云 <a href="https://www.aliyun.com/minisite/goods?taskPkg=1111ydsrwb&amp;pkgSid=80731&amp;recordId=1569640" target="_blank" rel="noopener noreferrer">购买地址</a></p></blockquote><ol><li><code>ECS突发性能型t6是标准的ecs服务器</code>个人是够用的</li><li>点击更多购买 =&gt; 弹出其他的选项</li><li>地域与可用区 <ol><li>国外不需要备案, 国内需要备案</li><li>不同地域的实例之间内网互不相通；选择靠近您客户的地域，可降低网络时延、提高您客户的访问速度</li></ol></li><li>操作系统 <ol><li>分为 windows 和 Linux =&gt; 不建议使用 window系统 会卡顿</li><li>选择 Ubuntu</li></ol></li><li>专有网络 <ol><li>不需要改动</li></ol></li><li>虚拟交互机 <ol><li>不需要改动</li></ol></li></ol><h4 id="链接服务器" tabindex="-1"><a class="header-anchor" href="#链接服务器"><span>链接服务器</span></a></h4><h5 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件"><span>上传文件</span></a></h5><ol><li><code>ECS</code>服务器链接 上传文件 fileZilla <ol><li>fileZilla 下载地址客服端 <ol><li>https://www.filezilla.cn/download?spm=5176.10173289.help.12.74e62e771DFWow</li></ol></li><li>链接服务器可以通过浏览器窗口链接</li><li>也可以通过putty链接 <ol><li>putty软件下载地址 https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html</li></ol></li></ol></li><li>轻量级链接 <ol><li>上传文件 fileZilla 软件</li><li>链接服务器可以通过浏览器窗口链接</li><li>putty链接服务器</li></ol></li></ol><h5 id="filezilla配置使用" tabindex="-1"><a class="header-anchor" href="#filezilla配置使用"><span>FileZilla配置使用</span></a></h5><ul><li>主机: 端口</li><li>用户名: root</li><li>密码: 服务器密码</li><li>端口:22</li><li>后续选择性上传文件</li></ul><h5 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作"><span>远程操作</span></a></h5><p>putty配置说明</p><ol><li><strong>Host Name(or IP address)</strong>：轻量应用服务器的公网IP。例如：<code>121.40.XX.XX</code></li><li><strong>Port</strong>：22。</li><li><strong>Connection type</strong>：SSH。</li><li><strong>可选：**<strong>Saved Sessions</strong>：输入一个便于识别的名称，然后单击</strong>Save**即可保存会话，下次登录时无需输入公网IP等信息</li><li>图片详情 https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/3623460261/p272274.png</li><li>单击<strong>Open</strong> 首次连接时会出现<strong>PuTTY Security Alert</strong>警告，表示PuTTY无法确认远程服务器的真实性，只能提供服务器的公钥指纹。选择<strong>是</strong>，表示您信任该服务器</li><li>在命令行中输入Linux服务器的系统用户<code>root</code>，然后按Enter键。</li><li>在命令行中输入Linux服务器的登录密码，然后按Enter键</li></ol><h4 id="购买域名-解析-备案" tabindex="-1"><a class="header-anchor" href="#购买域名-解析-备案"><span>购买域名,解析,备案</span></a></h4><ol><li>阿里云搜索域名 <ol><li>购买域名付款 =&gt; 点击域名</li></ol></li><li>解析设置 =&gt; 全部域名 选择对应域名解析 <ol><li>添加记录 <ol><li>记录类型 <ol><li>不需要填写</li></ol></li><li>主机记录输入 <ol><li>www 解析后的域名为 http://www.laixinen.vip 地址栏输入才能访问</li><li>@ 直接解析主域名 http://laixinen.vip 不需要输入www就可以访问</li></ol></li><li>解析线路不需要改动</li><li>记录值 <ol><li>公网 iP 地址</li></ol></li><li>TTL 不需要改动</li></ol></li></ol></li><li>备案 =&gt; 搜索备案 <ol><li>按照流程备案</li></ol></li><li>轻量级服务器解析 <ol><li>在域名的添加域名中添加 内网ip地址即可解析成功</li></ol></li></ol><h4 id="配置ecs服务器与轻量级" tabindex="-1"><a class="header-anchor" href="#配置ecs服务器与轻量级"><span>配置<code>ecs</code>服务器与轻量级</span></a></h4><ul><li>​ 配置安全组 <ul><li>授权对象 0.0.0.0/0 表示所有人都可以访问</li><li>端口 必须配置 HTTP(80)、 HTTPS (443)端端口 用于网页访问</li><li>端口 22端口 SSH远程连接 =&gt; 本地链接发送数据</li></ul></li><li>轻量级服务是防火墙自动配置</li><li>安全组规则 <ul><li>https://help.aliyun.com/document_detail/25471.html?spm=a2c6h.13066369.0.0.11d72bbfnNgnlb</li></ul></li></ul><h4 id="服务器初始操作" tabindex="-1"><a class="header-anchor" href="#服务器初始操作"><span>服务器初始操作</span></a></h4><p>链接到服务器之后 <code>sudo apt update</code> 更新数据包</p><blockquote><p><code>nginx</code> 操作命令</p></blockquote><ul><li><code>apt install nginx</code> 安装 <code>nginx</code> 开启服务</li><li><code>nginx</code> 是一个 HTTP 和反向代理服务器、一个邮件代理服务器和一个通用的 <code>TCP/UDP </code>代理服务</li><li>sudo apt-get remove nginx nginx-common # 卸载删除除了配置文件以外的所有文件。</li><li>sudo apt-get purge nginx nginx-common # 卸载所有东东，包括删除配置文件。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">######启动Nginx服务</span>
<span class="line"><span class="token punctuation">[</span>root@typecodes <span class="token operator">~</span><span class="token punctuation">]</span># service nginx start</span>
<span class="line">######停止Nginx服务</span>
<span class="line"><span class="token punctuation">[</span>root@typecodes <span class="token operator">~</span><span class="token punctuation">]</span># service nginx stop</span>
<span class="line">######重启Nginx服务</span>
<span class="line"><span class="token punctuation">[</span>root@typecodes <span class="token operator">~</span><span class="token punctuation">]</span># service nginx restart</span>
<span class="line">######Nginx服务的状态</span>
<span class="line"><span class="token punctuation">[</span>root@typecodes <span class="token operator">~</span><span class="token punctuation">]</span># service nginx status</span>
<span class="line">######在Nginx服务启动的状态下，重新加载nginx<span class="token punctuation">.</span>conf这个配置文件</span>
<span class="line"><span class="token punctuation">[</span>root@typecodes <span class="token operator">~</span><span class="token punctuation">]</span># service nginx reload</span>
<span class="line"> </span>
<span class="line"> nginx <span class="token operator">-</span>v  查看版本号</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="服务器文件地址" tabindex="-1"><a class="header-anchor" href="#服务器文件地址"><span>服务器文件地址</span></a></h5><blockquote><p>放置在home目录 或 root目录中</p></blockquote><h6 id="使用-nginx" tabindex="-1"><a class="header-anchor" href="#使用-nginx"><span>使用 <code>nginx</code></span></a></h6><blockquote><p>展示home目录静态页面</p></blockquote><ol><li><p>找到 <code>etc/nginx/nginx.conf</code> 文件 使用<code>txt</code> 或编辑器打开</p><ol><li>user root;</li></ol></li><li><p>修改文件中第一行 user 后面改成 root =&gt; user 书写管理员信息</p></li><li><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">#服务器信息配置</span>
<span class="line">server {</span>
<span class="line">    listen 80;  #监听的端口号</span>
<span class="line">    server_name  47.106.99.105;  #监听地址 </span>
<span class="line">    </span>
<span class="line">    # 这是注释, 访问根路由</span>
<span class="line">    location / {</span>
<span class="line">         # root 设置路径查找路径</span>
<span class="line">         root  /home/;</span>
<span class="line">         </span>
<span class="line">         #index  设置默认页</span>
<span class="line">         index index.html;</span>
<span class="line">         </span>
<span class="line">      	 #域名  共同使用80端口,通过不同的servername来区分不同的网站项目</span>
<span class="line">      	 server_name web.com;</span>
<span class="line">         </span>
<span class="line">         #拒绝的ip</span>
<span class="line">         deny 127.0.0.1;  </span>
<span class="line"> 	}</span>
<span class="line"> 	# 设置代理</span>
<span class="line"> 	location /api/ {</span>
<span class="line">        proxy_pass http://music.zzhitong.com/;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">server {</span>
<span class="line">  	listen 80;  #监听的端口号 </span>
<span class="line">  	server_name  laixinen.vip www.laixinen.vip;  #监听地址</span>
<span class="line">  	location / {</span>
<span class="line">  		# root 设置路径查找路径</span>
<span class="line">        root  /home/public/;</span>
<span class="line">             </span>
<span class="line">        #需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404</span>
<span class="line">        try_files $uri $uri/ @router;</span>
<span class="line">     	#index  设置默认页</span>
<span class="line">        index index.html;</span>
<span class="line"> 	}</span>
<span class="line"> 	</span>
<span class="line">    #配置多个</span>
<span class="line">    location /node/ {</span>
<span class="line">         # 匹配到后转发到这个域名地址</span>
<span class="line">         proxy_pass localhost:80;</span>
<span class="line">     }</span>
<span class="line">     </span>
<span class="line">     location /api/ {</span>
<span class="line">         # 匹配到后转发到这个域名地址</span>
<span class="line">         proxy_pass http://music.zzhitong.com/;</span>
<span class="line">     }</span>
<span class="line">      	#对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件</span>
<span class="line"> 		#因此需要rewrite到index.html中，然后交给路由在处理请求资源</span>
<span class="line"> 	location @router {</span>
<span class="line">      	rewrite ^.*$ /index.html last;</span>
<span class="line">  	}</span>
<span class="line">  </span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>nginx 重启(启动) service nginx restart </code></p></li><li><p>配置压缩</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">#开启Gzip  配置压缩文件</span>
<span class="line">gzip on<span class="token punctuation">;</span></span>
<span class="line">#不压缩临界值，大于100K的才压缩，这个按需改，压缩要消耗cpu资源</span>
<span class="line">gzip_min_length 100k<span class="token punctuation">;</span></span>
<span class="line">#压缩在内存中缓冲几块<span class="token operator">?</span> 每块多大<span class="token operator">?</span></span>
<span class="line">gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span></span>
<span class="line">#默认是<span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>，用了反向代理的话，末端通信是<span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.0</span></span>
<span class="line">gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span></span>
<span class="line">#压缩级别，<span class="token number">1</span><span class="token operator">-</span><span class="token number">10</span>，数字越大压缩的越好，时间也越长</span>
<span class="line">gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">#进行压缩的文件类型  image<span class="token operator">/</span>jpeg image<span class="token operator">/</span>gif image<span class="token operator">/</span>png  图片建议不压缩，</span>
<span class="line">gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>javascript text<span class="token operator">/</span>cssapplication<span class="token operator">/</span>xml application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml text<span class="token operator">/</span>javascript image<span class="token operator">/</span>jpeg image<span class="token operator">/</span>gif image<span class="token operator">/</span>png application<span class="token operator">/</span>x<span class="token operator">-</span>httpd<span class="token operator">-</span>php<span class="token punctuation">;</span></span>
<span class="line">#on 的话会在Header里增加<span class="token string">&quot;Vary: Accept-Encoding&quot;</span></span>
<span class="line">gzip_vary on<span class="token punctuation">;</span></span>
<span class="line">#<span class="token constant">IE6</span>对Gzip不怎么友好，不给它Gzip了</span>
<span class="line">gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h5 id="node后端" tabindex="-1"><a class="header-anchor" href="#node后端"><span>node后端</span></a></h5><p>服务器中有一个<code>apt</code> 包管理器 相当于 <code>npm</code></p><ol><li><p>apt update 更新数据包</p></li><li><p><code>apt install npm</code> 安装 <code>npm </code> 用于 <code>npm </code> 安装 node安装包</p></li><li><p><code>npm install -g n</code> n 是安装node的包</p></li><li><p>n 10.16.0 下载对应版本的node</p></li><li><p><code>n latest</code> 下载最新版本</p></li><li><p><code>n uninstall</code> 删除node</p></li><li><p><code>apt install mongodb</code> 安装数据库</p><p><code> mongo --version</code> 查找<code>mongodb</code>的版本 也是查看是否安装</p><p><code>service mongodb status</code> 查看<code>mongodb</code> 运行状态 running 运行中</p><p><code>service mongodb stop</code> 停止运行 <code>mongoodb</code> inactive 停止</p><p><code>service mongodb start</code> 启动 <code>mongoodb</code></p></li><li><p>ls 打印文件夹目录</p></li></ol><p>apt-get install -y mongodb-org</p><p>操作系统命令</p><h6 id="服务器管理命令" tabindex="-1"><a class="header-anchor" href="#服务器管理命令"><span>服务器管理命令</span></a></h6><ol><li>apt remove &lt;软件包名&gt;用来卸载指定软件</li><li>apt install &lt;软件包名&gt;</li><li>apt update 更新数据包</li><li>apt autoremove 用来自动清理不再使用的依赖和库文件</li><li>apt list --installed：显示已安装的软件包。</li></ol><h6 id="pm2运行命令" tabindex="-1"><a class="header-anchor" href="#pm2运行命令"><span>pm2运行命令</span></a></h6><ol><li><p><code>npm install pm2 -g </code> 下载pm2</p></li><li><p><code>pm2 start 文件 </code> 启动</p></li><li><p><code>pm2 stop 停止</code></p></li><li><p><code>pm2 stop id名 </code>关闭程序</p></li><li><p>n install node 和 apt install <code>npm</code> 的 冲突时 使用 apt update 更新到新版本 或 n latest 最新版本</p><p>​</p></li></ol><h4 id="获取服务器mongodb数据" tabindex="-1"><a class="header-anchor" href="#获取服务器mongodb数据"><span>获取服务器<code>mongodb</code>数据</span></a></h4><p>mongodb数据库启动后，默认只能在本地使用，端口为27017，那么如何设置让它可以远程访问呢？</p><p>1.修改配置文件mongodb.conf</p><p>文件地址 <code>/etc/mongodb.conf</code> 把 bind_ip =127.0.0.1 这一行注释掉或者是修改成 bind_ip=0.0.0.0，</p><ol start="2"><li>服务器中重启mongodb</li><li>mongo compass等可视化工具来连接 mongodb://ip地址:27017</li><li>链接成功</li></ol><p>如果不成功</p><ul><li>配置 27017安全组 入出</li><li>配置 node项目端口安全组 入出</li><li>关闭 <code>nginx</code></li><li></li></ul><p>​</p><p>​</p><h4 id="web-strom上传文件" tabindex="-1"><a class="header-anchor" href="#web-strom上传文件"><span>web Strom上传文件</span></a></h4><p><code>ubantu </code>操作系统</p><p>点击 tools =&gt; deployment =&gt; configuration 创建 <code>sftp</code> 文件</p><ul><li><code>sftp</code> 安全文件传送协议</li><li>Browse Remote Host 浏览远程主机 文件目录</li></ul><h5 id="sftp-文件" tabindex="-1"><a class="header-anchor" href="#sftp-文件"><span><code>sftp</code> 文件</span></a></h5><p>​ 创建 <code>sftp</code> 文件输入对应数据 SSH远程连接 22端口</p><p>​ host =&gt; 公网 <code>IP</code> 地址</p><p>​ User name =&gt; 服务器 root管理员名称</p><p>​ password =&gt; 服务器密码</p><h5 id="链接之后" tabindex="-1"><a class="header-anchor" href="#链接之后"><span>链接之后</span></a></h5><p>或者直接点击 tools =&gt; Start SSH Session 开始SSH会话 直接链接服务器</p><p><strong>公网<code>ip </code>服务器没有启动是访问不到的</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">#开启Gzip  配置压缩文件</span>
<span class="line">	gzip on<span class="token punctuation">;</span></span>
<span class="line">	#不压缩临界值，大于100K的才压缩，这个按需改，压缩要消耗cpu资源</span>
<span class="line">	gzip_min_length 100k<span class="token punctuation">;</span></span>
<span class="line">	#压缩在内存中缓冲几块<span class="token operator">?</span> 每块多大<span class="token operator">?</span></span>
<span class="line">	gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span></span>
<span class="line">	#默认是<span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>，用了反向代理的话，末端通信是<span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.0</span></span>
<span class="line">	gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span></span>
<span class="line">	#压缩级别，<span class="token number">1</span><span class="token operator">-</span><span class="token number">10</span>，数字越大压缩的越好，时间也越长</span>
<span class="line">	gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">	#进行压缩的文件类型  image<span class="token operator">/</span>jpeg image<span class="token operator">/</span>gif image<span class="token operator">/</span>png  图片建议不压缩，</span>
<span class="line">	gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>javascript text<span class="token operator">/</span>cssapplication<span class="token operator">/</span>xml application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml text<span class="token operator">/</span>javascript image<span class="token operator">/</span>jpeg image<span class="token operator">/</span>gif image<span class="token operator">/</span>png application<span class="token operator">/</span>x<span class="token operator">-</span>httpd<span class="token operator">-</span>php<span class="token punctuation">;</span></span>
<span class="line">	#on 的话会在Header里增加<span class="token string">&quot;Vary: Accept-Encoding&quot;</span></span>
<span class="line">	gzip_vary on<span class="token punctuation">;</span></span>
<span class="line">	#<span class="token constant">IE6</span>对Gzip不怎么友好，不给它Gzip了</span>
<span class="line">	gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	# gzip_vary on<span class="token punctuation">;</span></span>
<span class="line">	# gzip_proxied any<span class="token punctuation">;</span></span>
<span class="line">	# gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">	# gzip_buffers <span class="token number">16</span> 8k<span class="token punctuation">;</span></span>
<span class="line">	# gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span></span>
<span class="line">	# gzip_types text<span class="token operator">/</span>plain text<span class="token operator">/</span>css application<span class="token operator">/</span>json application<span class="token operator">/</span>javascript text<span class="token operator">/</span>xml application<span class="token operator">/</span>xml application<span class="token operator">/</span>xml<span class="token operator">+</span>rss text<span class="token operator">/</span>javascript<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	##</span>
<span class="line">	# Virtual Host Configs</span>
<span class="line">	##</span>
<span class="line"></span>
<span class="line">	include <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token comment">/*.conf;</span>
<span class="line">	include /etc/nginx/sites-enabled/*;</span>
<span class="line"></span>
<span class="line">    server {</span>
<span class="line">        listen 80; </span>
<span class="line">        server_name  laixinen.vip www.laixinen.vip;   </span>
<span class="line">        root  /home/public/;</span>
<span class="line">        </span>
<span class="line">        location / {</span>
<span class="line">            # 需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404</span>
<span class="line">            try_files $uri $uri/ @router;</span>
<span class="line"></span>
<span class="line">            index index.html;</span>
<span class="line"></span>
<span class="line">            # 代理请求</span>
<span class="line">            proxy_pass http://localhost:90/;</span>
<span class="line"></span>
<span class="line">          </span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        #   对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件</span>
<span class="line">        #   因此需要rewrite到index.html中，然后交给路由在处理请求资源</span>
<span class="line">        location @router {</span>
<span class="line">            rewrite ^.*$ /index.html last;</span>
<span class="line">        }</span>
<span class="line">		</span>
<span class="line">        location /api/ {</span>
<span class="line">            proxy_pass http://music.zzhitong.com/;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        location /qqq/ {</span>
<span class="line">            proxy_pass http://localhost:90/;</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">    }</span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// 配置多个项目   设置对应的端口   需要配置安全组</span></span>
<span class="line"></span>
<span class="line">	server <span class="token punctuation">{</span></span>
<span class="line">			listen <span class="token number">80</span><span class="token punctuation">;</span> </span>
<span class="line">			server_name  <span class="token number">8.134</span><span class="token number">.39</span><span class="token number">.58</span><span class="token punctuation">;</span>   </span>
<span class="line">			</span>
<span class="line">			location <span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">					alias   <span class="token operator">/</span>home<span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>vv<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">					# 需要指向下面的@router否则会出现vue的路由在nginx中刷新出现<span class="token number">404</span></span>
<span class="line">					try_files $uri $uri<span class="token operator">/</span> @router<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">					index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">			#   对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件</span>
<span class="line">			#   因此需要rewrite到index<span class="token punctuation">.</span>html中，然后交给路由在处理请求资源</span>
<span class="line">			location @router <span class="token punctuation">{</span></span>
<span class="line">					rewrite <span class="token operator">^</span><span class="token punctuation">.</span><span class="token operator">*</span>$ <span class="token operator">/</span>index<span class="token punctuation">.</span>html last<span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">			location <span class="token operator">/</span>vpi<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">					proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">localhost:8000</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">			</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	server <span class="token punctuation">{</span></span>
<span class="line">			listen <span class="token number">88</span><span class="token punctuation">;</span> </span>
<span class="line">			server_name  <span class="token number">8.134</span><span class="token number">.39</span><span class="token number">.58</span><span class="token punctuation">;</span>   </span>
<span class="line">			</span>
<span class="line">			location <span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">					alias   <span class="token operator">/</span>home<span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>rea<span class="token operator">/</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">					# 需要指向下面的@router否则会出现vue的路由在nginx中刷新出现<span class="token number">404</span></span>
<span class="line">					try_files $uri $uri<span class="token operator">/</span> @router<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">					index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">			#   对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件</span>
<span class="line">			#   因此需要rewrite到index<span class="token punctuation">.</span>html中，然后交给路由在处理请求资源</span>
<span class="line">			location @router <span class="token punctuation">{</span></span>
<span class="line">					rewrite <span class="token operator">^</span><span class="token punctuation">.</span><span class="token operator">*</span>$ <span class="token operator">/</span>index<span class="token punctuation">.</span>html last<span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">			location <span class="token operator">/</span>api<span class="token operator">/</span> <span class="token punctuation">{</span></span>
<span class="line">					proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">localhost:8000</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">			</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57)])])}const o=s(i,[["render",p]]),r=JSON.parse('{"path":"/node/%E9%98%BF%E9%87%8C%E4%BA%91%E7%A8%8B%E7%9F%A5%E8%AF%86.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"node/阿里云程知识.md"}');export{o as comp,r as data};
