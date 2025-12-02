import{_ as n,c as a,a as e,o as p}from"./app-BkadFxXL.js";const l={};function i(t,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件"><span>中间件</span></a></h1><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token number">1.</span>请求来的时候需要先经过django中间件才能到达django后端</span>
<span class="line"><span class="token number">2.</span>响应走的时候最后也需要经过中间件才能发送出去</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>django支持用户自定义中间件并且暴露五个可以自定义的方法</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 1.需要掌握的</span></span>
<span class="line">process_request</span>
<span class="line">process_response</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2.了解就可以了</span></span>
<span class="line">process_view<span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> view_name<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span></span>
<span class="line">	路由匹配成功之后执行视图函数之前<span class="token punctuation">,</span>会自动执行中间件中的该方法</span>
<span class="line">    顺序是按照配置文件中从上往下的顺序依次执行</span>
<span class="line">    </span>
<span class="line">process_template_response<span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> response<span class="token punctuation">)</span></span>
<span class="line">	返回HttpReponse对象有render属性时才会触发</span>
<span class="line">    顺序是按照配置文件中从下往上的顺序依次经过</span>
<span class="line">    	</span>
<span class="line">process_exception</span>
<span class="line">	当视图函数中出现了异常时触发</span>
<span class="line">    顺序是按照配置文件中从下往上的顺序依次经过</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义中间件" tabindex="-1"><a class="header-anchor" href="#自定义中间件"><span>自定义中间件</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token number">1.</span>在应用文件夹下创建一个任意名字的文件夹</span>
<span class="line"><span class="token number">2.</span>在该文件夹中创建任意名字的py文件</span>
<span class="line"><span class="token number">3.</span>在该py文件中书写类<span class="token punctuation">(</span>必须继承MiddlewareMixin类<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>deprecation <span class="token keyword">import</span> MiddlewareMixin</span>
<span class="line"><span class="token keyword">class</span> 类名<span class="token punctuation">(</span>MiddlewareMixin<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    自定义五个方法</span>
<span class="line">    </span>
<span class="line"><span class="token number">4.</span>去settings<span class="token punctuation">.</span>py中将类的路径以字符串的形式注册到MIDDLEWARE中</span>
<span class="line">MIDDLEWARE <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token string">&#39;app01.mydd.mymiddle.MyMiddleWare&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;app01.mydd.mymiddle.MyMiddleWare2&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="process-request-self-request" tabindex="-1"><a class="header-anchor" href="#process-request-self-request"><span>process_request(self, request)</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token number">1.</span>请求来的时候需要经过每一个中间件里面的process_request方法<span class="token punctuation">,</span>经过顺序是按照settings<span class="token punctuation">.</span>py中配置的MIDDLEWARE从上往下的顺序依次执行</span>
<span class="line"><span class="token number">2.</span>如果中间件中没有定义该方法<span class="token punctuation">,</span>那么跳过这个中间件执行写一个</span>
<span class="line"><span class="token number">3.</span>如果该方法返回了HttpReponse对象<span class="token punctuation">,</span>那么请求不再继续执行后面的中间件<span class="token punctuation">,</span>而是经由当前中间件原路返回</span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyMiddleWare</span><span class="token punctuation">(</span>MiddlewareMixin<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">process_request</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;这是第一个自定义的中间件中的process_request方法&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="process-response-self-request-response" tabindex="-1"><a class="header-anchor" href="#process-response-self-request-response"><span>process_response(self, request, response)</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token number">1.</span>响应走的时候需要经过每一个中间件里面的process_response方法<span class="token punctuation">,</span>该方法有两个额外的才是<span class="token punctuation">:</span>request<span class="token punctuation">,</span> response</span>
<span class="line"><span class="token number">2.</span>该方法必须返回一个HttpReponse对象</span>
<span class="line">	默认情况下返回的是形参response</span>
<span class="line">    也可以自己定义返回值</span>
<span class="line"><span class="token number">3.</span>顺序是按照配置文件中注册的中间件从下往上的顺序依次经过<span class="token punctuation">.</span>如果没有定义该方法<span class="token punctuation">,</span>直接跳过执行下一个</span>
<span class="line"></span>
<span class="line"><span class="token number">4.</span>如果在一个process_request方法中就已经返回了HttpResponse对象<span class="token punctuation">,</span>那么响应走的时候就是会直接经过自己的process_response方法返回</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 三个中间键,所有都正常执行的情况</span></span>
<span class="line">第一个process_request</span>
<span class="line">第二个process_request</span>
<span class="line">第三个process_request</span>
<span class="line">执行视图函数得到返回值</span>
<span class="line">第三个process_response</span>
<span class="line">第二个process_response</span>
<span class="line">第一个process_response</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果第二个中间件的process_request方法有返回值</span></span>
<span class="line">第一个process_request</span>
<span class="line">第二个process_request</span>
<span class="line">第二个process_response</span>
<span class="line">第一个process_response</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="csrf跨站请求伪造-通过post请求" tabindex="-1"><a class="header-anchor" href="#csrf跨站请求伪造-通过post请求"><span>csrf跨站请求伪造(通过post请求)</span></a></h2><ul><li>form表单</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">&quot;&quot;</span> method<span class="token operator">=</span><span class="token string">&quot;post&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token operator">%</span> csrf_token <span class="token operator">%</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ajax</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">$<span class="token punctuation">.</span>ajax<span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    url<span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    data<span class="token punctuation">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">        <span class="token operator">//</span><span class="token number">1.</span>通过获取到指定<span class="token builtin">input</span>框的值传给后端</span>
<span class="line">        <span class="token operator">//</span> 通过标签的属性的值获取到某个标签<span class="token punctuation">:</span>$<span class="token punctuation">(</span><span class="token string">&#39;标签[属性=&quot;值&quot;]&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token operator">//</span>csrfmiddlewaretoken<span class="token punctuation">:</span> $<span class="token punctuation">(</span><span class="token string">&#39;input[name=&quot;csrfmiddlewaretoken&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token operator">//</span><span class="token number">2.</span> 通过模板语法获取<span class="token builtin">input</span>框的值</span>
<span class="line">        csrfmiddlewaretoken<span class="token punctuation">:</span> <span class="token string">&#39;{{ csrf_token }}&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    success<span class="token punctuation">:</span> function<span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)])])}const o=n(l,[["render",i]]),r=JSON.parse('{"path":"/django/18-django%E4%B8%AD%E9%97%B4%E4%BB%B6.html","title":"中间件","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"自定义中间件","slug":"自定义中间件","link":"#自定义中间件","children":[{"level":3,"title":"process_request(self, request)","slug":"process-request-self-request","link":"#process-request-self-request","children":[]},{"level":3,"title":"process_response(self, request, response)","slug":"process-response-self-request-response","link":"#process-response-self-request-response","children":[]}]},{"level":2,"title":"csrf跨站请求伪造(通过post请求)","slug":"csrf跨站请求伪造-通过post请求","link":"#csrf跨站请求伪造-通过post请求","children":[]}],"git":{},"filePathRelative":"django/18-django中间件.md"}');export{o as comp,r as data};
