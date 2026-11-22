// ==================================================
// 1. 下拉式選單
// ==================================================

function toggleMenu(element) {

  const menu = element.nextElementSibling;

  // 關閉其他下拉選單
  document.querySelectorAll('.dropdown-menu').forEach(function(otherMenu) {
    if (otherMenu !== menu) {
      otherMenu.classList.remove('show');
    }
  });

  menu.classList.toggle('show');
}


// ==================================================
// 2. 右側展開式選單
// ==================================================

function toggleSideMenu(element) {

  const menu = element.nextElementSibling;

  // 關閉其他右側選單
  document.querySelectorAll('.side-dropdown-menu').forEach(function(otherMenu) {
    if (otherMenu !== menu) {
      otherMenu.classList.remove('show');
    }
  });

  // 開啟或關閉目前選單
  menu.classList.toggle('show');
}


// ==================================================
// 3. 點擊其他地方或選單連結時，自動收起選單
// ==================================================

document.addEventListener('click', function(event) {

  // 點擊右拉選單內的連結時
  if (event.target.closest('.side-dropdown-menu a')) {

    // 關閉所有右拉選單
    document.querySelectorAll('.side-dropdown-menu').forEach(function(menu) {
      menu.classList.remove('show');
    });

  }

  // 點擊下拉式選單以外的地方
  if (!event.target.closest('.dropdown')) {

    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
      menu.classList.remove('show');
    });

  }

  // 點擊右拉選單以外的地方
  if (!event.target.closest('.side-dropdown')) {

    document.querySelectorAll('.side-dropdown-menu').forEach(function(menu) {
      menu.classList.remove('show');
    });

  }

});


// ==================================================
// 4. 防止重新整理後停留在原本的捲動位置
// ==================================================

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}


// ==================================================
// 5. 頁面載入後回到最上方
// ==================================================

window.addEventListener("load", function() {
  window.scrollTo(0, 0);
});


// ==================================================
// 6. 回到頁首按鈕
// ==================================================

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {

  if (backToTop) {

    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }

  }

});


// ==================================================
// 7. 圖片點擊放大
// ==================================================

function openImage(img) {

  const modal = document.getElementById("imageModal");
  const largeImage = document.getElementById("largeImage");

  largeImage.src = img.src;
  largeImage.alt = img.alt;

  modal.style.display = "flex";

  // 防止背景捲動
  document.body.style.overflow = "hidden";
}


// ==================================================
// 8. 關閉圖片
// ==================================================

function closeImage() {

  document.getElementById("imageModal").style.display = "none";

  // 恢復背景捲動
  document.body.style.overflow = "";

}


// ==================================================
// 9. 按 ESC 關閉圖片與所有選單
// ==================================================

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    // 關閉圖片
    closeImage();

    // 關閉下拉式選單
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
      menu.classList.remove('show');
    });

    // 關閉右側展開式選單
    document.querySelectorAll('.side-dropdown-menu').forEach(function(menu) {
      menu.classList.remove('show');
    });

  }

});
