var tokenBot = "xxx"; //token bot telegram
var urlBot = "https://api.telegram.org/bot" + tokenBot; //url api bot
var webAppUrl = "xxx"; //urlapp
var sheetId = "xxx"; //google sheet id

//fungsi set webhook
function setWebhook() {
    var hookUrl = UrlFetchApp.fetch(urlBot + '/setWebhook?url=' + webAppUrl);
}

//fungsi send text
function sendText(chatId, txtPesan) {
    var data = {
        method: "post",
        payload: {
            parse_mode: "HTML"
        }
    };
    var url = urlBot + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(txtPesan);
    var response = UrlFetchApp.fetch(url, data);
}

//fungsi dopost
function doPost(e) {
    var datas = JSON.parse(e.postData.contents);
    var txtId = datas.message.message_id;
    var chtId = datas.message.chat.id;
    var pesan = datas.message.text;
    var cmd = pesan.toLowerCase();

    //membuat command
    if (cmd.substr(0, 6) == '/start') {
        start(chtId, cmd);
    }
    if (cmd.substr(0, 5) == '/help') {
        help(chtId, cmd);
    }
    if (cmd.substr(0, 8) == '/caripnt') {
        caripnt(chtId, cmd);
    }
    if (cmd.substr(0, 8) == '/carispd') {
        carispd(chtId, cmd);
    }
    if (cmd.substr(0, 10) == '/caricetak') {
        caricetak(chtId, cmd);
    }
    if (cmd.substr(0, 12) == '/cariproses') {
        cariproses(chtId, cmd);
    }
    if (cmd.substr(0, 9) == '/caridone') {
        caridone(chtId, cmd);
    }
    if (cmd.substr(0, 13) == '/tambahformat') {
        tambahFrmt(chtId, cmd);
    }
    if (cmd.substr(0, 11) == '/editformat') {
        editFrmt(chtId, cmd);
    }
    if (cmd.substr(0, 12) == '/hapusformat') {
        hapusFrmt(chtId, cmd);
    }
    if (cmd.substr(0, 5) == '/edit') {
        editData(chtId, cmd);
    }
    if (cmd.substr(0, 8) == '/cariall') {
        cariall(chtId, cmd);
    }
    if (cmd.substr(0, 7) == '/carino') {
        carino(chtId, cmd);
    }
    if (cmd.substr(0, 6) == 'tambah') {
        tambah(chtId, pesan);
    }
    if (cmd.substr(0, 4) == 'edit') {
        edit(chtId, pesan);
    }
    if (cmd.substr(0, 5) == 'hapus') {
        hapus(chtId, cmd);
    }
}
