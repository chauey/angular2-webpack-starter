using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Web.OData.Extensions;
using AA.Mvp.Models;
using System.Web.OData.Builder;

namespace AA.Mvp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //// Web API configuration and services
            //// Configure Web API to use only bearer token authentication.
            //config.SuppressDefaultHostAuthentication();
            //config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            //// Web API routes
            //config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);


            // OData
            var builder = new ODataConventionModelBuilder();
            builder.EntitySet<AllDataType>("AllDataTypes").EntityType.HasKey(x => x.Id);
            builder.EntitySet<TypeOfType>("TypeOfTypes").EntityType.HasKey(x => x.Id);
            builder.EntitySet<Validation>("Validations").EntityType.HasKey(x => x.Id);

            var edmModel = builder.GetEdmModel();
            config.MapODataServiceRoute("odata", "odata", edmModel);
        }
    }
}
