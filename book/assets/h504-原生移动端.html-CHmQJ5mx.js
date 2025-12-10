import{_ as s,c as a,a as e,o as p}from"./app-cH5Xd749.js";const l={};function t(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端"><span>移动端</span></a></h2><blockquote><p>移动端适配 1:1</p><p>设置 meta标签 可以使用 px</p></blockquote><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span>
<span class="line">name=&quot;meta用处&quot;</span>
<span class="line">content=&quot;描述&quot;</span>
<span class="line"></span>
<span class="line">width = &quot;设置移动端宽度&quot;</span>
<span class="line">initial-scale = &quot;设置页面的缩放&quot;</span>
<span class="line">maximum-scale =&quot;允许用户缩放最大值&quot;</span>
<span class="line">user-scalable = &quot;是否允许用户进行缩放&quot;  </span>
<span class="line">							no 代表不允许，yes代表允许</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="适配移动端-1" tabindex="-1"><a class="header-anchor" href="#适配移动端-1"><span>适配移动端-1</span></a></h3><blockquote><p>设计图纸 750 或其他值 进行缩放比例适配移动端 不建议使用</p><p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0&quot; /&gt;</code></p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>change<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 把设备的视口宽度设置成设计图纸的宽度  然后在等比例缩放</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span>  fiexdWidth <span class="token operator">=</span> <span class="token number">1536</span> <span class="token punctuation">;</span>                 <span class="token comment">//设计图纸的宽度尺寸</span></span>
<span class="line">        <span class="token keyword">let</span>  width <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">;</span>       <span class="token comment">// 设备的宽度</span></span>
<span class="line">        <span class="token keyword">let</span>  scale <span class="token operator">=</span> width <span class="token operator">/</span> fiexdWidth <span class="token punctuation">;</span>       <span class="token comment">// 计算视口缩放比例</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> meta <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        meta<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;viewport&#39;</span></span>
<span class="line">        meta<span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">width=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fiexdWidth<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,user-scalable=no,initial-scale=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>scale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span></span>
<span class="line">        document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="适配移动端-2" tabindex="-1"><a class="header-anchor" href="#适配移动端-2"><span>适配移动端-2</span></a></h3><blockquote><p>rem 布局 设计图纸大小 1 : 1</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"> <span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取html标签设置rem值</span></span>
<span class="line">   <span class="token keyword">let</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span></span>
<span class="line">   <span class="token comment">// 获取视口宽度</span></span>
<span class="line">   <span class="token keyword">let</span> w <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">   <span class="token comment">// 移动端布局是适应整个移动端 不是网页和移动端</span></span>
<span class="line">   <span class="token comment">// 配置 浏览器宽度 / 以苹果6进行的适配 </span></span>
<span class="line">   </span>
<span class="line">   <span class="token comment">// 配置rem字体大小</span></span>
<span class="line">   html<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> w <span class="token operator">/</span> <span class="token number">3.75</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">window<span class="token punctuation">.</span>onresize <span class="token operator">=</span> change</span>
<span class="line"></span>
<span class="line"><span class="token comment">// rem进行适配    元素大小 / html字体大小  60/100 = 0.6*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="适配移动端-2-1" tabindex="-1"><a class="header-anchor" href="#适配移动端-2-1"><span>适配移动端-2</span></a></h3><blockquote><p>rem 布局 无论设计图纸大小</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"> <span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取html标签设置rem值</span></span>
<span class="line">   <span class="token keyword">let</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span></span>
<span class="line">   <span class="token comment">// 获取视口宽度</span></span>
<span class="line">   <span class="token keyword">let</span> w <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">   <span class="token comment">// 移动端布局是适应整个移动端 不是网页和移动端</span></span>
<span class="line">   <span class="token comment">// 配置 浏览器宽度 / 以苹果6进行的适配 </span></span>
<span class="line">   </span>
<span class="line">   <span class="token comment">// 配置rem字体大小</span></span>
<span class="line">   html<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> w <span class="token operator">/</span> <span class="token number">3.75</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">window<span class="token punctuation">.</span>onresize <span class="token operator">=</span> change</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.75rem就是设备的宽度</span></span>
<span class="line"><span class="token comment">// 想将750的 设计图纸放置到   3.75rem||375px的视口里面</span></span>
<span class="line"><span class="token number">3</span><span class="token punctuation">.</span>75rem <span class="token operator">/</span> <span class="token number">750</span>   <span class="token operator">=&gt;</span>  视口rem值 <span class="token operator">/</span> 设计图纸宽</span>
<span class="line"><span class="token comment">// 假如 一个元素在设计图纸中量取的高是 75px  那么在视口中是多少?</span></span>
<span class="line"><span class="token comment">//3.75rem /750 = 视口中的高度是? / 设置图纸高度</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">3.75rem /750  = x / 75</span>
<span class="line">x = 0.375rem</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">3.75 / 750 = 0.005 比例</span>
<span class="line">x = 0.005 * 75</span>
<span class="line">x = 0.375</span>
<span class="line">0.005 * 750 = 3.75rem</span>
<span class="line"></span>
<span class="line">或</span>
<span class="line">750 / 3.75rem  = 200   是等比例缩放 </span>
<span class="line">75/ 200 = 0.375rem</span>
<span class="line">750/200 = 3.75rem  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)])])}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/supplementary/h504-%E5%8E%9F%E7%94%9F%E7%A7%BB%E5%8A%A8%E7%AB%AF.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"移动端","slug":"移动端","link":"#移动端","children":[{"level":3,"title":"适配移动端-1","slug":"适配移动端-1","link":"#适配移动端-1","children":[]},{"level":3,"title":"适配移动端-2","slug":"适配移动端-2","link":"#适配移动端-2","children":[]},{"level":3,"title":"适配移动端-2","slug":"适配移动端-2-1","link":"#适配移动端-2-1","children":[]}]}],"git":{},"filePathRelative":"supplementary/h504-原生移动端.md"}');export{o as comp,u as data};
