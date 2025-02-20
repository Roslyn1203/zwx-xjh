let buttonSize = 100;
let combinedIndex = 1;  // 合并后的索引
let Texts = ["不可以",  "求求求求求求，求你了～", "我们不是全天下最最好的吗", "下次给宝宝按摩可以嘛","那现在买一杯奶茶呢","拜托了宝贝","买小蛋糕吃可以嘛，就原谅我了吧","那我们和好啦"];  // 存储按钮2的内容

let button2Texts = ["不可以",  "不行", "不是", "不好","那我考虑考虑","你就会说这个","嗯"];  // 存储按钮2的内容

let button1Texts = ["不可以",  "好吧", "是", "好～","那原谅你了","好吧好吧原谅你","那你还不快买","好" ];  // 存储按钮2的内容
function changeAppearance() {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let image = document.getElementById('dynamicImage');
    let dynamicText = document.getElementById('dynamicText');  // 获取 p 标签
    // 增加按钮1的尺寸
    buttonSize += 40;
    button1.style.width = `${buttonSize}px`;
    button1.style.height = `${buttonSize / 2}px`;
    
    combinedIndex = (combinedIndex+1);

    // 改变按钮2的文字内容
    dynamicText.textContent = Texts[combinedIndex-1];

    button2.textContent = button2Texts[combinedIndex-1];
    button1.textContent = button1Texts[combinedIndex-1];

    let imageIndex = combinedIndex; // 根据 combinedIndex 来切换图片
    image.src = `images/${imageIndex}.gif`;
    if (combinedIndex === 8) {
        button2.remove(); // 删除按钮2
    } 
}
function changeAppearance2() {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let image = document.getElementById('dynamicImage');
    let dynamicText = document.getElementById('dynamicText');  // 获取 p 标签
	
    dynamicText.textContent = "和你最好了宝宝"
    // 检查元素是否存在
    if (image) {
        image.src = `images/66.gif`;
    }

    if (button2) {
        button2.remove(); // 删除按钮2
    }

    if (button1) {
        button1.remove(); // 删除按钮1
    }
}

