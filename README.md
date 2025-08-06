# Next.js×TypeScript×Storybook×MSW
モックサーバーを用いたフロントエンド開発  
共通で使用するUIコンポーネントをカタログ化  

# StrybookとMSWのインストールとセットアップ  
next.jsはcreate-appで導入  

## Storybookのインストール  
npx storybook@latest init --builder webpack5 --type react  

※npx storybook initでインストールするとvite環境に合わせたセットアップになったので今回このコマンドは使わない  

## MSWのインストール  
StorybookやNext.js、Node.js CLI実行などの互換性が高く、現状では最も安定するバージョン1をインストール  

npm install msw@1 --save-dev  
npm install msw-storybook-addon@^1 --save-dev  

mockServiceWorker.jsをpublic配下に配置する  
npx msw init public/ --save  

.storybook/main.tsに追加  
const config: StorybookConfig = {
  staticDirs: ['../public']
};  

.storybook/preview.tsに追加  
import { initialize, mswDecorator } from "msw-storybook-addon";
initialize();
const preview: Preview = {
  decorators: [mswDecorator],
};  

# 確認する設定項目  
恐らく、tsconfig.jsonは以下の設定になっている  
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "jsx": "preserve"
  }
}

もし上記でうまく動作しなかったら以下を試す  
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "node",
  }
}  

# MSWバージョン2以上の使用は非推奨    
npm install mswでインストールすると恐らくバージョン2以上がインストールされる  
もしmsw@2 を使いたいなら、完全にESM対応された環境であることが前提  
msw@2.xがESM(ECMAScript Modules)モジュールになっているためTypeScript の型解決エラーが出る  
現時点でESMの完全対応は Storybook v9.x など一部で不完全なため、非推奨になっている  
