using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularWebAPI.Models;
using Microsoft.AspNetCore.Cors;

using Microsoft.AspNetCore.Http;

namespace AngularWebAPI.Controllers
{

    [Route("api/[controller]")]
    public class BooksController : Controller
    {

      
        // POST api/values
        [HttpPost("file/upload")]
        public async Task<IActionResult> UploadFile(IFormFile file, List<ArrayItem> array)
        {

            return Ok();
        }

    }
}
