using Day18_FoodApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Day18_FoodApp.API
{
    public class FoodsController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();
       
        public IHttpActionResult Get()
        {
            return Ok(_db.Foods.ToList());
        }

        public IHttpActionResult Get(int id)
        {
            return Ok(_db.Foods.Find(id));
        }

        public IHttpActionResult Post(Food food)
        {
            _db.Foods.Add(food);
            _db.SaveChanges();
            return Ok( );
        }
       
    }
}
