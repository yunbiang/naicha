const backs = document.getElementById("backs");
const  deshead = document.querySelector('.desc');
const form = document.querySelector('.forms');

//--------------显示按纽---------------------------//
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    let descHeight = deshead.clientHeight;
    if (document.body.scrollTop > descHeight || document.documentElement.scrollTop > descHeight) {
        document.getElementById("backs").style.display = "block";
    } else {
        document.getElementById("backs").style.display = "none";
    }
}
 

//--------------------返回顶部---------------------------//
//way1 
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
// backs.addEventListener('click',topFunction);


//way2 
backs.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})


var timestamp = Date.parse(new Date());
// //--------------表单---------------------------//
function getData(n){
    n=new Date(n)
    return n.toLocaleDateString().replace(/\//g, "-") + " " + n.toTimeString().substr(0, 8)
  }
  

const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let  formVals = {};
    for (let [name,value] of formData.entries()) {
        if (formVals[name]) {
            formVals[name] = formVals[name].concat(',', value);
        } else {
            formVals[name] = value
        }
    }
    alert(getorder(formVals));
}

const getorder = (form) => {
    const text = `
🌸💐🌸💐 欢迎光临喜东东奶茶店🌸💐🌸💐
       【您的订单已经生成】
        ---------------------------
        奶茶口味：${form.nc}
        数量：${form.cupnum}
        杯型：${form.cupshape}
        甜度：${form.sweet}
        免费小料：${form["freesnack"] ? form["freesnack"] : "-"}
        加价小料：${form["snack"] ? form["snack"] : "-"}
        是否加冰：${form.ice}
        是否去茶底：${form["tea"]}
        地址：${form.address}
        手机号：${form.tell}
        期待送达时间：${form.times}
        备注：${form.mess}
        支付方式：${form["pays"]}
        ------------------------------
        下单时间:${getData(timestamp)}
         🎈🎈🎈欢迎下次光临 🎈🎈🎈
    `;
    return text;
}

form.addEventListener("submit", submit);
