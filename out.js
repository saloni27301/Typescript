var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var userutils;
(function (userutils) {
    var Parent = /** @class */ (function () {
        function Parent() {
        }
        Parent.prototype.setname = function (name) {
            return this.name = name;
        };
        return Parent;
    }());
    userutils.Parent = Parent;
})(userutils || (userutils = {}));
/// <reference path="./Utils.ts" />
var userutils;
(function (userutils) {
    var Utils = /** @class */ (function (_super) {
        __extends(Utils, _super);
        function Utils() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Utils.prototype.getname = function () {
            return this.name;
        };
        return Utils;
    }(userutils.Parent));
    userutils.Utils = Utils;
})(userutils || (userutils = {}));
var N1 = new userutils.Utils();
N1.setname("Rahujina=======");
console.log(N1.getname());
