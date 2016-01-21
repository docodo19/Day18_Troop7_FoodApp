namespace Day18_FoodApp.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Day18_FoodApp.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Day18_FoodApp.Models.ApplicationDbContext context)
        {
            var foods = new Food[]
            {
                new Food {Id = 1, Name = "Pizza", Rating = 5, CusineType = "Italian", AvgPrice = 10m, Calories = 1000d },
                new Food {Id = 2, Name = "Chicken", Rating = 4, CusineType = "Global", AvgPrice = 10m, Calories = 800d },
                new Food {Id = 3, Name = "Pad Thai", Rating = 4, CusineType = "Thai", AvgPrice = 7m, Calories = 400d }
            };

            context.Foods.AddOrUpdate(f => f.Name, foods);
        }
    }
}
