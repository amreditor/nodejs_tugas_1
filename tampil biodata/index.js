const biodata = require("./biodata.js");

function tampilBiodata() {
  console.log("nama :" + biodata.nama);
  console.log("umur :" + biodata.umur);
  console.log("pendidikan terakhir:" + biodata.pendidikan_terakhir);
  console.log("tempat/tanggal lahir :" + biodata.TTL);
}

tampilBiodata();
