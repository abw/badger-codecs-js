import{_ as a,c as i,a1 as e,o as n}from"./chunks/framework.oYnktUz4.js";const r=JSON.parse('{"title":"Codec Names","description":"","frontmatter":{},"headers":[],"relativePath":"names.md","filePath":"names.md","lastUpdated":1735323121000}'),t={name:"names.md"};function l(h,s,p,o,d,k){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="codec-names" tabindex="-1">Codec Names <a class="header-anchor" href="#codec-names" aria-label="Permalink to &quot;Codec Names&quot;">​</a></h1><p>Codec names are case insensitive.</p><p>For example, you can specify the JSON codec as <code>json</code>, <code>JSON</code>, or <code>Json</code>. Similarly, <code>yaml</code>, <code>YAML</code> and <code>Yaml</code> all do the same thing.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// either</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myCodec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> codec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myCodec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> codec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;JSON&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myCodec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> codec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or any other case combination...</span></span></code></pre></div><p>There are also the three letter versions: <code>yml</code> and <code>jsn</code> for the YAML and JSON codecs respectively.</p><p>This is useful if you want to automatically determine the encoding of a file from the file extension and you&#39;ve got a <code>data.yml</code> file, for example.</p>`,6)]))}const y=a(t,[["render",l]]);export{r as __pageData,y as default};
