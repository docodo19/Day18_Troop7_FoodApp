var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CreateFoodController = (function () {
            //fields?
            function CreateFoodController(foodsService, $location) {
                this.foodsService = foodsService;
                this.$location = $location;
            }
            CreateFoodController.prototype.save = function () {
                var _this = this;
                //after the promise is executed then run this next block of code
                this.foodsService.createFood(this.food).then(function () {
                    //after food has been saved this block of code will execute
                    _this.$location.path("/");
                });
            };
            return CreateFoodController;
        })();
        Controllers.CreateFoodController = CreateFoodController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=createFoodController.js.map