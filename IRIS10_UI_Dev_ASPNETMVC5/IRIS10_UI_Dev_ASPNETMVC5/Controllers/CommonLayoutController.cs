﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class CommonLayoutController : Controller
    {
        // GET: CommonLayout
        public ActionResult MainLayout()
        {
            return View();
        }

        public ActionResult SideBarLayout()
        {
            return View();
        }

        public ActionResult UserAccountMenu()
        {
            return View();
        }
    }
}