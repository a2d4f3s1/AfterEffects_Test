function readJSONFile(file) {
    $.writeln(file);
    var res = file.open('r');
    $.writeln(res);
    // 開けてるかテスト
    if (res) {
        var data = file.read();
        data = JSON.parse(data);
        for(var i in data) {
            $.writeln (i+ " = " +data[i]);
        }
    } else {
        $.writeln('オープン失敗');
    }
}

var FPath = new File($.fileName).parent // JSXファイルが含まれるフォルダを取得するサンプル
$.writeln(FPath);
jsonPath = String(FPath)+'/JSON_Read_Sample1.json';
$.writeln(jsonPath);
readJSONFile(File(jsonPath));
