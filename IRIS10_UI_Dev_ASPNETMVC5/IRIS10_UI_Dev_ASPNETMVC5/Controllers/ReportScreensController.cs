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
        public ActionResult _ReportsMain()
        {
            return PartialView();
        }

        public ActionResult _PanelBarTemplateCurrentReport()
        {
            return View();
        }

        public ActionResult _PanelBarTemplateParameters()
        {
            return View();
        }

        public ActionResult _PanelBarTemplateUserPrompt()
        {
            return View();
        }

        public ActionResult _PanelBarTemplateDescription()
        {
            return View();
        }

        public ActionResult _PanelBarTemplateThumbnail()
        {
            return View();
        }

        public ActionResult _PanelBarTemplateTags()
        {
            return View();
        }
    }
}