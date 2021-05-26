using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class DrawerDemoController : Controller
    {
        // GET: DrawerDemo
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult HierarchyDrawer()
        {
            return View();
        }
    }
}