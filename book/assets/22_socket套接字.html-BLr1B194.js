import{_ as s,c as a,a as p,o as t}from"./app-Cbtc5Jwy.js";const e={};function l(c,n){return t(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="socket套接字" tabindex="-1"><a class="header-anchor" href="#socket套接字"><span>socket套接字</span></a></h1><p>​ Socket套接字是计算机网络编程中用于实现网络通信的一种机制。它提供了一种编程接口，使得应用程序能够通过网络进行数据的发送和接收。套接字可用于不同的网络通信协议，如TCP/IP和UDP。</p><p>套接字的主要特点包括：</p><ol><li>客户端和服务器端：套接字可以用于客户端和服务器端之间的通信。客户端套接字发起连接请求，而服务器端套接字等待接收连接请求。</li><li>IP地址和端口：套接字通过IP地址和端口来标识网络上的特定应用程序或进程。IP地址用于标识主机，而端口用于标识特定应用程序。</li><li>通信模式：套接字可以使用不同的通信模式，如面向连接的TCP套接字和无连接的UDP套接字。TCP套接字提供可靠的、面向连接的通信，而UDP套接字提供不可靠的、无连接的通信。</li><li>数据传输：通过套接字可以发送和接收数据。数据可以是字节流（如TCP套接字）或数据报（如UDP套接字）。</li></ol><h2 id="_1-udp套接字" tabindex="-1"><a class="header-anchor" href="#_1-udp套接字"><span>1.UDP套接字</span></a></h2><p><strong>应用层的一种编程方法。</strong></p><ul><li><p><strong>socket()</strong>：创建套接字</p></li><li><p><strong>bind()</strong>：绑定IP端口</p></li><li><p><strong>sendto()</strong>：发送消息</p></li><li><p><strong>recvfrom()</strong>：接受消息</p></li><li><p><strong>close()</strong>：关闭套接字</p></li></ul><p><strong>udp服务端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">服务端</span>
<span class="line">    1.创建套接字</span>
<span class="line">    2.绑定ip端口</span>
<span class="line">    3.发送/接收消息</span>
<span class="line">    4.关闭套接字</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"><span class="token comment"># 导入socket模块</span></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1.创建套接字</span></span>
<span class="line"><span class="token comment"># AF_INET 表示ipv4</span></span>
<span class="line"><span class="token comment"># SOCK_DGRAM 表示选用的UDP模式</span></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2.绑定ip端口</span></span>
<span class="line"><span class="token comment"># 声明服务端的ip和端口号</span></span>
<span class="line"><span class="token comment"># 套接字绑定接收的数据格式是元组</span></span>
<span class="line"><span class="token comment"># 这个元组内的元素是(ip,port)</span></span>
<span class="line">ADDR <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 将声明的地址绑定到套接字上</span></span>
<span class="line"><span class="token comment"># 相当于这个服务给他一个ip,一个端口</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>ADDR<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3.接收消息</span></span>
<span class="line"><span class="token comment"># 1024 一次接收最大的消息字节</span></span>
<span class="line"><span class="token comment"># 第一个返回值:客户端发送过来的消息数据</span></span>
<span class="line"><span class="token comment"># 第二个返回值:客户端的地址(ip以及端口)</span></span>
<span class="line">msg<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span> <span class="token comment"># 阻塞状态</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打印客户端发送的消息</span></span>
<span class="line"><span class="token comment"># decode() 消息解码 解码二进制成unicode</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;接收的客户端消息:&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4.发送消息</span></span>
<span class="line"><span class="token comment"># encode() 消息编码 编码unicode成二进制</span></span>
<span class="line">server<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span><span class="token string">&quot;你好,收到你的消息了&quot;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5.关闭套接字对象</span></span>
<span class="line">server<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>udp客户端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">客户端:</span>
<span class="line">    1.创建套接字</span>
<span class="line">    2.发送/接收消息</span>
<span class="line">    3.关闭套接字</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"><span class="token comment"># 导入socket模块</span></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建套接字</span></span>
<span class="line">client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 发送消息</span></span>
<span class="line">msg <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt;:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">client<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 接收服务端回应的消息</span></span>
<span class="line">data<span class="token punctuation">,</span> addr <span class="token operator">=</span> client<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;服务端回应:&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭套接字对象</span></span>
<span class="line">client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>udp循环服务端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">服务端</span>
<span class="line">    1.创建套接字</span>
<span class="line">    2.绑定ip端口</span>
<span class="line">    3.发送/接收消息</span>
<span class="line">    4.关闭套接字</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"><span class="token comment"># 导入socket模块</span></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1.创建套接字</span></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2.绑定ip端口</span></span>
<span class="line">ADDR <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>ADDR<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 循环接收发消息</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 3.接收消息</span></span>
<span class="line">    msg<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞状态</span></span>
<span class="line">    <span class="token keyword">if</span> msg<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;客户端</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">不点了&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">    <span class="token comment"># 打印客户端发送的消息</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;接收客户端</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">点的菜:&quot;</span></span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 4.发送消息</span></span>
<span class="line">    server<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;你好,收到你点的菜品了</span><span class="token interpolation"><span class="token punctuation">{</span>msg<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">,马上准备&quot;</span></span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5.关闭套接字对象</span></span>
<span class="line">server<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>udp循环客户端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">客户端:</span>
<span class="line">    1.创建套接字</span>
<span class="line">    2.发送/接收消息</span>
<span class="line">    3.关闭套接字</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"><span class="token comment"># 导入socket模块</span></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"><span class="token comment"># 创建套接字</span></span>
<span class="line">client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 循环接收发消息</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 发送消息</span></span>
<span class="line">    msg <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;点菜:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    client<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> msg<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不点了,够吃了&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">    <span class="token comment"># 接收服务端回应的消息</span></span>
<span class="line">    data<span class="token punctuation">,</span> addr <span class="token operator">=</span> client<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">服务端回应:</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭套接字对象</span></span>
<span class="line">client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UDP套接字特点:</strong></p><ul><li>​ <strong>可能会出现数据丢失</strong></li><li>​ <strong>传输过程简单,实现容易</strong></li><li>​ <strong>数据以数据包的形式传输</strong></li><li>​ <strong>数据传输效率高</strong></li></ul><h2 id="_2-tcp套接字" tabindex="-1"><a class="header-anchor" href="#_2-tcp套接字"><span>2.TCP套接字</span></a></h2><h3 id="_2-1-面向连接的传输服务" tabindex="-1"><a class="header-anchor" href="#_2-1-面向连接的传输服务"><span>2.1 面向连接的传输服务</span></a></h3><ul><li>提供了可靠的数据传递,传输过程中无丢失，无失序，无差错，无重复</li><li>可靠性保障机制(自动完成) <ul><li>在通信之前需要建立数据连接</li><li>确认应答机制</li><li>通信结束后正常断开连接</li></ul></li></ul><h3 id="_2-2-三次握手" tabindex="-1"><a class="header-anchor" href="#_2-2-三次握手"><span>2.2 三次握手</span></a></h3><ul><li>客户端向服务器发送报文请求连接</li><li>服务收到请求回复报文可以连接</li><li>客户端收到回复再次发送报文建立连接</li></ul><h3 id="_2-3-四次挥手" tabindex="-1"><a class="header-anchor" href="#_2-3-四次挥手"><span>2.3 四次挥手</span></a></h3><ul><li>发起方发送报文请求断开</li><li>接收方收到请求回复信息收到,并准备断开</li><li>接收方准备完成，再次发送表示可以断开</li><li>发送方收到确定，发送最终消息完成断开</li></ul><p><strong>tcp套接字细节</strong></p><ul><li>tcp连接中一端退出，另一端依然阻塞在recv，此时recv会马上返回一个空字节</li><li>如果一端已经不存在,另一端任然通过send向其发送数据则会产生BrokenPipeError</li><li>一个服务端可以同时连接多个客户端,也能够被重复连接</li></ul><p><strong>TCP编程流程</strong></p><ul><li><strong>socket</strong>：创建套接字</li><li><strong>bind</strong>：绑定地址</li><li><strong>listen</strong>：设置监听</li><li><strong>accept</strong>：等待处理连接</li><li><strong>send/recv</strong>：发送/接受消息</li><li><strong>close</strong>：关闭连接</li></ul><ul><li><strong>connect</strong>: 客户端像服务端发起连接请求</li></ul><h3 id="_2-4-单次通讯" tabindex="-1"><a class="header-anchor" href="#_2-4-单次通讯"><span>2.4 单次通讯</span></a></h3><p><strong>tcp服务端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">    TCP服务端</span>
<span class="line">    1.创建套接字对象 socket</span>
<span class="line">    2.绑定ip端口 bind</span>
<span class="line">    3.设置监听 listen</span>
<span class="line">    4.等待客户端发起连接 accept</span>
<span class="line">    5.发送/接收 send recv</span>
<span class="line">    6.关闭连接对象 close</span>
<span class="line">    7.关闭套接字 close</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"><span class="token comment"># 导入socket</span></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line"><span class="token comment">#  1.创建套接字对象 socket</span></span>
<span class="line"><span class="token comment"># AF_INET ipv4</span></span>
<span class="line"><span class="token comment"># SOCK_STREAM 表示选择tcp套接字</span></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 2.绑定ip端口 bind</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3.设置监听 listen</span></span>
<span class="line"><span class="token comment"># 因为我们在这个中间是需要建立连接的</span></span>
<span class="line"><span class="token comment"># 这个服务端它要一直监听,随时等待客户端连接他</span></span>
<span class="line"><span class="token comment"># 5表示最大的连接数</span></span>
<span class="line">server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;服务端建立成功端口号为8888&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4.等待客户端发起连接 accept</span></span>
<span class="line"><span class="token comment"># 第一个返回值:与客户端建立连接的对象</span></span>
<span class="line"><span class="token comment"># 第二个返回值:客户端的地址</span></span>
<span class="line">conn<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞状态</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;与</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">客户端连接成功&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5.发送/接收 send recv</span></span>
<span class="line"><span class="token comment"># 接收客户端的消息</span></span>
<span class="line"><span class="token comment"># udp:sendto recvfrom 没有建立连接</span></span>
<span class="line"><span class="token comment"># tcp:send recv       建立起来连接</span></span>
<span class="line">data <span class="token operator">=</span> conn<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞状态</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打印客户端的消息</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">客户端点菜:</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 回应客户端</span></span>
<span class="line">conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">菜品收到了,我们的厨师已经在准备了&quot;</span></span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6.关闭连接对象 close</span></span>
<span class="line">conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 7.关闭套接字 close</span></span>
<span class="line">server<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>tcp客户端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">tcp客户端:</span>
<span class="line">    1.创建套接字 socket</span>
<span class="line">    2.发送连接请求 connect</span>
<span class="line">    3.发送/接收 send/recv</span>
<span class="line">    4.关闭套接字 close</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line">client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向服务端发送连接请求</span></span>
<span class="line">client<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;与服务端连接成功&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 发送消息给服务端</span></span>
<span class="line">msg <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;点菜:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span></span>
<span class="line">client<span class="token punctuation">.</span>send<span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 接收服务端的回应</span></span>
<span class="line">data <span class="token operator">=</span> client<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;服务端回应的是:</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭套接字对象</span></span>
<span class="line">client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-循环通讯" tabindex="-1"><a class="header-anchor" href="#_2-5-循环通讯"><span>2.5 循环通讯</span></a></h3><p><strong>tcp服务端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 导入socket</span></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line"><span class="token comment">#  1.创建套接字对象 socket</span></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 2.绑定ip端口 bind</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3.设置监听 listen</span></span>
<span class="line">server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;服务端建立成功端口号为8888&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4.等待客户端发起连接 accept</span></span>
<span class="line">conn<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞状态</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;与</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">客户端连接成功&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 循环收发消息</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 5.发送/接收 send recv</span></span>
<span class="line">    data <span class="token operator">=</span> conn<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞状态</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">not</span> data<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;与</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">客户端断开连接&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 打印客户端的消息</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">客户端点菜:</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 回应客户端</span></span>
<span class="line">    conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">菜品收到了,我们的厨师已经在准备了&quot;</span></span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6.关闭连接对象 close</span></span>
<span class="line">conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 7.关闭套接字 close</span></span>
<span class="line">server<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>tcp客户端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line">client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向服务端发送连接请求</span></span>
<span class="line">client<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;与服务端连接成功&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 循环接收发消息</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 发送消息给服务端</span></span>
<span class="line">    msg <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;点菜:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">not</span> msg<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;请重新点菜&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">continue</span></span>
<span class="line">    <span class="token keyword">if</span> msg<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不点了&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">    <span class="token comment"># tcp协议不允许发送空数据</span></span>
<span class="line">    client<span class="token punctuation">.</span>send<span class="token punctuation">(</span>msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 接收服务端的回应</span></span>
<span class="line">    data <span class="token operator">=</span> client<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;服务端回应的是:</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭套接字对象</span></span>
<span class="line">client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 四次挥手 在python中相当于发送了空数据</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.6服务端再服务</strong></p><p><strong>tcp服务端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 导入socket</span></span>
<span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line"><span class="token comment">#  1.创建套接字对象 socket</span></span>
<span class="line">server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 2.绑定ip端口 bind</span></span>
<span class="line">server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3.设置监听 listen</span></span>
<span class="line">server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;服务端建立成功端口号为8888&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 循环处理下一个客户端</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 4.等待客户端发起连接 accept</span></span>
<span class="line">    conn<span class="token punctuation">,</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞状态</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;与</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">客户端连接成功&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 循环收发消息</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 5.发送/接收 send recv</span></span>
<span class="line">        data <span class="token operator">=</span> conn<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 阻塞状态</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token keyword">not</span> data<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;与</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">客户端断开连接&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">break</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment"># 打印客户端的消息</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>addr<span class="token punctuation">}</span></span><span class="token string">客户端点菜:</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># 回应客户端</span></span>
<span class="line">        conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">菜品收到了,我们的厨师已经在准备了&quot;</span></span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 6.关闭连接对象 close</span></span>
<span class="line">    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 7.关闭套接字 close</span></span>
<span class="line">server<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>tcp客户端代码</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line">client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向服务端发送连接请求</span></span>
<span class="line">client<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;与服务端连接成功&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 循环接收发消息</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 发送消息给服务端</span></span>
<span class="line">    msg <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;点菜:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">not</span> msg<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;请重新点菜&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">continue</span></span>
<span class="line">    <span class="token keyword">if</span> msg<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不点了&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">    <span class="token comment"># tcp协议不允许发送空数据</span></span>
<span class="line">    client<span class="token punctuation">.</span>send<span class="token punctuation">(</span>msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 接收服务端的回应</span></span>
<span class="line">    data <span class="token operator">=</span> client<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;服务端回应的是:</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭套接字对象</span></span>
<span class="line">client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 四次挥手 在python中相当于发送了空数据</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用场景" tabindex="-1"><a class="header-anchor" href="#_3-使用场景"><span><strong>3.使用场景</strong></span></a></h2><ul><li><p><strong>TCP适合对准确要求高，传输数据大的场景</strong></p><ul><li>文件传输:数据下载(电影,音乐)，上传照片，访问网站</li><li>邮件收发</li><li>点对点数据传输:登录，远程，红包，一对一聊天</li></ul></li><li><p><strong>UDP适合可靠性要求相对不高，传输自由的场景</strong></p><ul><li>视频流：直播，视频聊天</li><li>广播：网络广播，群发消息</li><li>实时性要求高：如游戏等</li></ul></li></ul>`,46)])])}const o=s(e,[["render",l]]),u=JSON.parse('{"path":"/python/22_socket%E5%A5%97%E6%8E%A5%E5%AD%97.html","title":"socket套接字","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1.UDP套接字","slug":"_1-udp套接字","link":"#_1-udp套接字","children":[]},{"level":2,"title":"2.TCP套接字","slug":"_2-tcp套接字","link":"#_2-tcp套接字","children":[{"level":3,"title":"2.1 面向连接的传输服务","slug":"_2-1-面向连接的传输服务","link":"#_2-1-面向连接的传输服务","children":[]},{"level":3,"title":"2.2 三次握手","slug":"_2-2-三次握手","link":"#_2-2-三次握手","children":[]},{"level":3,"title":"2.3 四次挥手","slug":"_2-3-四次挥手","link":"#_2-3-四次挥手","children":[]},{"level":3,"title":"2.4 单次通讯","slug":"_2-4-单次通讯","link":"#_2-4-单次通讯","children":[]},{"level":3,"title":"2.5 循环通讯","slug":"_2-5-循环通讯","link":"#_2-5-循环通讯","children":[]}]},{"level":2,"title":"3.使用场景","slug":"_3-使用场景","link":"#_3-使用场景","children":[]}],"git":{},"filePathRelative":"python/22_socket套接字.md"}');export{o as comp,u as data};
