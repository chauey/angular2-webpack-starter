using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
//using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Query;
using System.Web.Http.OData.Routing;
using AA.Mvp.Models;
using Microsoft.Data.OData;
using System.Threading.Tasks;
using System.Data.Entity.Infrastructure;
using System.Web.Http.Cors;

namespace AA.Mvp.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AA.Mvp.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Validation>("Validations");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class ValidationsController : ODataController
    {
        private AAMvpContext dbContext = new AAMvpContext();

        // GET: odata/Validations
        [EnableQuery]
        public IQueryable<Validation> GetValidations()
        {
            return dbContext.Validations;
        }

        // GET: odata/Validations(5)
        [EnableQuery]
        public SingleResult<Validation> GetValidation([FromODataUri] System.Guid key)
        {
            return SingleResult.Create(dbContext.Validations.Where(Validation => Validation.Id == key));
        }

        // PUT: odata/Validations(5)
        public async Task<IHttpActionResult> Put([FromODataUri] System.Guid key, Delta<Validation> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Validation Validation = await dbContext.Validations.FindAsync(key);
            if (Validation == null)
            {
                return NotFound();
            }

            patch.Put(Validation);

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ValidationExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(Validation);
        }

        // POST: odata/Validations
        public async Task<IHttpActionResult> Post(Validation Validation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dbContext.Validations.Add(Validation);
            await dbContext.SaveChangesAsync();

            return Created(Validation);
        }

        // PATCH: odata/Validations(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] System.Guid key, Delta<Validation> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Validation Validation = await dbContext.Validations.FindAsync(key);
            if (Validation == null)
            {
                return NotFound();
            }

            patch.Patch(Validation);

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ValidationExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(Validation);
        }

        // DELETE: odata/Validations(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] System.Guid key)
        {
            Validation Validation = await dbContext.Validations.FindAsync(key);
            if (Validation == null)
            {
                return NotFound();
            }

            dbContext.Validations.Remove(Validation);
            await dbContext.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ValidationExists(System.Guid key)
        {
            return dbContext.Validations.Count(e => e.Id == key) > 0;
        }
    }
}
