/**
 *  多样式方法的js封装
 * 
 */
function manyStyle(ele,obj){
    //清除定时器
    clearInterval(ele.timer);
    //写入定时器
    ele.timer=setInterval(function(){
         //创定一个状态 表示样式值是否等于预期值 (默认都达到)
         var flg=true;
         //声明起点 要想知道起点 需要知道样式值 需要遍历 (i是键值 需要改变的样式名) obj[i] value值==>target
         for(var i in obj){
             if(i==="zIndex"){
                 ele.style.zIndex=obj[i];
                 continue;
             }else if(i==="opacity"){
                 //step 最小值 1 透明度 范围(0,1)*10=(0,10)
                 var start =parseInt(getStyle(ele,i)*100);
                 var target=obj[i]*100;
             }else{
                 //实时获取当前的样式 内联或外联样式 
                 var start =parseInt(getStyle(ele,i));
                 //目标值
                 var target=obj[i];
             };
             //步长
             var step= (target-start)/10;
            //判断步长区间 给定方向 (-1,1) (-1,0) (0,1)  起点与终点的距离 在10之间 ,将步长改为1
            if(Math.abs(step)<1){
                step=step>0?1:Math.floor(step);//处理step=0的情况
            }
            //判断当前的远动类型
            if(i==="opacity"){
                //如果是透明度,缩小100倍
                ele.style[i]=(start+step)/100
            }else{
                ele.style[i]=start+step+'px'
            }
            //停止条件 必须所有的条件都达到才停止
            //默认所有条件 均已达到,如有未达到,则将状态改为false,如果达到则不用改变状态,会是默认的true 
            if(start+step!==target){
                flg=false;
            }
         }
         //判定flag 当flag为真时 清除flag  
        if(flg){
            clearInterval(ele.timer)
        }
    },17)
};
/**
 * 获取样式名方法的封装
 * @param {*} ele 目标元素
 * @param {*} styleName 要获取的样式名(不要忘记字符串)
 */
function getStyle(ele,styleName){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[styleName];
    }else{
        return ele.currentStyle[styleName]
    }
}