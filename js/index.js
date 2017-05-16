//import sharedbAce from "sharedb-ace";
const sharedbAce = require("sharedb-ace");

const editor = ace.edit("editor"); 
editor.setTheme("ace/theme/twilight");
const session = editor.getSession();
session.setMode("ace/mode/javascript");
session.setNewLineMode("unix");

function get(url, callback){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      callback(JSON.parse(xmlhttp.responseText));
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//get("http://localhost:3000/gists/latest", function(data) {
get("http://104.131.162.189/gists/latest", function(data) {
  const ShareAce = new sharedbAce(data.id, {
    //WsUrl: "ws://localhost:3000/ws",
    WsUrl: "ws://104.131.162.189:3000/ws",
    pluginWsUrl: "ws://localhost:3108/ws",
    namespace: "codepad",
  });
  ShareAce.on('ready', function() {
    ShareAce.add(editor, ["code"], [
      /* Do add any plugins for now
      SharedbAceRWControl,
      SharedbAceMultipleCursors
      */
    ]);
    //ShareAce.add(editor2, ["testcases"], []); 
  });
})
