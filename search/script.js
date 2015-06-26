angular
	.module('myApp',['ui.utils','ngSanitize'])
	.controller('myCtrl',['$scope',function($scope){
		$scope.mdList=[
			{
				title:'![alt](画像リンク).,',
				description:'外部リンクを参照するさいに、linkを'
                    +'参照リンクに変えます。もしくは、'
                    +'画像をローカルからテキストに'
                    +'ドラッグ＆ドロップしてアップロード'
                    +'します。<br />'
                    +'![myimg](img/link)'
                    +'<img width="50" src="https://d30y9cdsu7xlg0.cloudfront.net/png/30706-200.png">'
			},
			{
				title:'**太文字**',
				description:'*（アスタリスク）二つを囲んだ文字が太文字になります。'
                    +'<br/>'
                    +'<br/>'
                    +'**サンプル** <strong>サンプル</strong>'
			},
			{
				title:'*斜体*',
				description:'*（アスタリスク）一つを囲んだ文字が斜体になります。'
                    +'<br/>'
                    +'<br/>'
                    +'*サンプル* <em>サンプル</em>'
			},
			{
				title:'[リンク](http://...)',
				description: '[]括弧にリンクの表記と()括弧にリンクを書くとリンクになります。<br/>'
                    +'[link1](#) <a href="#">link1</a> <br />'
                    +'[link2](/snippet/1) <a href="/snippet/1">link2</a> <br />'
			},
			{
				title:'# 見出し',
				description:'#とスペース１個を空けると該当の行は見出しになります。<br />'
                    +'# 見出し1　<h1>見出し1</h1><br/>'
                    +'## 見出し2　<h2>見出し2</h2><br/>'
                    +'### 見出し3　<h3>見出し3</h3><br/>'
			},
			{
				title:'&gt; 引用',
				description:'&gt;(半角)とスペース１個を空けると該当の行は引用スタイルになります。<br />'
                +'&gt; 引用&nbsp;&nbsp;<blockquote>引用</blockquote>'
			},
			{
				title:'* 箇条書き',
				description:'行の始まりに*(アスタリスク)とスペース１つを空けると該当の行は箇条書きになります。<br /><br/>'
                    +'<div class="small-block">'
                        +'* apple <br/>'
                        +'* banana <br/>'
                    +'</div>'
                    +'<div class="small-block">'
                        +'<ul>'
                            +'<li>apple</li>'
                            +'<li>banana</li>'
                        +'</ul>'
                    +'</div>'
			},
			{
				title:'```#include```',
				description:'コードを```で囲むとコード表記になります。例として<br/>'
                    +'<pre>```'
    +'int a = 2;'
    +'printf("%d",a);'
    +'```</pre>'
                    +'<br/>'
                    +'と書くと次のように表記されます'
                    +'<br/>'
                    +'<pre class="prettify"><code style="padding:10px;"><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">2</span><span class="pun">;</span><span class="pln">'
    +'printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln">a</span><span class="pun">);</span></code></pre>'
			},
			{
				title:'`echo`',
				description:'改行なしのコードを書く<br/>'
                    +'<code><span class="str">インラインコード</span></code>'
			}
		];
	}]);