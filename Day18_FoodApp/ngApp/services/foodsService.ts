namespace MyApp.Services {
    export class FoodsService {
        private foodsResource;


        constructor(private $resource: ng.resource.IResourceService) {
            this.foodsResource = $resource("/api/foods/:id");
        }

        public getFoods() {
            return this.foodsResource.query();
        }
        public getFood(id) {
            return this.foodsResource.get({ id: id });
        }
        public createFood(food) {
            return this.foodsResource.save(food).$promise;
        }

    }
    angular.module("MyApp").service("foodsService", FoodsService);
}
