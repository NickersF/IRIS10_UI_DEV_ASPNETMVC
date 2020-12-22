using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class ReportScreensController : Controller
    {
        // GET: ReportScreens
        public ActionResult Index()
        {
            return PartialView();
        }

        //[HttpGet]
        public ActionResult ReportUpper()
        {
            return PartialView();
        }

        //[HttpGet]
        public ActionResult ReportLower()
        {
            return PartialView();
        }
    }
}