let userTK = document.querySelector('#tendangnhap');
let userMK = document.querySelector('#matkhau');
let userMKlan2 = document.querySelector('#matkhaulan2');
let buttonDK_DN = document.querySelector('.btn-continue');

// không cho phép người dùng nhập vào dấu cách (Space)
[userTK, userMK, userMKlan2].forEach(input => {
    input.addEventListener('keydown', function(e){
        if (e.code === 'Space'){
            e.preventDefault();
        }
    })
    input.addEventListener('input', function(){
        if (input === userMK){
            document.querySelector('#thongbao_loiMK').innerHTML = '';
            userMK.classList.remove('error');
        }
        if (input === userMKlan2){
            document.querySelector('#thongbao_loiMKlan2').innerHTML = '';
            userMKlan2.classList.remove('error');
        }

        if (userTK.value && userMK.value && userMKlan2.value){
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

    let coChuSo = /[0-9]/.test(userMK.value);

    if (!coChuSo){
        document.querySelector('#thongbao_loiMK').innerHTML = 'Mật khẩu phải có ít nhất 1 chữ số!';
        userMK.classList.add('error');
    }
    else if (userMK.value !== userMKlan2.value){
        document.querySelector('#thongbao_loiMKlan2').innerHTML = 'Mật khẩu lần 2 của bạn không trùng khớp!';
        userMKlan2.classList.add('error');
    }
    else {
        alert('Đăng ký thành công');
        window.location.href = 'loginup.html';
    }
})