function createJSONFile(object) {
    var FPath = new File($.fileName).parent // JSXファイルが含まれるフォルダを取得
    jsonPath = String(FPath)+'/JSON_Write_Sample2_Result.json'; // いったん合成
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
    "charactors":{
        // チーム1
        // あああ
        "AAA":{"footage":["col","lin","msk_eye","msk_hair","msk_hi","msk_skin"]},
        // べべえ
        "BBB":{"footage":["col","lin","msk_eye","msk_hair","msk_hi","msk_skin"]},
        // ちちち
        "CCC":{"footage":["col","lin","msk_eye","msk_hair","msk_hi","msk_skin"]},
        
        // チーム2
        // ででで
        "DDD":{"footage":["col","lin","msk_eye","msk_hair","msk_hi","msk_skin"]},
        // えええ
        "EEE":{"footage":["col","lin","msk_eye","msk_hair","msk_hi","msk_skin"]},
        // ふふふ
        "FFF":{"footage":["col","lin","msk_eye","msk_hair","msk_hi","msk_skin"]},
        // ぐぐぐ
        "GGG":{"footage":["col","lin","msk_eye","msk_hair","msk_hi","msk_skin"]},
        // ははは
        "HHH":{"footage":["col","lin","msk_eye","msk_hair","msk_hi","msk_skin"]} //※ここだけカンマなし
    },
    
    // 設定の方が圧倒的に触る事少なそうなので後ろに
    "setting":{
        //none:何も書かない //keyName:キーの名前を使う //const:固定？2つ目の値を使う
        "prefix" : ["keyName",""],
        "suffix" : ["const","base"],
        "Separator" :["const","_"]
    }
}

createJSONFile(obj);



