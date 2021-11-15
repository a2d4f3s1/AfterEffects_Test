function createJSONFile(object) {
    var FPath = new File($.fileName).parent // JSXファイルが含まれるフォルダを取得
    jsonPath = String(FPath)+'/JSON_Write_Sample1_Result.json'; // いったん合成
    var jsonFile = File(jsonPath); // ファイルとしてロード
    $.writeln (jsonFile); // パスが読めてるかの確認

    var res = jsonFile.open('w'); // ファイルを開く
    if (res) { // 開けているかどうか
        $.writeln('オープン成功');
        // 書き込み
        var res=jsonFile.write(JSON.stringify(object, null , "\t"));
        // 書き込み結果
        if (res) {
            alert('書き込み成功');
        } else {
            alert('書き込み失敗');
        }
        jsonFile.close(); // 最後は閉じる
    } else {
        $.writeln('オープン失敗');
    }
}

var obj = {
	"compoNames": "AAAA",
	"width": 300,
	"height": 400,
	"Layers": 3
}

createJSONFile(obj);



