/*验证是否同意协议*/
// function checkAgree() {
//     document.MyForm.subm.disabled = !document.MyForm.isAgree.checked;
// }
/* 验证用户名 */
function checkUsername() {
    var reg = /^\D\w{4,9}$/ig;/* 不能以数字开头，长度在5-10位 */
    var id = "uname";
    return commonInfo(reg, id);
}
/* 验证密码 */
function checkPassword() {
    var reg = /^\d{6}$/ig;/* 必须是数字，位数为6位 */
    var id = "upwd";
    return commonInfo(reg, id);
}

/* 验证真实姓名 */
function checkTruename() {
    var reg = /^[\u4e00-\u9fa5]{2,4}$/ig;/* 必须是2-4位的汉字 */
    var id = "tname";
    return commonInfo(reg, id);
}
/* 验证电子邮箱 */
function checkEmail() {

    // /* 字母数字下划线[a0_] + （0-N个".a0_"） + @ + a0_ + （1-2组由2-3个a0_组成的字符，如com.cn或com） */

    var reg = /^(\w)+(\.\w)*@(\w)+(\.\w{2,3}){1,2}$/ig;
    var id = "email";
    return commonInfo(reg, id);
}
/* 验证手机号 */
function checkPhone() {
    var reg = /^1[35789]\d{9}$/ig;/* 这个比较简单，不说了 */
    var id = "phone";
    return commonInfo(reg, id);
}



/* 提取公共的文本类表单项验证 */
function commonInfo(reg, id) {
    var inputText = document.getElementById(id);//获取当前块的id
    var inputValue = inputText.value;//该id下的value值赋值给了inputValue
    var inputAlt = inputText.alt;
    var inputSpan = document.getElementById(id + "Span");//将id的对象和一行内的Span绑在一起

    if (inputValue == null || inputValue.length === 0) {
        inputSpan.innerHTML = inputAlt + "不能为空！";
        inputSpan.style.color = "red";
        inputSpan.style.background="none";
        return false;
    } else {
        if (!reg.test(inputValue)) {//test()作用是返回reg(这是一个正则表达式)格式中是否有inputValue样式的值存在，若有，则返回true
            inputSpan.innerHTML = inputAlt + "格式有误！";
            inputSpan.style.color = "red";
            inputSpan.style.background="none";
            return false;
        } else {
            inputSpan.innerHTML = "√";
            inputSpan.style.color = "white";
            inputSpan.style.background="rgb(50,200,100)";//RGB就是在调色，里面的三个参数代表了改颜色
            inputSpan.style.padding="0.1px 2px";
            inputSpan.style.borderRadius="100%";//这是为该样式设置圆角，100%就是正圆
            return true;
        }
    }
}

/* 验证两次密码是否一致 */
function checkSames() {
    var reg = /^\d{6}$/ig;/* 必须是数字，位数为6位 */
    var inputText = document.getElementById("qrpwd");
    var inputValue = inputText.value;
    var inputAlt = inputText.alt;
    var inputSpan = document.getElementById("qrpwdSpan");
    var first = document.getElementById("upwd").value;
    if (inputValue == null || inputValue.length === 0) {
        inputSpan.innerHTML = inputAlt + "不能为空！";
        inputSpan.style.color = "red";
        return false;
    } else {
        if (!reg.test(inputValue)) {
            inputSpan.innerHTML = inputAlt + "格式有误！";
            inputSpan.style.color = "red";
            inputSpan.style.background="none";
            return false;
        } else {
            if (first === inputValue) {
                inputSpan.innerHTML = "√";
                inputSpan.style.color = "white";
                inputSpan.style.background="rgb(50,200,100)";
                inputSpan.style.padding="2px 4px";
                inputSpan.style.borderRadius="15px";
                return true;
            } else {
                inputSpan.innerHTML = "两次密码输入不一致";
                inputSpan.style.color = "red";
                inputSpan.style.background="none";
                return false;
            }
        }
    }
}

/* 验证爱好的选择 */
function checkHobby() {
    var choice = document.getElementsByName("hobby");/* 注意这里只能通过name值获得，因为id是为唯一的 */
    var Hspan = document.getElementById("hobbySpan");
    var count = 0;
    //获取到的name值是一个数组，所以想要得到其中的各个值，就要遍历
    for (var i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            count++;
        }
    }
    if (count >= 2) {
        Hspan.innerHTML = "OK！";
        Hspan.style.color = "green";
        return true;
    } else {
        Hspan.innerHTML = "至少选择两项！";
        Hspan.style.color = "red";
        return false;
    }
}
/* 验证是否可以提交 */
function checkSubmit() {

    return checkUsername() && checkPassword() && checkSames() &&  checkEmail()
        && checkTruename() && checkHobby() && checkPhone() && pop();
}
// 弹出提交确认对话框
function pop(){
    var result = window.confirm("如果您确认好信息的话，就点确定吧！");
    if (!result){
        return false;
    }else{
        return true;
    }
}
// function changeColor(butt){
//     //鼠标滑过按钮时，按钮变色
//     butt.style.background = "#0f0";
// }
// function changeColor(butt){
//     butt.style.background = "#0f0"
// }

// /* 获得验证码 */
// function getCode() {
//     var code = parseInt(Math.random() * 9000 + 1000);
//     var span = document.getElementById("getCode");
//     span.innerHTML = code;
//     span.style.fontSize = "18px";
//     span.style.padding = "3px 6px";
//     span.style.color = "red";
//     span.style.textDecoration= "line-through";
//     span.style.cursor = "pointer";
//     span.style.border = "1px #000 solid";
// }
//
// /* 校验验证码 */
// function checkCode() {
//     var code = document.getElementById("getCode").innerHTML;
//     var inputCode = document.getElementById("checkcode").value;
//     var inputSpan = document.getElementById("codeSpan");
//     if (inputCode == null || inputCode.length == 0) {
//         inputSpan.innerHTML = "验证码不能为空！";
//         inputSpan.style.color = "red";
//         return false;
//     } else {
//         if (inputCode != code) {
//             inputSpan.innerHTML = "验证码输入错误！";
//             inputSpan.style.color = "red";
//             return false;
//         } else {
//             inputSpan.innerHTML = "OK！";
//             inputSpan.style.color = "green";
//             return true;
//         }
//     }
// }



