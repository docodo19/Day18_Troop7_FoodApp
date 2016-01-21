var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var FoodsController = (function () {
            function FoodsController($uibModal, foodsService) {
                this.$uibModal = $uibModal;
                this.foodsService = foodsService;
                this.foods = foodsService.getFoods();
            }
            FoodsController.prototype.showDetailsModal = function (id) {
                console.log(id);
                this.$uibModal.open({
                    templateUrl: "/ngApp/views/foodDetailsModal.html",
                    controller: FoodDetailsController,
                    controllerAs: 'controller',
                    resolve: {
                        foodId: function () { return id; }
                    },
                    size: 'lg'
                });
            };
            return FoodsController;
        })();
        Controllers.FoodsController = FoodsController;
        var FoodDetailsController = (function () {
            function FoodDetailsController(foodId, foodsService) {
                this.foodId = foodId;
                this.foodsService = foodsService;
                this.food = foodsService.getFood(foodId);
            }
            return FoodDetailsController;
        })();
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=foodsController.js.map