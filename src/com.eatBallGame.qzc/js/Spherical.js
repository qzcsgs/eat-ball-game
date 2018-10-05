import UTIL from './UTIL'

/**
 * 球类
 */
class Spherical {
  /**
	 * 构造函数
	 * @param  {Object} attr 球的属性
	 * 包含以下属性
 	 * String name	// 名字
	 * int centerX	// 圆心横坐标
	 * int centerY	// 圆心纵坐标
	 * int weight	// 重量
	 * String color	// 背景色
   * Boolean life // 生命
	 */
  constructor (attr = {}) {
    this.init(attr)
  }

  init (attr) {
    this.name = attr.name || ''
    this.centerX = attr.centerX || UTIL.getRandomXY('x')
    this.centerY = attr.centerY || UTIL.getRandomXY('y')
    this.weight = attr.weight || UTIL.getRandomWeight()
    this.color = attr.color || UTIL.getRandomColor()
    this.life = attr.life || true
  }

  /**
	 * 移动函数
	 * @param  {Number} endX 终点圆心X
	 * @param  {Number} endY 终点圆心Y
	 * @return {[type]}   [description]
	 */
  move (endX, endY) {
    if (endX > this.centerX) {
      this.centerX += this.getSpeed()
    } else {
      this.centerX -= this.getSpeed()
    }
    if (endY > this.centerY) {
      this.centerY += this.getSpeed()
    } else {
      this.centerY -= this.getSpeed()
    }
  }

  /**
	 * 获取半径
	 * @param {int} 半径
	 */
  getRadius () {
    return parseInt(this.weight / 10)
  }

  /**
	 * 获取速度
	 */
  getSpeed () {
    return 10
  }

  /**
	 * 画出自己
	 */
  drawSelf (paint) {
    if (!this.life) return
    // 身体
    paint.beginPath()
    paint.fillStyle = this.color
    paint.arc(this.centerX, this.centerY, this.getRadius(), 0, 2 * Math.PI)
    paint.fill()
    // 名字
    paint.beginPath()
    paint.fillStyle = '#fff'
    paint.font = '40px serif'
    paint.textAlign = 'center'
    paint.fillText(this.name, this.centerX, this.centerY + 10)
  }

  /**
   * 增加体重
   * @param {Number} Num 增加的体重数
   */
  addWeight (Num) {
    this.weight += Num / 10
  }
}

export default Spherical
