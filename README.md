拉模板代码 
shopify theme pull --store=heybike-uk.myshopify.com
shopify theme push --store=heybike-uk.myshopify.com

启动本地开发
shopify theme dev -e dev

启动tailwind监听
npx tailwindcss -i ./assets/app-tailwind.css -o ./assets/tw-custom.css --watch

$env:http_proxy = "http://127.0.0.1:10010"
$env:https_proxy = "http://127.0.0.1:10010"
$env:all_proxy = "http://127.0.0.1:10010"