using aa.mvp.server.App_Start;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using System.Web.Http;


[assembly: OwinStartup(typeof(aa.mvp.server.Startup))]

namespace aa.mvp.server
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration(); 

            WebApiConfig.Register(config);

            ConfigureAuthZero(app);

            // UNDONE: for easy dev only
            app.UseCors(CorsOptions.AllowAll);
            app.UseWebApi(config);
        }
    }

}