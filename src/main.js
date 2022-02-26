let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 你好，我是小徐
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来，把这个div
 * 变成一个圆,并把border隐藏
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加两个神秘的小球
**/
#div1::before {
    background: #000;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%; 
    background: radial-gradient(circle, rgba(255,255,255,1) 18%, rgba(0,0,0,1) 18%);
}
#div1::after {
    background: #fff;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 18%, rgba(255,255,255,1) 18%);
}
`   
let n = 0;
let string2 = '';



/**
 * 实现文本内容逐字输出
 */
let step = () => {
    setTimeout(()=>{
        if(string[n] === '\n'){
            string2 += '<br>';
        } else if(string[n] === ' '){
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n+1);
        n++;
        if(n < string.length){
            step();
        }
    },20)
   
}

step();