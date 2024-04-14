// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle("hidden");
})

document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInsideMenu && !navMenu.classList.contains('hidden')) {
      navMenu.classList.add('hidden');
    hamburger.classList.toggle('hamburger-active');

    }
  });

function notif(){
    alert('Heheh blm ada bg')   
}

// Navbar fix
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    } else{
        header.classList.remove('navbar-fixed')
    }
}

//hapus notif sukses
  function removeSukses(){
    var sukses = document.getElementById("notif-sukses");
    sukses.classList.toggle('hidden')
    
  }

//   hapus notif error
  function removeError(){
    var gagal = document.getElementById("notif-gagal");
    gagal.classList.toggle('hidden')
  }

// form contact
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzwA8E-o3WUa5Efo5T-h7Deop8TLS6XCmPYUypdTf9Wm8XeksS6Qj9ymxGDMHdOknS6/exec'

    const form = document.forms['form-contact']
    const btnKirim = document.querySelector(".btn-kirim")
    const loading = document.querySelector("#loading")
    const notifSukses = document.querySelector("#notif-sukses")
    const notifGagal = document.querySelector("#notif-gagal")
    const hapusNotif1 = document.querySelector("hapus-notif1")
    const hapusNotif2 = document.querySelector("hapus-notif2")
    

    form.addEventListener('submit', e => {
      e.preventDefault();
      // munculkan loading
      loading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');

        // Mendapatkan nilai dari input
        var formData = new FormData(form);
        var name = formData.get('nama');
        var email = formData.get('email');
        var message = formData.get('pesan');

        //menangkap isi inputan
          if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
          alert('Mohon isi semua kolom!');
          loading.classList.toggle("hidden");
          btnKirim.classList.toggle("hidden");
          return; // Menghentikan pengiriman formulir jika ada input kosong
            }


      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>{
          loading.classList.toggle('hidden');
          btnKirim.classList.toggle('hidden');
          notifSukses.classList.toggle('hidden')
          form.reset()
        })
      
        .catch(error => {
          loading.classList.toggle('hidden');
          btnKirim.classList.toggle('hidden');
          notifGagal.classList.toggle('hidden')
          console.log(error)
          form.reset()
        })
    })