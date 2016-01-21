namespace MyApp.Controllers {

    export class FoodsController {
        
        public foods;
        
        constructor(private $uibModal: angular.ui.bootstrap.IModalService, private foodsService: MyApp.Services.FoodsService) {

            this.foods = foodsService.getFoods();
        }

        public showDetailsModal(id) {
            console.log(id);
            this.$uibModal.open({
                templateUrl: "/ngApp/views/foodDetailsModal.html",
                controller: FoodDetailsController,
                controllerAs: 'controller',
                resolve: {
                    foodId: () => id
                },
                size: 'lg'
            });
        }
    }

    class FoodDetailsController {
        public food;

        constructor(private foodId, private foodsService: MyApp.Services.FoodsService) {

            this.food = foodsService.getFood(foodId);

        }

    }

}