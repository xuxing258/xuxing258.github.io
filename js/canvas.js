let time= null;
//es6的类
class  MyCanvas{
  constructor(num) {
    this.num = num; // 星星个数
    this.canvas = document.getElementById("canvas");
    this.cxt = this.canvas.getContext("2d");
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
    this.data = []; // 存储星星位置 大小 等
    this.init(); //初始化
  }
  init(){
    // 存储 星星各个位置
    this.handle();
    // 画圆
    time= setInterval(this.circre.bind(this),20)
    // 鼠标移动 线段链接
    document.addEventListener("mousemove",this.move.bind(this))
  }
  handle(){
    for (let i=0;i<this.num;i++){
      this.data.push({
        x:Math.floor(Math.random() *this.canvas.width),
        y:Math.floor(Math.random()*this.canvas.height),
        r:Math.random() * 4 + 1,
        moveX:  Math.random() - 0.5, // 用于星星移动步数
        moveY:  Math.random() - 0.5 // 用于星星移动步数
      });
    }
  }
  // 画圆
  circre(){
    // 清除画布区域  清除了上一次画布的所有内容
    this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height)
    this.cxt.fillStyle = "skyblue";
    this.data.forEach((item,index)=>{
      this.cxt.arc( item.x, item.y,item.r, 0 * Math.PI,2 * Math.PI,);
      this.cxt.fill();
      this.cxt.beginPath();
      // 在原有的基础进行 添加 或减少 从而进行移动
      item.x += item.moveX;
      item.y += item.moveY;
      // console.log(this.data[index+1].x);
      // 判断两点之间线段距离   同时需要和每个圆点进行比较
      for (let i=index+1;i<this.data.length;i++){
        this.line(item.x,item.y,i)
      }
      // 反弹
      if (item.x < 0 || item.x > this.canvas.width-17){
        item.moveX = -item.moveX
      }
      if (item.y < 0 || item.y > this.canvas.height){
        item.moveY = -item.moveY
      }
    })
  }
  // 画线段
  line(x,y,i){
    let x1 =  this.data[i].x;
    let y1 =  this.data[i].y;
    if(Math.pow(x - x1,2)+ Math.pow(y - y1,2)  <= 400 * 5 ){
      this.cxt.moveTo(x,y);
      this.cxt.lineTo(x1,y1);
      let add =this.cxt.createLinearGradient(x,y,x1,y1);
      add.addColorStop(0,"#fff");
      add.addColorStop(0.5,"skyblue");
      add.addColorStop(1,"pink");
      this.cxt.strokeStyle = add;
      this.cxt.lineWidth = 2;
      this.cxt.stroke();
      this.cxt.beginPath();
    }
  }
  // 移动时链接线段
  move(ev){
    let x = ev.clientX;
    let y = ev.clientY;
    for (let i=0;i<this.data.length;i++){
      this.line(x,y,i)
    }
  }
}
new  MyCanvas(400);
 window.onresize=function () {
  clearInterval(time);
  new  MyCanvas(400)
} ;