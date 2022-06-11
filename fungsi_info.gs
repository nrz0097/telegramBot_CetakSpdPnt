//teks command /start
function start(chtId, cmd) {
  var txtStart = 
  "<b>🤖 SELAMAT DATANG DI BOT INI!</b>" + "\n"
  + "Silahkan klik command /help untuk bantuan.";
  sendText(chtId, txtStart);
}

//teks command /help
function help(chtId, cmd) {
  var txtHelp = 
  "<b>DAFTAR COMMAND BOT</b>" + "\n"
  + "--------------------------" + "\n"
  + "1. /tambah - Untuk menambah data" + "\n"
  + "2. /edit - Untuk mengubah data" + "\n"
  + "3. /caripnt - Untuk menampilkan data PNT" + "\n"
  + "4. /carispd - Untuk menampilkan data SPD" + "\n"
  + "5. /cariall - Untuk menampilkan semua data" + "\n"
  + "6. /carino - Untuk menampilkan no yang sudah ada" + "\n"
  + "7. /hapus - Untuk menghapus data" + "\n"
  + "8. /help - Untuk bantuan" + "\n"
  + "9. /format - Contoh penulisan perintah"; 
  
  sendText(chtId, txtHelp);
}

//teks command /format
function format(chtId, cmd){
  var txtFormat = 
  "<b>FORMAT PENGGUNAAN BOT</b>" + "\n"
  + "--------------------------" + "\n"
  + "1. /tambah & /edit data :" + "\n"
  + "<b>Command@</b>(Nomor)" + "\n"
  + "<b>KODE :</b> (PNT/SPD)" + "\n"
  + "<b>UKURAN :</b> (Ukuran)" + "\n"
  + "<b>TOKO :</b> (Nama toko)" + "\n"
  + "<b>PIC :</b> (Orang yang request)" + "\n"
  + "<b>STATUS :</b> (Done/Proses)" + "\n"
  + "--------------------------" + "\n"
  + "2. /caripnt /carispd" + "\n"
  + "--------------------------" + "\n"
  + "3. /hapus data :" + "\n"
  + "<b>Command@</b>(Nomor)";
  
  sendText(chtId, txtFormat);
}

//teks command tambah
function tambahFrmt(chtId, cmd){
  var txtTbh = 
  "Tambah@" + "\n"
  + "KODE : " + "\n"
  + "UKURAN : " + "\n"
  + "TOKO : " + "\n"
  + "PIC : " + "\n"
  + "STATUS : ";
  sendText(chtId, txtTbh);
}
//teks command edit
function editFrmt(chtId, cmd){
  var txtEdt = 
  "Edit@" + "\n"
  + "KODE : " + "\n"
  + "UKURAN : " + "\n"
  + "TOKO : " + "\n"
  + "PIC : " + "\n"
  + "STATUS : ";
  sendText(chtId, txtEdt);
}
//teks command hapus
function hapusFrmt(chtId, cmd){
  var txtHps = "Hapus@";
  sendText(chtId, txtHps);
}
