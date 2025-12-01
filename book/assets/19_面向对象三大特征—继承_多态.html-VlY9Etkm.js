import{_ as s,c as a,a as p,o as e}from"./app-D_gKCYhm.js";const l={};function t(i,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="面向对象三大特征——继承-多态" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征——继承-多态"><span>面向对象三大特征——继承+多态</span></a></h1><h2 id="_1-上节课回顾" tabindex="-1"><a class="header-anchor" href="#_1-上节课回顾"><span>1.上节课回顾</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">假设我们有一个表示矩形<span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span>的类，其中长度<span class="token punctuation">(</span>length<span class="token punctuation">)</span>和宽度<span class="token punctuation">(</span>width<span class="token punctuation">)</span>需要验证为正数，并且我们可以通过这个长度和宽度来计算矩形的面积。</span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Rectangle</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> length<span class="token punctuation">,</span> width<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 不是直接给对象添加实例属性得位置</span></span>
<span class="line">        self<span class="token punctuation">.</span>length <span class="token operator">=</span> length</span>
<span class="line">        self<span class="token punctuation">.</span>width <span class="token operator">=</span> width</span>
<span class="line">        <span class="token comment"># if length &gt; 0 and width &gt; 0:</span></span>
<span class="line">        <span class="token comment">#     self.__length = length</span></span>
<span class="line">        <span class="token comment">#     self.__width = width</span></span>
<span class="line">        <span class="token comment"># else:</span></span>
<span class="line">        <span class="token comment">#     raise ValueError(&quot;长度和宽度必须为正数&quot;)  # 抛出异常</span></span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@property</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">length</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__length</span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@length<span class="token punctuation">.</span>setter</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">length</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> value <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            self<span class="token punctuation">.</span>__length <span class="token operator">=</span> value <span class="token comment"># 添加对象属性的位置了</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&quot;长度必须为正数&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 抛出异常</span></span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@property</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">width</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__width</span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@width<span class="token punctuation">.</span>setter</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">width</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> value <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            self<span class="token punctuation">.</span>__width <span class="token operator">=</span> value</span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&quot;宽度必须为正数&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@property</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">area</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__length <span class="token operator">*</span> self<span class="token punctuation">.</span>__width</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建Rectangle类的对象</span></span>
<span class="line"><span class="token comment"># rect = Rectangle(10, 5)</span></span>
<span class="line">rect <span class="token operator">=</span> Rectangle<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 访问实例属性</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>width<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>area<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 修改实例属性的时候，必须得传正数</span></span>
<span class="line"><span class="token comment"># rect.length = -100</span></span>
<span class="line"><span class="token comment"># rect.width = -100</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">设计并实现一个圆(Circle)类，用于求圆的面积</span>
<span class="line">    实例属性：</span>
<span class="line">        r(半径) 使用 @property 和 @setter 进行权限设置(验证半径的值为整数以及正数)</span>
<span class="line">    方法：</span>
<span class="line">        1.__init__(self, r)：初始化圆的半径</span>
<span class="line">        2.查看方法</span>
<span class="line">        3.修改方法</span>
<span class="line">        4.求面积方法(返回圆的面积)</span>
<span class="line">    验证：</span>
<span class="line">        当设置半径时，如果提供的半径不是正数以及不是整数，则抛出 ValueError 异常。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-继承" tabindex="-1"><a class="header-anchor" href="#_2-继承"><span>2. 继承</span></a></h2><p>继承：生活中，儿子继承父亲的财产</p><p>面向对象编程的一个重要特性是继承。继承允许你创建一个类（称为子类或派生类），它继承另一个类（称为父类或基类）的属性和方法。这样可以重用代码并减少重复，同时还能根据需要添加新的特性和方法。</p><p>在python3中所有类都继承了一个object类,object被称为&quot;顶级基类&quot;或&quot;根类&quot;</p><h3 id="_2-1-单继承" tabindex="-1"><a class="header-anchor" href="#_2-1-单继承"><span>2.1 单继承</span></a></h3><p>一个子类继承一个父类</p><p>父类隐藏属性子类是无法直接继承的</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;动物类&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;发出叫声&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;吃东西&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;狗类&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是f方法&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;猫类&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">pass</span></span>
<span class="line"><span class="token comment"># 子类可以使用父类的方法</span></span>
<span class="line">c <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">c<span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">c<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">d <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">d<span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">d<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 父类无法使用到子类的方法</span></span>
<span class="line"><span class="token comment"># a = Animal()</span></span>
<span class="line"><span class="token comment"># a.f()</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isinstance(对象,类) 检查对象是否由指定的类实例的</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> Dog<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> Cat<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># issubclass(子类,父类) # 检查是否有继承关系</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">issubclass</span><span class="token punctuation">(</span>Dog<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">issubclass</span><span class="token punctuation">(</span>Dog<span class="token punctuation">,</span> <span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">issubclass</span><span class="token punctuation">(</span>Dog<span class="token punctuation">,</span> Cat<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># False</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-重写父类中的属性与方法" tabindex="-1"><a class="header-anchor" href="#_2-2-重写父类中的属性与方法"><span>2.2 重写父类中的属性与方法</span></a></h3><ul><li><p><strong>子类覆盖父类中的方法</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;动物类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;发出叫声&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;吃东西&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;狗类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>color <span class="token operator">=</span> color</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 优先使用子类的方法,子类没有,就找父类</span></span>
<span class="line">d <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;黄色&quot;</span><span class="token punctuation">)</span></span>
<span class="line">d<span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">d<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>子类继承父类方法并重写</strong></p><p><code>super()</code>函数用于调用父类的方法,在子类中,通过<code>super().父类方法</code>可以调用父类的方法</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;动物类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;发出叫声&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;吃东西&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;狗类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># &quot;小白&quot;,3,&quot;白色&quot;</span></span>
<span class="line">        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>color <span class="token operator">=</span> color</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># super(Dog, self).sound()</span></span>
<span class="line">        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &quot;发出叫声&quot;</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">d <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;小白&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;白色&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>age<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>color<span class="token punctuation">)</span></span>
<span class="line">d<span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-3-多层继承" tabindex="-1"><a class="header-anchor" href="#_2-3-多层继承"><span>2.3 多层继承</span></a></h3><p>多层继承:子类继承父类,父类继承对应的父类(爷爷类)......</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">5000</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">car</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;奔驰&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">1000</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">car</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>car<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;保时捷&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>B<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">car</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>car<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;电车&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">c <span class="token operator">=</span> C<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>money<span class="token punctuation">)</span></span>
<span class="line">c<span class="token punctuation">.</span>car<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-多继承" tabindex="-1"><a class="header-anchor" href="#_2-4-多继承"><span>2.4 多继承</span></a></h3><p>一个子类继承了多个父类</p><p>在多继承中同一个方法或者属性遵循就近继承(在父类中从左到右)</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Horse</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;马类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">body</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;体型健硕&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;奔跑速度快&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Donkey</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;驴类&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">body</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;体型较小&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是f方法&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Mule</span><span class="token punctuation">(</span>Horse<span class="token punctuation">,</span>Donkey<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;骡子类&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">pass</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过Mule创建一个对象</span></span>
<span class="line">mule <span class="token operator">=</span> Mule<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">mule<span class="token punctuation">.</span>body<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">mule<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">mule<span class="token punctuation">.</span>f<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看继承顺序 mro</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>Mule<span class="token punctuation">.</span>__mro__<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># (&lt;class &#39;__main__.Mule&#39;&gt;, &lt;class &#39;__main__.Horse&#39;&gt;, &lt;class &#39;__main__.Donkey&#39;&gt;, &lt;class &#39;object&#39;&gt;)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>Horse<span class="token punctuation">.</span>__mro__<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 查看继承的父类,返回一个元组</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>Mule<span class="token punctuation">.</span>__bases__<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>Horse<span class="token punctuation">.</span>__bases__<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回一个父类</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>Mule<span class="token punctuation">.</span>__base__<span class="token punctuation">)</span> <span class="token comment"># &lt;class &#39;__main__.Horse&#39;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-多态" tabindex="-1"><a class="header-anchor" href="#_3-多态"><span>3.多态</span></a></h2><p>不用的对象,调用同一个方法,表现出不同的效果</p><ul><li><p><strong>继承与方法重写</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;动物类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;发出叫声&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;狗类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;猫类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;喵喵叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">dog<span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">cat<span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>鸭子类型</strong></p><p>鸭子类型是动态类型的一种风格,在鸭子类型中,关注点在与对象的行为,能做什么;而不是关心对象所属的类型</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;动物类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;发出叫声&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;狗类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">100</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;猫类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;喵喵叫&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">make_sound</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    animal<span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">make_sound<span class="token punctuation">(</span>dog<span class="token punctuation">)</span></span>
<span class="line">make_sound<span class="token punctuation">(</span>cat<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">&quot;12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">.</span>__len__<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>面向对象的三大特征:</p><ul><li>封装: <ul><li>封装是指将数据(属性)和操作数据的方法(函数)组合在一起,形成一个类,并对外部隐藏类的内部实现细节,这样可以提高的代码安全性和可维护性</li></ul></li><li>继承: <ul><li>允许一个类从另一个类继承属性和方法,从而实现代码的复用和拓展</li></ul></li><li>多态: <ul><li>允许使用统一的接口来操作不同的对象,从而使得代码更加的灵活和可扩展</li></ul></li></ul><h2 id="_4-作业" tabindex="-1"><a class="header-anchor" href="#_4-作业"><span>4.作业</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">交通工具模拟</span>
<span class="line">任务：模拟不同交通工具的行为，通过继承和多态实现不同交通工具的移动方式。</span>
<span class="line"></span>
<span class="line">1.定义一个基类Transportation，包含抽象方法move()。</span>
<span class="line">2.从Transportation派生出三个子类：Car、Bicycle和Boat。</span>
<span class="line">    2.1 Car类的move()方法打印&quot;正在开车前进&quot;。</span>
<span class="line">    2.2 Bicycle类的move()方法打印&quot;正在骑行&quot;。</span>
<span class="line">    2.3 Boat类的move()方法打印&quot;正在航行&quot;。</span>
<span class="line">3.编写一个函数travel(vehicles)，接受一个交通工具列表，遍历列表并调用每个交通工具的move()方法。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">看代码写结果（不用交）<span class="token punctuation">:</span></span>
<span class="line"><span class="token number">1.</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;A.f1&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f2</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>f1<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;B.f2&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">obj<span class="token punctuation">.</span>f2<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;A.f1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        </span>
<span class="line">        </span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f2</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>f1<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;B.f2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;B.f1&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">obj<span class="token punctuation">.</span>f1<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">obj<span class="token punctuation">.</span>f2<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)])])}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/python/19_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%89%E5%A4%A7%E7%89%B9%E5%BE%81%E2%80%94%E7%BB%A7%E6%89%BF_%E5%A4%9A%E6%80%81.html","title":"面向对象三大特征——继承+多态","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1.上节课回顾","slug":"_1-上节课回顾","link":"#_1-上节课回顾","children":[]},{"level":2,"title":"2. 继承","slug":"_2-继承","link":"#_2-继承","children":[{"level":3,"title":"2.1 单继承","slug":"_2-1-单继承","link":"#_2-1-单继承","children":[]},{"level":3,"title":"2.2 重写父类中的属性与方法","slug":"_2-2-重写父类中的属性与方法","link":"#_2-2-重写父类中的属性与方法","children":[]},{"level":3,"title":"2.3 多层继承","slug":"_2-3-多层继承","link":"#_2-3-多层继承","children":[]},{"level":3,"title":"2.4 多继承","slug":"_2-4-多继承","link":"#_2-4-多继承","children":[]}]},{"level":2,"title":"3.多态","slug":"_3-多态","link":"#_3-多态","children":[]},{"level":2,"title":"4.作业","slug":"_4-作业","link":"#_4-作业","children":[]}],"git":{},"filePathRelative":"python/19_面向对象三大特征—继承+多态.md"}');export{o as comp,u as data};
