let userTK = document.querySelector('#tendangnhap');
let userMK = document.querySelector('#matkhau');
let buttonDK_DN = document.querySelector('.btn-continue');

// không cho phép người dùng nhập vào dấu cách (Space)
[userTK, userMK].forEach(input => {
    input.addEventListener('keydown', function(e){
        if (e.code === 'Space'){
            e.preventDefault();
        }
    })
    input.addEventListener('input', function(){
        if (input === userTK){
            document.querySelector('#thongbao_loiTK').innerHTML = '';
            userMK.classList.remove('error');
        }
        if (input === userMK){
            document.querySelector('#thongbao_loiMK').innerHTML = '';
            userMK.classList.remove('error');
        }

        if (userTK.value && userMK.value){
            buttonDK_DN.classList.add('style-btn-DK_DN');
        }
        else {
            buttonDK_DN.classList.remove('style-btn-DK_DN');
        }
    })
})

// điều kiện để nút đăng ký hoạt động
buttonDK_DN.addEventListener('click', function(e){
    
    e.preventDefault();

    let tk = 'admin';
    let mk = 'admin2006';

    let coChuSo = /[0-9]/.test(userMK.value);
    if (userMK.value !== mk){
        document.querySelector('#thongbao_loiMK').innerHTML = 'Mật khẩu không đúng!';
        userMKlan2.classList.add('error');
    }
    else if (userTK.value !== tk || userMK.value !== mk){
        document.querySelector('#thongbao_loiMK').innerHTML = 'Tài khoản hoặc mật khẩu không đúng!';
        userMKlan2.classList.add('error');
    }
    else {
        alert('Đăng nhập thành công');
        window.location.href = 'index.html';
    }
})