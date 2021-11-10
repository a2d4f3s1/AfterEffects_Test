$.writeln("*********************");

var Tartget = app.project.item(8);
$.writeln("\"Tartget name\" = "+Tartget.name);
//$.writeln("\"testComp.parentFolde\" = "+String(testComp.parentFolder.name));


//Get Top Folder ( Recursive function);
function fn_GetTopFolder(Node) {
    $.writeln("\"Node Name 1\" = "+Node.name);
    if ( Node.parentFolder.name !== "ルート") {
        $.writeln("\"Node ParentName\" = "+String(Node.parentFolder.name));
        fn_GetTopFolder(Node.parentFolder);
    }
     $.writeln("\"Node Name 2\" = "+Node.name);
    return Node;
}

var Node = fn_GetTopFolder(testComp);
$.writeln("\"A Node Name 3\" = "+Node.name);
