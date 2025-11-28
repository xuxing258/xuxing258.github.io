import{_ as s,c as a,a as p,o as e}from"./app-oYpRxrJy.js";const l={};function t(i,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="面向对象三大特征——封装" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征——封装"><span>面向对象三大特征——封装</span></a></h1><h2 id="上节课回顾" tabindex="-1"><a class="header-anchor" href="#上节课回顾"><span>上节课回顾</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">编程范式:</span>
<span class="line">    面向过程:</span>
<span class="line">        以过程(函数)为核心的编程,需要自己考虑每一步的细节,侧重步骤和过程的实现</span>
<span class="line">    面向对象:</span>
<span class="line">        以对象(类的实例)为核心的编程,直接使用已经存在的对象,使用对象中的数据以及方法</span>
<span class="line">        侧重点结果和对象的调用</span>
<span class="line"></span>
<span class="line">类和对象:</span>
<span class="line">    类:</span>
<span class="line">        是一个抽象的概念 生活中的类别 有属性以及方法(创建对象的模版)</span>
<span class="line">    对象:</span>
<span class="line">        是一个拥有特征以及行为的实体 通过类的实例创建 对象有独立的属性和方法</span>
<span class="line"></span>
<span class="line">语法:</span>
<span class="line">    类的创建(class): # 大驼峰命名法</span>
<span class="line">    class 类名:</span>
<span class="line">        属性</span>
<span class="line">        方法</span>
<span class="line"></span>
<span class="line">    对象的创建:类的实例化</span>
<span class="line">        对象名 = 类名()</span>
<span class="line"></span>
<span class="line">    __init__(self) 初始化方法:</span>
<span class="line">        该方法在类实例化的时候自动执行</span>
<span class="line">        用来设置对象的自身属性</span>
<span class="line"></span>
<span class="line">    self:</span>
<span class="line">        表示对象本身 调用当前的方法的那个对象</span>
<span class="line"></span>
<span class="line">    实例属性:是对象自己独有的属性,互不共享</span>
<span class="line">    类属性:是对象共有的</span>
<span class="line"></span>
<span class="line">    类文档:</span>
<span class="line">        对整个类进行说明</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">作业：</span>
<span class="line">尝试自定义一个手机类 (Phone)</span>
<span class="line">  实例属性：</span>
<span class="line">    brand # 手机品牌</span>
<span class="line">    model # 手机型号</span>
<span class="line">    color # 颜色</span>
<span class="line">    price # 价格</span>
<span class="line">    ...</span>
<span class="line">  方法：</span>
<span class="line">  	describe(self) # 会介绍该手机的品牌，型号，颜色，价格</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">    这是一个手机类</span>
<span class="line">    属性:品牌，型号，颜色，价格</span>
<span class="line">    方法:介绍对象的属性数据</span>
<span class="line">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 类属性 来记录实例了多个手机对象</span></span>
<span class="line">    count <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> brand<span class="token punctuation">,</span> model<span class="token punctuation">,</span> color<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>brand <span class="token operator">=</span> brand</span>
<span class="line">        self<span class="token punctuation">.</span>model <span class="token operator">=</span> model</span>
<span class="line">        self<span class="token punctuation">.</span>color <span class="token operator">=</span> color</span>
<span class="line">        self<span class="token punctuation">.</span>price <span class="token operator">=</span> price</span>
<span class="line">        Phone<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">describe</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        info <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;手机品牌: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>brand<span class="token punctuation">}</span></span><span class="token string">\\n手机型号: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>model<span class="token punctuation">}</span></span><span class="token string">\\n手机颜色: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>color<span class="token punctuation">}</span></span><span class="token string">\\n手机价格: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>price<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建了一个对象</span></span>
<span class="line">oy <span class="token operator">=</span> Phone<span class="token punctuation">(</span><span class="token string">&quot;iPnone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;黑色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4999&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 通过对象调用方法</span></span>
<span class="line">oy<span class="token punctuation">.</span>describe<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">sj <span class="token operator">=</span> Phone<span class="token punctuation">(</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;P70&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;黑色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5999&quot;</span><span class="token punctuation">)</span></span>
<span class="line">sj<span class="token punctuation">.</span>describe<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 查看创建了多少个手机对象</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>Phone<span class="token punctuation">.</span>count<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 查看类文档</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>Phone<span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-面向对象应用示例" tabindex="-1"><a class="header-anchor" href="#_1-面向对象应用示例"><span>1.面向对象应用示例</span></a></h2><ul><li>将数据封装到一个对象中,便于以后使用</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">UserInfo</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        self<span class="token punctuation">.</span>pwd <span class="token operator">=</span> pwd</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    user_object_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment"># 用户注册</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">        user <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;用户名:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> user<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">break</span></span>
<span class="line">        pwd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;密码:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># user_object对象中有:name/pwd</span></span>
<span class="line">        <span class="token comment"># user_object = UserInfo(user, pwd)</span></span>
<span class="line">        user_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> user<span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> pwd<span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment"># user_object_list.append(user_object)</span></span>
<span class="line">        user_object_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>user_dict<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 展示用户信息</span></span>
<span class="line">    <span class="token keyword">for</span> obj <span class="token keyword">in</span> user_object_list<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span><span class="token string">&quot;pwd&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span></span>
<span class="line">    run<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根据类创建多个对象,在方法中对对象中的数据进行修改</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GameRole</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;游戏角色&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> blood<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        self<span class="token punctuation">.</span>blood <span class="token operator">=</span> blood</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">show</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token triple-quoted-string string">&quot;&quot;&quot;查看角色状态&quot;&quot;&quot;</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;角色</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">的生命值为:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>blood<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">skill</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> role_object<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token triple-quoted-string string">&quot;&quot;&quot;对于某个角色发动技能&quot;&quot;&quot;</span></span>
<span class="line">        role_object<span class="token punctuation">.</span>blood <span class="token operator">-=</span> <span class="token number">500</span></span>
<span class="line">        role_object<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">range_skill</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> role_list<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token triple-quoted-string string">&quot;&quot;&quot;发送范围技能&quot;&quot;&quot;</span></span>
<span class="line">        <span class="token keyword">for</span> role <span class="token keyword">in</span> role_list<span class="token punctuation">:</span></span>
<span class="line">            role<span class="token punctuation">.</span>blood <span class="token operator">-=</span> <span class="token number">300</span></span>
<span class="line">            role<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">lb <span class="token operator">=</span> GameRole<span class="token punctuation">(</span><span class="token string">&quot;李白&quot;</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span></span>
<span class="line">xy <span class="token operator">=</span> GameRole<span class="token punctuation">(</span><span class="token string">&quot;项羽&quot;</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line">x1 <span class="token operator">=</span> GameRole<span class="token punctuation">(</span><span class="token string">&quot;角色1&quot;</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line">x2 <span class="token operator">=</span> GameRole<span class="token punctuation">(</span><span class="token string">&quot;角色2&quot;</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line">x3 <span class="token operator">=</span> GameRole<span class="token punctuation">(</span><span class="token string">&quot;角色3&quot;</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line">lb<span class="token punctuation">.</span>range_skill<span class="token punctuation">(</span><span class="token punctuation">[</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> x3<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>x1<span class="token punctuation">.</span>blood<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><ul><li>仅做数据封装</li><li>封装数据+方法再对数据进行加工处理</li><li>创建同一类的对象且同类对象可以具有相同的功能(方法)</li></ul><h2 id="_2-封装" tabindex="-1"><a class="header-anchor" href="#_2-封装"><span>2.封装</span></a></h2><p>面向对象的三大特征：封装、继承、多态</p><p>封装是指将数据和操作数据的方法打包在一起，形成一个类。这个类对外部隐藏了其内部的具体实现细节，只暴露一些必要的接口，使得对象的使用者无需关心对象内部是如何实现的。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Bank</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>card<span class="token punctuation">,</span>pwd<span class="token punctuation">,</span>money<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>card <span class="token operator">=</span> card</span>
<span class="line">        self<span class="token punctuation">.</span>pwd <span class="token operator">=</span> pwd</span>
<span class="line">        self<span class="token punctuation">.</span>money <span class="token operator">=</span> money</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">get_money</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>money <span class="token operator">-=</span> value</span>
<span class="line">        data <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;取款:</span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token string">元,账户余额:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>money<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">oy <span class="token operator">=</span> Bank<span class="token punctuation">(</span><span class="token string">&quot;111111&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line">oy<span class="token punctuation">.</span>get_money<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">oy<span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">999999</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>oy<span class="token punctuation">.</span>money<span class="token punctuation">)</span></span>
<span class="line">oy<span class="token punctuation">.</span>get_money<span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-属性隐藏" tabindex="-1"><a class="header-anchor" href="#_2-1-属性隐藏"><span>2.1 属性隐藏</span></a></h3><p>隐藏：刻意将一些属性和方法隐藏在类的内部，使得在使用此类时，无法直接调用这些属性或方法，只能通过未隐藏的类方法间接操作。在Python中使用双下划线开头的方式将属性或方法隐藏起来（设置成私有的），即双下划线前缀。私有成员的名称被修改为：<code>_类名__成员名</code>。</p><p>python中没有绝对的隐藏,可以改变一个访问方式就可以进行访问了</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Bank</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>card<span class="token punctuation">,</span>pwd<span class="token punctuation">,</span>money<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>card <span class="token operator">=</span> card</span>
<span class="line">        self<span class="token punctuation">.</span>pwd <span class="token operator">=</span> pwd</span>
<span class="line">        <span class="token comment"># 隐藏属性</span></span>
<span class="line">        self<span class="token punctuation">.</span>__money <span class="token operator">=</span> money</span>
<span class="line">    <span class="token comment"># 隐藏方法</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__check</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;卡号:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>card<span class="token punctuation">}</span></span><span class="token string">,密码:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>pwd<span class="token punctuation">}</span></span><span class="token string">,余额:</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__money<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># def get_money(self,value):</span></span>
<span class="line">    <span class="token comment">#     self.__money -= value</span></span>
<span class="line">    <span class="token comment">#     data = f&quot;取款:{value}元,账户余额:{self.__money}&quot;</span></span>
<span class="line">    <span class="token comment">#     print(data)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 查看隐藏属性值</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__money</span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 修改的权限</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">set</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>__money <span class="token operator">=</span> value</span>
<span class="line">    <span class="token comment"># 设置删除的权限</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">del</span> self<span class="token punctuation">.</span>__money</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">oy <span class="token operator">=</span> Bank<span class="token punctuation">(</span><span class="token string">&quot;111111&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># print(oy.__money)</span></span>
<span class="line"><span class="token comment"># oy.get_money(200)</span></span>
<span class="line"><span class="token comment"># print(oy.__dict__)</span></span>
<span class="line"><span class="token comment"># 对象名._类名__成员</span></span>
<span class="line"><span class="token comment"># print(oy._Bank__money)</span></span>
<span class="line"><span class="token comment"># oy._Bank__check()</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>oy<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">oy<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>oy<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">oy<span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 删除了隐藏属性__money</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>oy<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-property-函数" tabindex="-1"><a class="header-anchor" href="#_2-2-property-函数"><span>2.2 property()函数</span></a></h3><p>property函数用于创建一个对象，该对象可以作为类属性使用，可以设置、获取、删除对象属性，可以限制用户对属性的获取（访问）与设置(修改)</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token builtin">property</span><span class="token punctuation">(</span>fget <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token punctuation">,</span> fset <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token punctuation">,</span> fdel <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># fget 是获取属性值的方法</span></span>
<span class="line"><span class="token comment"># fset 是设置(修改)属性值的方法</span></span>
<span class="line"><span class="token comment"># fdel 是删除属性值的方法</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Bank</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>card<span class="token punctuation">,</span>pwd<span class="token punctuation">,</span>money<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>card <span class="token operator">=</span> card</span>
<span class="line">        self<span class="token punctuation">.</span>pwd <span class="token operator">=</span> pwd</span>
<span class="line">        <span class="token comment"># 隐藏属性</span></span>
<span class="line">        self<span class="token punctuation">.</span>__money <span class="token operator">=</span> money</span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 查看隐藏属性值</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">get_money</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__money</span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 修改的权限</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">set_moeny</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>__money <span class="token operator">=</span> value</span>
<span class="line">    <span class="token comment"># 设置删除的权限</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">del_money</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">del</span> self<span class="token punctuation">.</span>__money</span>
<span class="line">    <span class="token comment"># property属性代理</span></span>
<span class="line">    <span class="token comment"># property需要有一个变量名,这个变量名就是我们对象访问的名字</span></span>
<span class="line">    money <span class="token operator">=</span> <span class="token builtin">property</span><span class="token punctuation">(</span>fget<span class="token operator">=</span>get_money<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">oy <span class="token operator">=</span> Bank<span class="token punctuation">(</span><span class="token string">&quot;111111&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>oy<span class="token punctuation">.</span>money<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># oy.money = 1000</span></span>
<span class="line"><span class="token comment"># print(oy.money)</span></span>
<span class="line"><span class="token keyword">del</span> oy<span class="token punctuation">.</span>money</span>
<span class="line"><span class="token comment"># print(oy.money)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-property装饰器" tabindex="-1"><a class="header-anchor" href="#_2-3-property装饰器"><span>2.3 property装饰器</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token decorator annotation punctuation">@property</span> 装饰的方法是获取属性值的方法</span>
<span class="line">@属性名<span class="token punctuation">.</span>setter  装饰的方法是设置<span class="token punctuation">(</span>修改<span class="token punctuation">)</span>属性值的方法</span>
<span class="line">@属性名<span class="token punctuation">.</span>deleter 装饰的方法是删除属性值的方法</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Bank</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>card<span class="token punctuation">,</span>pwd<span class="token punctuation">,</span>money<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>card <span class="token operator">=</span> card</span>
<span class="line">        self<span class="token punctuation">.</span>pwd <span class="token operator">=</span> pwd</span>
<span class="line">        <span class="token comment"># 隐藏属性</span></span>
<span class="line">        self<span class="token punctuation">.</span>__money <span class="token operator">=</span> money</span>
<span class="line">    <span class="token comment"># 设置访问的权限</span></span>
<span class="line">    <span class="token decorator annotation punctuation">@property</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">money</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__money</span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 修改的权限</span></span>
<span class="line">    <span class="token decorator annotation punctuation">@money<span class="token punctuation">.</span>setter</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">money</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>__money <span class="token operator">=</span> value</span>
<span class="line">    <span class="token comment"># 设置删除的权限</span></span>
<span class="line">    <span class="token decorator annotation punctuation">@money<span class="token punctuation">.</span>deleter</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">money</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">del</span> self<span class="token punctuation">.</span>__money</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">oy <span class="token operator">=</span> Bank<span class="token punctuation">(</span><span class="token string">&quot;111111&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>oy<span class="token punctuation">.</span>money<span class="token punctuation">)</span></span>
<span class="line">oy<span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">1000</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>oy<span class="token punctuation">.</span>money<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">del</span> oy<span class="token punctuation">.</span>money</span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>oy<span class="token punctuation">.</span>money<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们有一个表示矩形(rectangle)的类，其中长度(length)和宽度(width)需要验证为正数，并且我们可以通过这个长度和宽度来计算矩形的面积。</p><h2 id="小练习" tabindex="-1"><a class="header-anchor" href="#小练习"><span>小练习</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">设计并实现一个圆<span class="token punctuation">(</span>Circle<span class="token punctuation">)</span>类，用于求圆的面积</span>
<span class="line">    实例属性：</span>
<span class="line">        r<span class="token punctuation">(</span>半径<span class="token punctuation">)</span> 使用 @<span class="token builtin">property</span> 和 @setter 进行权限设置<span class="token punctuation">(</span>验证半径的值为整数以及正数<span class="token punctuation">)</span></span>
<span class="line">    方法：</span>
<span class="line">        <span class="token number">1</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> r<span class="token punctuation">)</span>：初始化圆的半径</span>
<span class="line">        <span class="token number">2.</span>查看方法</span>
<span class="line">        <span class="token number">3.</span>修改方法</span>
<span class="line">        <span class="token number">4.</span>求面积方法<span class="token punctuation">(</span>返回圆的面积<span class="token punctuation">)</span></span>
<span class="line">    验证：</span>
<span class="line">        当设置半径时，如果提供的半径不是正数以及不是整数，则抛出 ValueError 异常。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)])])}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/python/18_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%89%E5%A4%A7%E7%89%B9%E5%BE%81%E2%80%94%E5%B0%81%E8%A3%85.html","title":"面向对象三大特征——封装","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"上节课回顾","slug":"上节课回顾","link":"#上节课回顾","children":[]},{"level":2,"title":"1.面向对象应用示例","slug":"_1-面向对象应用示例","link":"#_1-面向对象应用示例","children":[]},{"level":2,"title":"2.封装","slug":"_2-封装","link":"#_2-封装","children":[{"level":3,"title":"2.1 属性隐藏","slug":"_2-1-属性隐藏","link":"#_2-1-属性隐藏","children":[]},{"level":3,"title":"2.2 property()函数","slug":"_2-2-property-函数","link":"#_2-2-property-函数","children":[]},{"level":3,"title":"2.3 property装饰器","slug":"_2-3-property装饰器","link":"#_2-3-property装饰器","children":[]}]},{"level":2,"title":"小练习","slug":"小练习","link":"#小练习","children":[]}],"git":{},"filePathRelative":"python/18_面向对象三大特征—封装.md"}');export{o as comp,u as data};
