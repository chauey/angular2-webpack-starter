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
    builder.EntitySet<AllDataType>("AllDataTypes");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class AllDataTypesController : ODataController
    {
        private AAMvpContext dbContext = new AAMvpContext();

        // GET: odata/AllDataTypes
        [EnableQuery]
        public IQueryable<AllDataType> GetAllDataTypes()
        {
            return dbContext.AllDataTypes;
        }

        // GET: odata/AllDataTypes(5)
        [EnableQuery]
        public SingleResult<AllDataType> GetAllDataType([FromODataUri] int key)
        {
            return SingleResult.Create(dbContext.AllDataTypes.Where(AllDataType => AllDataType.Id == key));
        }

        // PUT: odata/AllDataTypes(5)
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Delta<AllDataType> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            AllDataType AllDataType = await dbContext.AllDataTypes.FindAsync(key);
            if (AllDataType == null)
            {
                return NotFound();
            }

            patch.Put(AllDataType);

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AllDataTypeExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(AllDataType);
        }

        // POST: odata/AllDataTypes
        public async Task<IHttpActionResult> Post(AllDataType AllDataType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dbContext.AllDataTypes.Add(AllDataType);
            await dbContext.SaveChangesAsync();

            return Created(AllDataType);
        }

        // PATCH: odata/AllDataTypes(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<AllDataType> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            AllDataType AllDataType = await dbContext.AllDataTypes.FindAsync(key);
            if (AllDataType == null)
            {
                return NotFound();
            }

            patch.Patch(AllDataType);

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AllDataTypeExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(AllDataType);
        }

        // DELETE: odata/AllDataTypes(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            AllDataType AllDataType = await dbContext.AllDataTypes.FindAsync(key);
            if (AllDataType == null)
            {
                return NotFound();
            }

            dbContext.AllDataTypes.Remove(AllDataType);
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

        private bool AllDataTypeExists(int key)
        {
            return dbContext.AllDataTypes.Count(e => e.Id == key) > 0;
        }
    }
}
