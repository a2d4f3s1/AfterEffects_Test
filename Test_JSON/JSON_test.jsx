function createJSONFile(object) {
    var FPath = new File($.fileName).parent // JSXファイルが含まれるフォルダを取得するサンプル
    jsonPath = String(FPath)+'/testJSON2.json';


    var jsonFile = File(jsonPath);
    $.writeln (jsonFile);

    var res = jsonFile.open('w');
    if (res) {
        $.writeln('オープン成功');
        $.writeln (object);
        var res=jsonFile.write(JSON.stringify(object, null , "\t"));
        if (res) {
            $.writeln('書き込み成功');
        } else {
            $.writeln('書き込み失敗');
        }
        jsonFile.close();
    } else {
        $.writeln('オープン失敗');
    }
}

function readJSONFile(file) {
    file.open('Y');
    var date = file.read();
    date = JSON.parse(date);
    for(var i in data) {
        $.writeln (i+ " = " +data[i]);
        }
    }

var obj = {
    compoNames:"AAAA",
    width: 300,
    height: 400,
    Layers: 3
    }

createJSONFile(obj);
//readJSONFile(File("testJSON.json"));
