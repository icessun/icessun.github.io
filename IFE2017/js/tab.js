//需求：点击不同的"按钮"，切换到对应的"内容框"

//1.获取元素--限定范围的获取元素
var　tabWrap=document.getElementById('tab-wrap');
var aLi=tabWrap.getElementsByTagName("li");
var aDiv=tabWrap.getElementsByTagName('div');

//2.点击哪个按钮的时候，让所有的按钮都变灭，就让当前点击的这个按钮变亮；同时，也让所有的div都隐藏，就让当前按钮对应的div显示；要操作每个按钮，给其添加点击事件，就要循环到每个按钮
for(var i=0;i<aLi.length;i++){
//    自定义属性保存i值  或者闭包保存i的值
    aLi[i].index=i;
    aLi[i].onclick=function () {
        //因为要重新操作每个元素，所以，必须重新遍历每个元素
        for(var i=0;i<aLi.length;i++){
            //让所有的按钮都变灭，就让当前点击的这个按钮变亮；
            aLi[i].className='';
            aDiv[i].className='';
        }
        //循环中所做的是操作每个元素，如果想单独操作某个元素，必须放在循环外面
        this.className='active';
        aDiv[this.index].className='show';
    }
}
