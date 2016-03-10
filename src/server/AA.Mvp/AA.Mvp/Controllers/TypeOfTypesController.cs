using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Query;
using System.Web.Http.OData.Routing;
using AA.Mvp.Models;
using Microsoft.Data.OData;
using System.Threading.Tasks;
using System.Data.Entity.Infrastructure;

namespace AA.Mvp.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AA.Mvp.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<TypeOfType>("TypeOfTypes");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class TypeOfTypesController : ODataController
    {
        private AAMvpContext dbContext = new AAMvpContext();

        // GET: odata/TypeOfTypes
        [EnableQuery]
        public IQueryable<TypeOfType> GetTypeOfTypes()
        {
            return dbContext.TypeOfTypes;
        }

        // GET: odata/TypeOfTypes(5)
        [EnableQuery]
        public SingleResult<TypeOfType> GetTypeOfType([FromODataUri] System.Guid key)
        {
            return SingleResult.Create(dbContext.TypeOfTypes.Where(TypeOfType => TypeOfType.Id == key));
        }

        // PUT: odata/TypeOfTypes(5)
        public async Task<IHttpActionResult> Put([FromODataUri] System.Guid key, Delta<TypeOfType> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TypeOfType TypeOfType = await dbContext.TypeOfTypes.FindAsync(key);
            if (TypeOfType == null)
            {
                return NotFound();
            }

            patch.Put(TypeOfType);

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TypeOfTypeExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(TypeOfType);
        }

        // POST: odata/TypeOfTypes
        public async Task<IHttpActionResult> Post(TypeOfType TypeOfType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dbContext.TypeOfTypes.Add(TypeOfType);
            await dbContext.SaveChangesAsync();

            return Created(TypeOfType);
        }

        // PATCH: odata/TypeOfTypes(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] System.Guid key, Delta<TypeOfType> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TypeOfType TypeOfType = await dbContext.TypeOfTypes.FindAsync(key);
            if (TypeOfType == null)
            {
                return NotFound();
            }

            patch.Patch(TypeOfType);

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TypeOfTypeExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(TypeOfType);
        }

        // DELETE: odata/TypeOfTypes(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] System.Guid key)
        {
            TypeOfType TypeOfType = await dbContext.TypeOfTypes.FindAsync(key);
            if (TypeOfType == null)
            {
                return NotFound();
            }

            dbContext.TypeOfTypes.Remove(TypeOfType);
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

        private bool TypeOfTypeExists(System.Guid key)
        {
            return dbContext.TypeOfTypes.Count(e => e.Id == key) > 0;
        }
    }
}
