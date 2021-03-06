﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace IRIS10_UI_Dev_ASPNETMVC5
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Login",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Login", action = "Login", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "ReportScreens",
                url: "{controller}/{action}",
                defaults: new { controller = "ReportScreens", action = "Index" }
                );

            routes.MapRoute(
                name: "ODOTMilage",
                url: "{controller}/{action}",
                defaults: new { controller = "ODOTMilageController", action = "LoginSelect"}
                );
        }
    }
}
