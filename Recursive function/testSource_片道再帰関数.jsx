$.writeln("*********************");

var Target = app.project.item(8);

$.writeln("\"Target Name\" = "+Target.name);

//Get Top Folder ( Recursive function);
function fn_GetTopFolder(Node) { 
    $.writeln("\"Node Name\" = "+Node.name);
    if ( Node.parentFolder.name !== "ルート") {
        $.writeln("\"Node ParentName\" = "+String(Node.parentFolder.name));
        return ( fn_GetTopFolder(Node.parentFolder) );
    }
    return Node;
}

var Node = fn_GetTopFolder(Target);
$.writeln("\"Result Node Name \" = "+Node.name);
