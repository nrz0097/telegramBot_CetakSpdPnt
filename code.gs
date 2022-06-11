var tokenBot = "5555246486:AAEmu_gAQ9JPuwtww4Ugps6SZcqi4Ak6SDg"; //token bot telegram
var urlBot = "https://api.telegram.org/bot" + tokenBot; //url api bot
var webAppUrl = "https://script.google.com/macros/s/AKfycbz-4sbUNKYM_z-zVIe86zja_Mpr-jEn-nO1c7iGACmwKeOc-psv/exec"; //urlapp
var sheetId = "1DC9hYdVPshCsynFvTCfZ2oobTbKENb94gSLVWlC4fpE"; //google sheet id

//fungsi set webhook
function setWebhook(){
  var hookUrl = UrlFetchApp.fetch(urlBot + '/setWebhook?url=' + webAppUrl);
  Logger.log(hookUrl.getContentText());
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
function doPost(e){
  var datas = JSON.parse(e.postData.contents);
  var txtId = datas.message.message_id;
  var chtId = datas.message.chat.id; 
  var pesan = datas.message.text;
  var cmd = pesan.toLowerCase();
  
  
//membuat command
  if (cmd.substr(0,6) == '/start'){
    start(chtId, cmd);
  }
  if (cmd.substr(0,5) == '/help'){
    help(chtId, cmd);
  }
  if (cmd.substr(0,7) == '/format'){
    format(chtId, cmd);
  }
  if (cmd.substr(0,6) == 'tambah'){
    tambah(chtId, pesan);
  }
  if (cmd.substr(0,4) == 'edit'){
    edit(chtId, pesan);
  }
  if (cmd.substr(0,8) == '/caripnt'){
    caripnt(chtId, cmd);
  }
  if (cmd.substr(0,8) == '/carispd'){
    carispd(chtId, cmd);
  }
  if (cmd.substr(0,5) == 'hapus'){
    hapus(chtId, cmd);
  }
  if (cmd.substr(0,7) == '/tambah'){
    tambahFrmt(chtId, cmd);
  }
  if (cmd.substr(0,7) == '/edit'){
    editFrmt(chtId, cmd);
  }
  if (cmd.substr(0,8) == '/cariall'){
    cariall(chtId, cmd);
  }
  if (cmd.substr(0,7) == '/carino'){
    carino(chtId, cmd);
  }
  if (cmd.substr(0,7) == '/hapus'){
    hapusFrmt(chtId, cmd);
  }
}


