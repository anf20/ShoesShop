console.log("starting tweck");
const product1 = document.getElementById("product1");
const wrapper = document.getElementById("wrapper");
const newBox = document.getElementById("newBox");
const home = document.getElementById("home");
const product = document.getElementById("product");
const productBox1 = document.getElementById("productBox1");
const productBox2 = document.getElementById("productBox2");
const productBox3 = document.getElementById("productBox3");
const productBox4 = document.getElementById("productBox4");
const productBox5 = document.getElementById("productBox5");
const productBox6 = document.getElementById("productBox6");
const back = document.getElementById("back");

function getDetail(nomor) {
  console.log("produk: ", nomor);
  newBox.style.display = "flex";
  home.style.display = "none";
  product.style.display = "none";
  wrapper.style.display = "none";

  if (nomor === 1) {
    productBox1.style.display = "flex";
    productBox2.style.display = "none";
    productBox3.style.display = "none";
    productBox4.style.display = "none";
    productBox5.style.display = "none";
    productBox6.style.display = "none";
  } else if (nomor === 2) {
    productBox1.style.display = "none";
    productBox2.style.display = "flex";
    productBox3.style.display = "none";
    productBox4.style.display = "none";
    productBox5.style.display = "none";
    productBox6.style.display = "none";
  } else if (nomor === 3) {
    productBox1.style.display = "none";
    productBox2.style.display = "none";
    productBox3.style.display = "flex";
    productBox4.style.display = "none";
    productBox5.style.display = "none";
    productBox6.style.display = "none";
  } else if (nomor === 4) {
    productBox1.style.display = "none";
    productBox2.style.display = "none";
    productBox3.style.display = "none";
    productBox4.style.display = "flex";
    productBox5.style.display = "none";
    productBox6.style.display = "none";
  } else if (nomor === 5) {
    productBox1.style.display = "none";
    productBox2.style.display = "none";
    productBox3.style.display = "none";
    productBox4.style.display = "none";
    productBox5.style.display = "flex";
    productBox6.style.display = "none";
  } else if (nomor === 6) {
    productBox1.style.display = "none";
    productBox2.style.display = "none";
    productBox3.style.display = "none";
    productBox4.style.display = "none";
    productBox5.style.display = "none";
    productBox6.style.display = "flex";
  }
}

function kembali() {
  console.log("kembli");
  newBox.style.display = "none";
  wrapper.style.display = "flex";
  home.style.display = "flex";
  product.style.display = "flex";
}
