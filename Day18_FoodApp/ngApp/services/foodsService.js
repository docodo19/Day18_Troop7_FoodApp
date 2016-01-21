var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var FoodsService = (function () {
            function FoodsService($resource) {
                this.$resource = $resource;
                this.foodsResource = $resource("/api/foods/:id");
            }
            FoodsService.prototype.getFoods = function () {
                return this.foodsResource.query();
            };
            FoodsService.prototype.getFood = function (id) {
                return this.foodsResource.get({ id: id });
            };
            FoodsService.prototype.createFood = function (food) {
                return this.foodsResource.save(food).$promise;
            };
            return FoodsService;
        })();
        Services.FoodsService = FoodsService;
        angular.module("MyApp").service("foodsService", FoodsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=foodsService.js.map