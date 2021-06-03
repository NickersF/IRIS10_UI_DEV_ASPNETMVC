using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class RISController : Controller
    {
        // GET: RIS
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult RISMain()
        {
            return View();
        }

        public ActionResult RISMiniDrawerTemplate()
        {
            return View();
        }

        public ActionResult DrawerCategoryTemplate()
        {
            return View();
        }

        public ActionResult DrawerContentTemplates()
        {
            return View();
        }
    }
}