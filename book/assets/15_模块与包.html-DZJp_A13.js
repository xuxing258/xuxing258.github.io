import{_ as s,c as a,a as e,o as p}from"./app-DWS4XIiF.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="模块与包" tabindex="-1"><a class="header-anchor" href="#模块与包"><span>模块与包</span></a></h1><h2 id="_1-模块" tabindex="-1"><a class="header-anchor" href="#_1-模块"><span>1.模块</span></a></h2><p>在Python中，模块是一种组织代码的方式，可以将相关的功能封装在一个单独的文件中，以便在其他程序中重复使用。Python中模块可以分为自定义的模块，第三方的模块，内置的模块。</p><h3 id="_1-1-自定义模块" tabindex="-1"><a class="header-anchor" href="#_1-1-自定义模块"><span>1.1 自定义模块</span></a></h3><ul><li><p><strong>创建模块：</strong> 创建一个模块很简单，只需创建一个包含Python代码的文件，并以<code>.py</code>为扩展名。例如，创建一个名为<code>mymodule.py</code>的模块文件。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># mymodule.py</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>导入模块：</strong> 在其他Python文件中，可以使用<code>import</code>关键字导入模块，然后使用模块中的功能。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># run.py</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> mymodule</span>
<span class="line"></span>
<span class="line">mymodule<span class="token punctuation">.</span>greet<span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span></span>
<span class="line">result <span class="token operator">=</span> mymodule<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>当我们导入一个模块时，模块内的所有语句都会被执行。并创建一个模块对象，该对象包含了模块中定义的函数、类和变量等。以供后续导入和使用。</p><p>如果一个模块已经被导入过了，再次导入同一个模块时，Python会直接使用先前创建的模块对象，而不会重新执行模块内的语句。这是为了避免重复执行相同的代码，以提高性能并避免可能的副作用。</p><p>这意味着，当你在一个程序中多次导入同一个模块时，模块内的代码只会在第一次导入时执行一次。后续的导入操作将直接使用先前创建的模块对象。</p><h3 id="_1-2-模块导入语法" tabindex="-1"><a class="header-anchor" href="#_1-2-模块导入语法"><span>1.2 模块导入语法</span></a></h3><ul><li><p><code>import</code> 语句的作用是将整个模块导入到当前模块中。你可以使用模块名作为前缀来访问模块中的成员。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># commons/mymodule.py</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line"></span>
<span class="line"><span class="token comment"># run.py</span></span>
<span class="line"><span class="token keyword">import</span> commons<span class="token punctuation">.</span>mymodule</span>
<span class="line"></span>
<span class="line">commons<span class="token punctuation">.</span>mymodule<span class="token punctuation">.</span>greet<span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span></span>
<span class="line">result <span class="token operator">=</span> commons<span class="token punctuation">.</span>mymodule<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment"># 7</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>import</code> 语句也可以使用 <code>as</code> 关键字为模块设置别名，以便在当前模块中更方便地引用它。这对于模块名很长或容易与其他名称冲突的情况很有用。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> commons<span class="token punctuation">.</span>mymodule <span class="token keyword">as</span> m1</span>
<span class="line"></span>
<span class="line">m1<span class="token punctuation">.</span>greet<span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span></span>
<span class="line">result <span class="token operator">=</span> m1<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>m1<span class="token punctuation">.</span>age<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>from import</code>语句用于从模块中导入特定的成员到当前模块的作用域中。你可以直接使用成员名进行访问，无需使用模块名前缀。这种方式可以减少代码中的冗长，并提供更直接的访问方式。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 导入指定成员</span></span>
<span class="line"><span class="token comment"># from m1 import func,hello,name</span></span>
<span class="line"><span class="token comment"># func()</span></span>
<span class="line"><span class="token comment"># hello()</span></span>
<span class="line"><span class="token comment"># print(name)</span></span>
<span class="line"><span class="token keyword">from</span> commons<span class="token punctuation">.</span>mymodule <span class="token keyword">import</span> greet<span class="token punctuation">,</span>add</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导入模块</span></span>
<span class="line"><span class="token keyword">from</span> commons <span class="token keyword">import</span> mymodule</span>
<span class="line">mymodule<span class="token punctuation">.</span>greet<span class="token punctuation">(</span><span class="token string">&quot;小帅&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># from...import...语句中使用as</span></span>
<span class="line"><span class="token keyword">from</span> commons<span class="token punctuation">.</span>mymodule1 <span class="token keyword">import</span> f <span class="token keyword">as</span> f1</span>
<span class="line"><span class="token keyword">from</span> commons<span class="token punctuation">.</span>mymodule2 <span class="token keyword">import</span> f <span class="token keyword">as</span> f2</span>
<span class="line"><span class="token keyword">from</span> commons<span class="token punctuation">.</span>mymodule3 <span class="token keyword">import</span> f <span class="token keyword">as</span> f3</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">f1<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">f2<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>from import *</code> 语句用于将一个模块中的所有成员导入到当前模块中。这种方式不推荐使用，因为它可能导致命名冲突和命名空间污染。通常建议明确导入所需的成员，以提高代码的可读性和可维护性。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 导入模块的所有成员</span></span>
<span class="line"><span class="token comment"># commons/mymodule.py</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">age <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line"></span>
<span class="line">name <span class="token operator">=</span> <span class="token string">&quot;小美&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># run.py</span></span>
<span class="line"><span class="token comment"># 导入模块的所有成员</span></span>
<span class="line"><span class="token keyword">from</span> commons<span class="token punctuation">.</span>mymodule <span class="token keyword">import</span> <span class="token operator">*</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span></span>
<span class="line">greet<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>__all__</code> 变量用于定义可以被导入的成员列表。当使用 <code>from module import *</code> 语句时，只有列在 <code>__all__</code> 变量中的成员才会被导入，其他成员将被视为隐藏成员。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># commons/mymodule01.py</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">name <span class="token operator">=</span> <span class="token string">&quot;小明&quot;</span></span>
<span class="line"></span>
<span class="line">__all__ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;f1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;f2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># run.py</span></span>
<span class="line"><span class="token comment"># 只针对与from import * 导入方式</span></span>
<span class="line"><span class="token keyword">from</span> commons<span class="token punctuation">.</span>mymodule01 <span class="token keyword">import</span> <span class="token operator">*</span></span>
<span class="line"></span>
<span class="line">f1<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">f2<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># f3() f3就是隐藏成员了,就不能调用了</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-3-内置变量" tabindex="-1"><a class="header-anchor" href="#_1-3-内置变量"><span>1.3 内置变量</span></a></h3><p>内置变量是Python语言本身提供的一些特殊变量，它们在解释器中预先定义，不需要导入任何模块就可以直接使用。这些内置变量具有特定的用途和功能。</p><ul><li><p><code>__name__</code>：描述了当前模块的名称。当模块作为主程序直接执行时，<code>__name__</code> 的值为<code>&#39;__main__&#39;</code>；当模块被其他模块导入时，<code>__name__</code> 的值为模块的名称。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># test1.py</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test1:&quot;</span><span class="token punctuation">,</span>__name__<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># run.py 执行的这个文件</span></span>
<span class="line"><span class="token keyword">import</span> test1</span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;run:&quot;</span><span class="token punctuation">,</span>__name__<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 执行py文件时</span></span>
<span class="line">__name__ <span class="token operator">=</span> <span class="token string">&quot;__main__&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 被导入的py文件执行时</span></span>
<span class="line">__name__ <span class="token operator">=</span> <span class="token string">&quot;模块自己的名字&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># test1.py</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">send_email</span><span class="token punctuation">(</span>mailbox<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;给</span><span class="token interpolation"><span class="token punctuation">{</span>mailbox<span class="token punctuation">}</span></span><span class="token string">发送邮件&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test1:&quot;</span><span class="token punctuation">,</span>__name__<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 测试</span></span>
<span class="line">    send_email<span class="token punctuation">(</span><span class="token string">&quot;123234234@qq.com&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line"><span class="token comment"># run.py</span></span>
<span class="line"><span class="token keyword">import</span> test1</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># ......</span></span>
<span class="line">    mailbox <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入邮箱:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    test1<span class="token punctuation">.</span>send_email<span class="token punctuation">(</span>mailbox<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># ......</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;run:&quot;</span><span class="token punctuation">,</span>__name__<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span></span>
<span class="line">    func<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>__file__</code>：描述了当前模块所在的文件路径名。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># test1.py</span></span>
<span class="line">path <span class="token operator">=</span> __file__</span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># run.py</span></span>
<span class="line"><span class="token keyword">import</span> test1</span>
<span class="line">path <span class="token operator">=</span> __file__</span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">C:\\Users\\86199\\Desktop\\python_project\\day16\\test1.py</span>
<span class="line">C:\\Users\\86199\\Desktop\\python_project\\day16\\run.py</span>
<span class="line">&quot;&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-4-模块搜索路径" tabindex="-1"><a class="header-anchor" href="#_1-4-模块搜索路径"><span>1.4 模块搜索路径</span></a></h3><p>当你导入一个模块时，Python解释器会按照一定的顺序搜索模块文件。搜索路径包括内置模块、<code>sys.path</code>中列出的目录以及一些其他位置。你可以通过修改<code>sys.path</code>来添加自定义的模块搜索路径。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> pprint</span>
<span class="line"><span class="token keyword">import</span> sys</span>
<span class="line">pprint<span class="token punctuation">.</span>pprint<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line"> <span class="token string">&#39;当前脚本的执行目录&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line"> <span class="token string">&#39;C:\\\\Users\\\\86199\\\\Desktop\\\\python_project\\\\day16&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\PyCharm 2023.3.5\\\\plugins\\\\python\\\\helpers\\\\pycharm_display&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\Python38\\\\python38.zip&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\Python38\\\\DLLs&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\Python38\\\\lib&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\Python38&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\Python38\\\\lib\\\\site-packages&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\Python38\\\\lib\\\\site-packages\\\\win32&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\Python38\\\\lib\\\\site-packages\\\\win32\\\\lib&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\Python38\\\\lib\\\\site-packages\\\\Pythonwin&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string">&#39;C:\\\\PyCharm 2023.3.5\\\\plugins\\\\python\\\\helpers\\\\pycharm_matplotlib_backend&#39;</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> sys</span>
<span class="line"><span class="token comment"># 添加自定义模块的搜索路径</span></span>
<span class="line">sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;路径&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:</p><p>1.写自定义模块名称时,不要和内置或者第三方模块的名称同名</p><p>2.项目执行文件一般都在项目根目录,如果执行文件嵌套在内层目录,就需要自己手动在sys.path中添加路径</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> sys</span>
<span class="line"><span class="token keyword">import</span> os</span>
<span class="line"><span class="token keyword">from</span> pprint <span class="token keyword">import</span> pprint</span>
<span class="line"></span>
<span class="line"><span class="token comment"># os.path.dirname方法可以对于路径返回上一级</span></span>
<span class="line"><span class="token comment"># os.path.abspath方法拿到绝对路径</span></span>
<span class="line">path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># C:\\Users\\86199\\Desktop\\python_project\\day16\\commons\\run.py</span></span>
<span class="line"><span class="token comment"># C:\\Users\\86199\\Desktop\\python_project\\day16</span></span>
<span class="line">sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line">pprint<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">import</span> test1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.pycharm中默认会将项目目录加入到sys.path中</p><h2 id="_2-包" tabindex="-1"><a class="header-anchor" href="#_2-包"><span>2.包</span></a></h2><p>在Python中，包是一种用于组织模块的层次结构。它允许将相关的模块放在一个目录中，以便更好地组织和管理代码。一个包通常包含一个特殊的 <code>__init__.py</code> 文件，用于标识该目录为一个包。在 <code>__init__.py</code> 中，你可以执行一些初始化工作。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">mypackage/</span>
<span class="line">|-- __init__.py</span>
<span class="line">|-- m1.py</span>
<span class="line">|-- m2.py</span>
<span class="line">|-- subpackage/</span>
<span class="line">|   |-- __init__.py</span>
<span class="line">|   |-- m3.py</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mypackage</code>是一个包，包含了两个模块<code>m1.py</code>和<code>m2.py</code>，以及一个子包<code>subpackage</code>，其中包含了<code>m3.py</code>。从Python 3.3版本开始，<code>__init__.py</code>文件不再是必需的，但为了兼容和清晰性，建议保留这个文件。</p><p>当导入包时，<code>__init__.py</code> 文件的代码会被执行一次。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># python导入模块的一个重要原则&quot;点号&quot;的左边必须是一个包</span></span>
<span class="line"><span class="token comment"># from commons import mymodule01, mymodule02</span></span>
<span class="line"><span class="token comment"># from commons.subpackage import m3</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># mymodule01.send()</span></span>
<span class="line"><span class="token comment"># mymodule02.send_email()</span></span>
<span class="line"><span class="token comment"># m3.m3()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)])])}const o=s(l,[["render",i]]),u=JSON.parse('{"path":"/python/15_%E6%A8%A1%E5%9D%97%E4%B8%8E%E5%8C%85.html","title":"模块与包","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1.模块","slug":"_1-模块","link":"#_1-模块","children":[{"level":3,"title":"1.1 自定义模块","slug":"_1-1-自定义模块","link":"#_1-1-自定义模块","children":[]},{"level":3,"title":"1.2 模块导入语法","slug":"_1-2-模块导入语法","link":"#_1-2-模块导入语法","children":[]},{"level":3,"title":"1.3 内置变量","slug":"_1-3-内置变量","link":"#_1-3-内置变量","children":[]},{"level":3,"title":"1.4 模块搜索路径","slug":"_1-4-模块搜索路径","link":"#_1-4-模块搜索路径","children":[]}]},{"level":2,"title":"2.包","slug":"_2-包","link":"#_2-包","children":[]}],"git":{},"filePathRelative":"python/15_模块与包.md"}');export{o as comp,u as data};
