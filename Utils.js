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
