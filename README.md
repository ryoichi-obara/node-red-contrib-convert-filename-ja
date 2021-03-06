# node-red-contrib-convert-filename-ja

## 使用方法

受信したメッセージを、ファイル名として採用して保存できる文字列に変換するNode-REDのノードです。  
このノードの場合、受信するメッセージはWindowsなどのファイル名としてそのまま採用できるような文字列をメッセージとして出力します。  
たとえばブログのタイトルなど、文字列がそのままファイル名として保存できないことがある場合の記号の変換を行います。  

## このノードについて開発したい場合

このノードに対して機能追加や改善をしたいという方を大歓迎します。  
Issueを起票したり、Pull Requestを作成してください。  

(次に記載の手順は、一般的な内容と同様です)

IssueはGitHubのWebから送ることができます。  
Pull Requestを作成するには、まずその開発を行うために、  
このリポジトリをGitHub上でforkします。  
リポジトリが自身のアカウントにfork(コピー)されたら、  
開発や改良版を動かすための環境を作成します。  

```
git clone git@github.com:【forkしたあなたのアカウント名】/node-red-contrib-convert-filename-ja.git
cd node-red-contrib-convert-filename-ja
npm i
```

このあとソースコードを改修します。  
``node/`` ディレクトリ配下に主要なファイルを配置してあります。  
変更したら、ローカルで変更点をテストします。  
まずは、変更中のモジュールを他のディレクトリで使用できるように次のコマンドを実行します。  

```
npm link
```

このコマンドを実行することにより、現在のディレクトリの開発中のモジュールが  
ローカルのnpmリポジトリにリンクとして登録されます。  

その後、Node-REDを実行しているディレクトリで次のコマンドを実行することにより、  
Node-RED実行環境で、開発中のノードを利用できます。

```
npm link node-red-contrib-convert-filename-ja
```

もっと詳しい情報については、  
[Node-RED日本ユーザ会](https://nodered.jp/docs/) のドキュメントの [Nodeの開発](https://nodered.jp/docs/creating-nodes/) を参照してください。  
