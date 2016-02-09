using System.Web.Http;

namespace aa.mvp.server.Controllers
{
    [Authorize]
    public class ProductController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(Models.Shipment.Create());
        }
    }
}
