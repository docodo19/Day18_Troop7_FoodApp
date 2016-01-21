namespace MyApp.Controllers{
    export class CreateFoodController
    {
        public food;

        //fields?
        constructor(private foodsService: MyApp.Services.FoodsService, private $location: ng.ILocationService)
        {

        }
        
        public save()
        {
            //after the promise is executed then run this next block of code
            this.foodsService.createFood(this.food).then(() => {
                //after food has been saved this block of code will execute
                this.$location.path("/");
            });
        }
    }

}