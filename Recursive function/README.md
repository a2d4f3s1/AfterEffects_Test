フォルダの親を探しに行く時は片道を使う  
` return ( fn_GetTopFolder(Node.parentFolder) );`  
再帰部分で return を使うのがポイントっぽい

testSource_片道再帰関数.jsx の結果
```
*********************
"Target Name" = 名称未設定 8
"Node Name" = 名称未設定 8
"Node ParentName" = 名称未設定 7
"Node Name" = 名称未設定 7
"Node ParentName" = 名称未設定 6
"Node Name" = 名称未設定 6
"Node ParentName" = 名称未設定 5
"Node Name" = 名称未設定 5
"Node ParentName" = 名称未設定 4
"Node Name" = 名称未設定 4
"Node ParentName" = 名称未設定 3
"Node Name" = 名称未設定 3
"Node ParentName" = 名称未設定 2
"Node Name" = 名称未設定 2
"Node ParentName" = 名称未設定 1
"Node Name" = 名称未設定 1
"Node Name " 2 = 名称未設定 1
結果 : undefined
```
testSource_基本再帰関数.jsx の結果
```
*********************
"Tartget name" = 名称未設定 8
"Node Name 1" = 名称未設定 8
"Node ParentName" = 名称未設定 7
"Node Name 1" = 名称未設定 7
"Node ParentName" = 名称未設定 6
"Node Name 1" = 名称未設定 6
"Node ParentName" = 名称未設定 5
"Node Name 1" = 名称未設定 5
"Node ParentName" = 名称未設定 4
"Node Name 1" = 名称未設定 4
"Node ParentName" = 名称未設定 3
"Node Name 1" = 名称未設定 3
"Node ParentName" = 名称未設定 2
"Node Name 1" = 名称未設定 2
"Node ParentName" = 名称未設定 1
"Node Name 1" = 名称未設定 1
"Node Name 2" = 名称未設定 1
"Node Name 2" = 名称未設定 2
"Node Name 2" = 名称未設定 3
"Node Name 2" = 名称未設定 4
"Node Name 2" = 名称未設定 5
"Node Name 2" = 名称未設定 6
"Node Name 2" = 名称未設定 7
"Node Name 2" = 名称未設定 8
"A Node Name 3" = 名称未設定 8
結果 : undefined
```
こっちは一番上まで辿った後に戻ってきてる
