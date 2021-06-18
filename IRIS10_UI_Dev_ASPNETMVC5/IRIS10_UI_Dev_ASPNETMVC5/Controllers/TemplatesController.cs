using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class TemplatesController : Controller
    {
        // GET: Templates
        public ActionResult UserAccountMenuTemplate()
        {
            return PartialView("~/Views/Shared/EditorTemplates/UserAccountMenuTemplate.cshtml");
        }
    }
}