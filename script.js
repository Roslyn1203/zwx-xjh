let buttonSize = 100;
let combinedIndex = 1;  // 合并后的索引
let buttonTexts = ["不可以", "我会洗香香的嘛", "求求你了～", "给你按摩可以嘛","100个亲亲呢","拜托","再不同意我就扑到宝宝","宝宝再考虑一下","最后一次机会了" ];  // 存储按钮2的内容

function changeAppearance() {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let image = document.getElementById('dynamicImage');
    
    // 增加按钮1的尺寸
    buttonSize += 40;
    button1.style.width = `${buttonSize}px`;
    button1.style.height = `${buttonSize / 2}px`;
    
    combinedIndex = (combinedIndex+1);

    // 改变按钮2的文字内容
    button2.textContent = buttonTexts[combinedIndex-1];

    if (combinedIndex === 11) {
        button2.remove(); // 删除按钮2
    } else {
        // 更新 combinedIndex，避免超出最大值
	    // 切换图片
 	   let imageIndex = combinedIndex; // 根据 combinedIndex 来切换图片
	    image.src = `images/${imageIndex}.gif`;

    }
}
function changeAppearance2() {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let image = document.getElementById('dynamicImage');
    
    // 检查元素是否存在
    if (image) {
        image.src = `images/99.gif`;
    }

    if (button2) {
        button2.remove(); // 删除按钮2
    }

    if (button1) {
        button1.remove(); // 删除按钮1
    }
}

