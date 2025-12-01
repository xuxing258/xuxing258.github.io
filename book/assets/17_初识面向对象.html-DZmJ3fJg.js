import{_ as s,c as a,a as e,o as p}from"./app-B89-99AF.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="初识面向对象" tabindex="-1"><a class="header-anchor" href="#初识面向对象"><span>初识面向对象</span></a></h1><h2 id="_1-编程范式" tabindex="-1"><a class="header-anchor" href="#_1-编程范式"><span>1.编程范式</span></a></h2><p>编程范式是指编程语言中用于指导程序结构和设计的模式，它定义了编写程序时的规则、方法和技巧。不同的编程范式提供了不同的视角和方法来组织代码，解决计算问题。</p><p>编程范式:理解为编程的方式</p><p>不同的编程语言就遵循着不同的编程范式,面向对象就是其中的一种</p><h3 id="_1-1-面向过程" tabindex="-1"><a class="header-anchor" href="#_1-1-面向过程"><span>1.1 面向过程</span></a></h3><p>面向过程:以过程为核心的编程,当你想要实现一个功能,分析解决问题的每一个步骤,然后逐步实现</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">办一场婚礼<span class="token punctuation">:</span></span>
<span class="line">    <span class="token number">1.</span>发请柬</span>
<span class="line">    <span class="token number">2.</span>选照片</span>
<span class="line">    <span class="token number">3.</span>找场地</span>
<span class="line">    <span class="token number">4.</span>找厨师</span>
<span class="line">    <span class="token number">5.</span>计划菜品<span class="token punctuation">,</span>购买食材</span>
<span class="line">    <span class="token number">6.</span>制定婚礼流程</span>
<span class="line">    <span class="token number">7.</span>请主任人</span>
<span class="line">    </span>
<span class="line">优点<span class="token punctuation">:</span>所有环节<span class="token punctuation">,</span>细节自己掌控</span>
<span class="line">缺点<span class="token punctuation">:</span>考虑所有细节<span class="token punctuation">,</span>工作量大</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-面向对象" tabindex="-1"><a class="header-anchor" href="#_1-2-面向对象"><span>1.2 面向对象</span></a></h3><p>面向对象:以对象为核心的编程,当你想要实现一个功能,不再考虑每一步细节的实现,更关注谁能帮你完成事情</p><p>(找解决问题的人来帮你实现),自己是指挥者</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">办一场婚礼<span class="token punctuation">:</span></span>
<span class="line">    <span class="token number">1.</span>找摄影公司</span>
<span class="line">    <span class="token number">2.</span>找酒店</span>
<span class="line">    <span class="token number">3.</span>找婚庆公司</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在编程中,不同的编程范式不分好坏,在不同的编程场景中使用不同的编程范式</p><p>初学者在选择编程方式的时候,可以遵循如下的规则:</p><ul><li>面向过程,推荐初学者使用,上手快且逻辑简单清晰</li><li>面向对象,推荐有一些代码经验后使用,面向对象的思想需要有一定项目积累之后才能真正理解精髓,基于面向对象可以编写出拓展性更强的代码,在一定程度上可以简化代码</li></ul><h2 id="_2-类和对象" tabindex="-1"><a class="header-anchor" href="#_2-类和对象"><span>2.类和对象</span></a></h2><h3 id="_2-1-什么是类和对象" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是类和对象"><span>2.1 什么是类和对象</span></a></h3><p>类:一个抽象的概念,生活中的&quot;类别&quot;;在程序中为了创建具有<strong>共同特征</strong>和<strong>行为</strong>的一组对象而定义的一个&quot;模块&quot;</p><p>对象:拥有属性以及行为的实体;在程序中是通过类来创建的,类的具体实例</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token operator">**</span>手机<span class="token operator">**</span></span>
<span class="line">你用的手机就是对象<span class="token punctuation">,</span>手机有特征和行为</span>
<span class="line">特征<span class="token punctuation">:</span></span>
<span class="line">    <span class="token operator">-</span> 品牌<span class="token punctuation">:</span>华为<span class="token punctuation">,</span>小米<span class="token punctuation">,</span>苹果</span>
<span class="line">    <span class="token operator">-</span> 型号</span>
<span class="line">    <span class="token operator">-</span> 芯片</span>
<span class="line">    <span class="token operator">-</span> 颜色</span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">行为<span class="token punctuation">:</span></span>
<span class="line">    <span class="token operator">-</span> 看直播</span>
<span class="line">    <span class="token operator">-</span> 打电话</span>
<span class="line">    <span class="token operator">-</span> 打游戏</span>
<span class="line">    <span class="token operator">-</span> 刷短视频</span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line">猫<span class="token punctuation">(</span>抽象<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">&gt;</span>类</span>
<span class="line"><span class="token operator">-</span> 你朋友养的那只<span class="token number">4</span>岁的白色布偶<span class="token punctuation">,</span>会撒娇<span class="token punctuation">,</span>会后空翻<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">&gt;</span>对象</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">飞机<span class="token punctuation">(</span>类<span class="token punctuation">)</span></span>
<span class="line">小白今天乘坐的那辆客机<span class="token punctuation">(</span>对象<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><p>类是抽象的概念,类别</p><p>对象是具体的事物,个体</p><h3 id="_2-2-创建和使用" tabindex="-1"><a class="header-anchor" href="#_2-2-创建和使用"><span>2.2 创建和使用</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">    类与对象</span>
<span class="line">        类是抽象的概念,类别</span>
<span class="line">            人</span>
<span class="line">            数据(变量)成员:身高/体重...</span>
<span class="line">            行为(函数/方法)成员:吃饭/睡觉...</span>
<span class="line">        对象是具体的事物,个体</span>
<span class="line">            oy</span>
<span class="line">            数据成员:180/70kg</span>
<span class="line">            行为成员:吃饭/睡觉/上课/写代码</span>
<span class="line">            cm</span>
<span class="line">            数据成员:185/75kg</span>
<span class="line">            行为成员:吃饭/睡觉/打游戏/写代码</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义类</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 类名的定义:使用大驼峰的命名方式,首字母大写,如果有多个单词,每个首字符都大写</span></span>
<span class="line"><span class="token keyword">class</span> 类名<span class="token punctuation">:</span></span>
<span class="line">    属性</span>
<span class="line">    方法</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在类中定义方法</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 方法</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;喵喵叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建对象/实例化一个具体的对象</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">语法</span>
<span class="line">类名<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 类的实例化</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 类名的定义:使用大驼峰的命名方式,首字母大写,如果有多个单词,每个首字符都大写</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 方法</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;喵喵叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">paly</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>thing<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;在玩</span><span class="token interpolation"><span class="token punctuation">{</span>thing<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 将Cat类实例之后赋值给一个变量,创建了一个对象</span></span>
<span class="line">xm_cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>xm_cat<span class="token punctuation">)</span> <span class="token comment"># &lt;__main__.Cat object at 0x000002BC4B013C10&gt;</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>xm_cat<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 调用对象的方法</span></span>
<span class="line">xm_cat<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">xm_cat<span class="token punctuation">.</span>paly<span class="token punctuation">(</span><span class="token string">&quot;逗猫棒&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实例多个对象</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 方法</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;喵喵叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">paly</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>thing<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;在玩</span><span class="token interpolation"><span class="token punctuation">{</span>thing<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 实例化创建多个对象</span></span>
<span class="line">c1 <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span> <span class="token comment"># &lt;__main__.Cat object at 0x0000023BC0833C10&gt;</span></span>
<span class="line">c2 <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span> <span class="token comment"># &lt;__main__.Cat object at 0x0000023BC081E760&gt;</span></span>
<span class="line">c3 <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>c3<span class="token punctuation">)</span> <span class="token comment"># &lt;__main__.Cat object at 0x0000023BC081E7F0&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 类在没有实例的时候,执行类里面的代码(预执行)</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;课件休息&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不会打印&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-init-初始化方法" tabindex="-1"><a class="header-anchor" href="#_2-3-init-初始化方法"><span>2.3 __init__ 初始化方法</span></a></h3><p>构造方法 ,魔法方法</p><p>用来设计对象自身属性,该方法不需要手动调用,在实例创建对象的时候会自动执行</p><h3 id="_2-4-self与属性" tabindex="-1"><a class="header-anchor" href="#_2-4-self与属性"><span>2.4 self与属性</span></a></h3><p>self:表示的是对象本身</p><p>本质上就是一个参数,这个参数是python内部会提供的,其实本质上就是调用当前方法的那个对象</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Girlfriend</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 类属性(类属性是所有对象共有的属性)</span></span>
<span class="line">    gender <span class="token operator">=</span> <span class="token string">&quot;女&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>height<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># self是调用当前方法的对象地址</span></span>
<span class="line">        <span class="token comment"># 实例属性</span></span>
<span class="line">        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line">        self<span class="token punctuation">.</span>height <span class="token operator">=</span> height</span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">paly_game</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>game<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">陪你玩</span><span class="token interpolation"><span class="token punctuation">{</span>game<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 通过类创建对象</span></span>
<span class="line">xm <span class="token operator">=</span> Girlfriend<span class="token punctuation">(</span><span class="token string">&quot;小美&quot;</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">175</span><span class="token punctuation">)</span></span>
<span class="line">xm<span class="token punctuation">.</span>paly_game<span class="token punctuation">(</span><span class="token string">&quot;王者荣耀&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># # 实例属性</span></span>
<span class="line"><span class="token comment"># # 通过对象.属性名访问</span></span>
<span class="line"><span class="token comment"># print(xm.name)</span></span>
<span class="line"><span class="token comment"># print(xm.age)</span></span>
<span class="line"><span class="token comment"># # 通过对象.属性名修改值</span></span>
<span class="line"><span class="token comment"># xm.age = 176</span></span>
<span class="line"><span class="token comment"># print(xm.height)</span></span>
<span class="line"><span class="token comment"># 访问类属性</span></span>
<span class="line"><span class="token comment"># # 通过对象.类属性访问</span></span>
<span class="line"><span class="token comment"># print(xm.gender)</span></span>
<span class="line"><span class="token comment"># # 通过类.类属性访问</span></span>
<span class="line"><span class="token comment"># print(Girlfriend.gender)</span></span>
<span class="line"><span class="token comment"># 修改类属性</span></span>
<span class="line"><span class="token comment"># 通过对象.类属性修改值 :给xm对象自己增加了一个实例属性gender</span></span>
<span class="line"><span class="token comment"># xm.gender = &quot;男&quot;</span></span>
<span class="line"><span class="token comment"># print(xm.gender)</span></span>
<span class="line"><span class="token comment"># 通过类.类属性修改值</span></span>
<span class="line"><span class="token comment"># Girlfriend.gender = &quot;男&quot;</span></span>
<span class="line"><span class="token comment"># print(Girlfriend.gender)</span></span>
<span class="line"><span class="token comment"># print(xm.gender)</span></span>
<span class="line"></span>
<span class="line">xh <span class="token operator">=</span> Girlfriend<span class="token punctuation">(</span><span class="token string">&quot;小红&quot;</span><span class="token punctuation">,</span><span class="token number">24</span><span class="token punctuation">,</span><span class="token number">170</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># xh.paly_game(&quot;连连看&quot;)</span></span>
<span class="line"><span class="token comment"># 通过对象.类属性访问</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>xh<span class="token punctuation">.</span>gender<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>Girlfriend<span class="token punctuation">.</span>gender<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性分两种:</p><ul><li><p>实例属性:在<code>__init__</code>里面通过self来的定义的,各个对象独立的</p></li><li><p>类属性:直接定义在类名下面</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">类属性是可以由类和实例都能直接访问<span class="token punctuation">,</span>并且它是创建在类的空间中<span class="token punctuation">,</span>可以用类属性去做记录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>区别总结</p><ul><li><p>定义位置:</p><p>实例属性:在init方法中使用self关键字定义</p><p>类属性:直接在类体内定义,不用使用self关键字定义</p></li><li><p>作用范围:</p><p>实例属性:每个实例都有自己独立的空间,独立的实例属性,互不共享</p><p>类属性:所有实例对象共有的同一个类属性,修改类属性会影响所有的实例对象</p></li><li><p>使用场景:</p><p>实例属性:适用于需要再每个实例中存储不同数据的情况</p><p>类属性:适用于需要所有实例之间共享相同数据的情况</p></li></ul></li></ul><h3 id="_2-5-类文档" tabindex="-1"><a class="header-anchor" href="#_2-5-类文档"><span>2.5 类文档</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">    这个就是函数文档</span>
<span class="line">    用来说明这个函数的用途或者内部参数声明</span>
<span class="line">    :return: 返回值</span>
<span class="line">    &quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">    类文档</span>
<span class="line">    对类中属性进行说明</span>
<span class="line">    方法函数的说明</span>
<span class="line">    就是类的说明书</span>
<span class="line">    &quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">pass</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">尝试自定义一个手机类 <span class="token punctuation">(</span>Phone<span class="token punctuation">)</span></span>
<span class="line">    实例属性：</span>
<span class="line">    brand <span class="token comment"># 手机品牌</span></span>
<span class="line">    model <span class="token comment"># 手机型号</span></span>
<span class="line">    color <span class="token comment"># 颜色</span></span>
<span class="line">    price <span class="token comment"># 价格</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    方法：</span>
<span class="line">    describe<span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token comment"># 会介绍该手机的品牌，型号，颜色，价格</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48)])])}const o=s(l,[["render",i]]),u=JSON.parse('{"path":"/python/17_%E5%88%9D%E8%AF%86%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html","title":"初识面向对象","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1.编程范式","slug":"_1-编程范式","link":"#_1-编程范式","children":[{"level":3,"title":"1.1 面向过程","slug":"_1-1-面向过程","link":"#_1-1-面向过程","children":[]},{"level":3,"title":"1.2 面向对象","slug":"_1-2-面向对象","link":"#_1-2-面向对象","children":[]}]},{"level":2,"title":"2.类和对象","slug":"_2-类和对象","link":"#_2-类和对象","children":[{"level":3,"title":"2.1 什么是类和对象","slug":"_2-1-什么是类和对象","link":"#_2-1-什么是类和对象","children":[]},{"level":3,"title":"2.2 创建和使用","slug":"_2-2-创建和使用","link":"#_2-2-创建和使用","children":[]},{"level":3,"title":"2.3 __init__ 初始化方法","slug":"_2-3-init-初始化方法","link":"#_2-3-init-初始化方法","children":[]},{"level":3,"title":"2.4 self与属性","slug":"_2-4-self与属性","link":"#_2-4-self与属性","children":[]},{"level":3,"title":"2.5 类文档","slug":"_2-5-类文档","link":"#_2-5-类文档","children":[]}]},{"level":2,"title":"练习","slug":"练习","link":"#练习","children":[]}],"git":{},"filePathRelative":"python/17_初识面向对象.md"}');export{o as comp,u as data};
