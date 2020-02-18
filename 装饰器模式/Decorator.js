var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器函数，它的第一个参数是目标类
function classDecorator(target) {
    target.hasDecorator = true;
    return target;
}
// 将装饰器“安装”到Button类上
var Button = /** @class */ (function () {
    function Button() {
    }
    Button = __decorate([
        classDecorator
    ], Button);
    return Button;
}());
// 验证装饰器是否生效
console.log('Button 是否被装饰了：', Button.hasDecorator);
