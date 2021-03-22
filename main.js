// Shape(図形)クラスです。
class Shape {
  constructor(color, type) {
    // 図形クラスのコンストラクタを実装しましょう。
      this.color = color;
      this.type = type;

  }
  property() {
    // propertyメソッドを実装しましょう。
      return "これは"+this.color+"色の"+this.type+"です";

  }
  static hello() {
    // helloメソッドを実装しましょう。静的メソッドなので「static」を付けます。
      return  "みなさんこんにちは！"
  }
}


// Circle(円)クラスを実装しましょう。「extends」を用いてShapeクラスを継承しています。
class Circle extends Shape {
  constructor(color, radius) {
    // 「super」を用いてShapeクラスのコンストラクタを利用しましょう。
    // typeプロパティには"円"を初めから代入してあげましょう。
    // Shapeクラスが持たないradiusというプロパティは「this」を用いて代入しましょう。
	super(color, "円");
      this.radius = radius;
  }
  area() {
    // 面積を計算するareaメソッドを実装しましょう。円周率は3.14としてください。
      return this.radius * this.radius * 3.14
  }
}


// Rectangle(長方形)クラスです。Shapeを継承しましょう。
class Rectangle extends Shape {
  constructor(color,width,height) {
    // typeプロパティには"長方形"を初めから代入してあげましょう。
      super(color, "長方形");
      this.width = width;
      this.height = height;

  }
  // areaメソッドを実装してください。
	area() {
        return this.width * this.height;
    }

}


// Square(正方形)クラスです。Rectangleを継承しましょう。
class Square extends Rectangle {
  // コンストラクタとdiagonalメソッドを実装してください。対角線は一辺の1.4倍の長さとしてください。
    constructor(color,length) {
        super(color, length,length)
    }
    diagonal() {
        return this.width * 1.4
    }

}
