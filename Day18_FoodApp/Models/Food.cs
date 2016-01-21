using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Day18_FoodApp.Models
{
    public class Food
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public string CusineType { get; set; }
        public double Calories { get; set; }
        public decimal AvgPrice { get; set; }
    }
}