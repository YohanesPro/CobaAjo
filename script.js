//toggle
    let toggle1 = document.getElementById('default-toggle1');
    let toggle2 = document.getElementById('default-toggle2');
    let toggle3 = document.getElementById('default-toggle3');
    let toggle4 = document.getElementById('default-toggle4');
    let toggle5 = document.getElementById('default-toggle5');
    let toggle6 = document.getElementById('default-toggle6');
    let toggle7 = document.getElementById('default-toggle7');
    let toggle8 = document.getElementById('default-toggle8');
    let toggle9 = document.getElementById('default-toggle9');
    let toggle10 = document.getElementById('default-toggle10');

    //lampu
    let lampu1 = document.getElementById('lampu1');
    let lampu2 = document.getElementById('lampu2');
    let lampu3 = document.getElementById('lampu3');
    let lampu4 = document.getElementById('lampu4');
    let lampu5 = document.getElementById('lampu5');
    let lampu6 = document.getElementById('lampu6');
    let lampu7 = document.getElementById('lampu7');
    let lampu8 = document.getElementById('lampu8');
    let lampu9 = document.getElementById('lampu9');
    let lampu10 = document.getElementById('lampu10');

    //toggle ruangan
    let toggle_tamu = document.getElementById('toggletamu');
    let toggle_kamar = document.getElementById('togglekamar');
    let toggle_dapur = document.getElementById('toggledapur');
    let toggle_mandi = document.getElementById('togglemandi');

function saklar(){
    if(toggle1.checked){
        lampu1.src  = "assets/image/on.gif";
        }
        else{
            lampu1.src  = "assets/image/off.gif";
        }
    if(toggle2.checked){
        lampu2.src  = "assets/image/on.gif";
        }
        else{
            lampu2.src  = "assets/image/off.gif";
        }
    if(toggle3.checked){
        lampu3.src  = "assets/image/on.gif";
        }
        else{
            lampu3.src  = "assets/image/off.gif";
        }
    if(toggle4.checked){
        lampu4.src  = "assets/image/on.gif";
        }
        else{
            lampu4.src  = "assets/image/off.gif";
        }
    if(toggle5.checked){
        lampu5.src  = "assets/image/on.gif";
        }
        else{
            lampu5.src  = "assets/image/off.gif";
        }
    if(toggle6.checked){
        lampu6.src  = "assets/image/on.gif";
        }
        else{
            lampu6.src  = "assets/image/off.gif";
        }
    if(toggle7.checked){
        lampu7.src  = "assets/image/on.gif";
        }
        else{
            lampu7.src  = "assets/image/off.gif";
        }
    if(toggle8.checked){
        lampu8.src  = "assets/image/on.gif";
        }
        else{
            lampu8.src  = "assets/image/off.gif";
        }
    if(toggle9.checked){
        lampu9.src  = "assets/image/on.gif";
        }
        else{
            lampu9.src  = "assets/image/off.gif";
        }
    if(toggle10.checked){
        lampu10.src  = "assets/image/on.gif";
        }
        else{
            lampu10.src  = "assets/image/off.gif";
        }
}

function saklarRuangan(){
    //Ruang tamu
    if(toggle_tamu.checked){
        toggle1.checked = true;
        toggle2.checked = true;
        toggle3.checked = true;
        lampu1.src  = "assets/image/on.gif";
        lampu2.src  = "assets/image/on.gif";
        lampu3.src  = "assets/image/on.gif";
    }else{
        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
        lampu1.src  = "assets/image/off.gif";
        lampu2.src  = "assets/image/off.gif";
        lampu3.src  = "assets/image/off.gif";
    }
    //Kamar
    if(toggle_kamar.checked){
        toggle4.checked = true;
        lampu4.src  = "assets/image/on.gif";
    }else{
        toggle4.checked = false;
        lampu4.src  = "assets/image/off.gif";
    }
    //Dapur
    if(toggle_dapur.checked){
        toggle5.checked = true;
        toggle6.checked = true;
        lampu5.src  = "assets/image/on.gif";
        lampu6.src  = "assets/image/on.gif";
    }else{
        toggle5.checked = false;
        toggle6.checked = false;
        lampu5.src  = "assets/image/off.gif";
        lampu6.src  = "assets/image/off.gif";
    }
    //Kamar Mandi
    if(toggle_mandi.checked){
        toggle7.checked = true;
        toggle8.checked = true;
        toggle9.checked = true;
        toggle10.checked = true;
        lampu7.src  = "assets/image/on.gif";
        lampu8.src  = "assets/image/on.gif";
        lampu9.src  = "assets/image/on.gif";
        lampu10.src  = "assets/image/on.gif";
    }else{
        toggle7.checked = false;
        toggle8.checked = false;
        toggle9.checked = false;
        toggle10.checked = false;
        lampu7.src  = "assets/image/off.gif";
        lampu8.src  = "assets/image/off.gif";
        lampu9.src  = "assets/image/off.gif";
        lampu10.src  = "assets/image/off.gif";
    }
}