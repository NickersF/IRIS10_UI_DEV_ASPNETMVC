using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using IRIS10_UI_Dev_ASPNETMVC5.Models;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class KendoDemosController : Controller
    {
        public ActionResult GanttDemo()
        {
            return View();
        }

        public ActionResult ServerBinding()
        {
            var sampleEntities = new SampleEntities(); // Do I need to build a custom model?

            ViewData["tasks"] = sampleEntities.GanttTasks
                .ToList().Select(task => new TaskViewModel
                {
                    TaskID = task.ID,
                    Title = task.Title,
                    Start = DateTime.SpecifyKind(task.Start, DateTimeKind.Utc),
                    End = DateTime.SpecifyKind(task.End, DateTimeKind.Utc),
                    ParentID = task.ParentID,
                    PercentComplete = task.PercentComplete,
                    OrderId = task.OrderID,
                    Expanded = task.Expanded,
                    Summary = task.Summary
                }).AsQueryable();


            ViewData["dependencies"] = sampleEntities.GanttDependencies
                .ToList().Select(dependency => new DependencyViewModel
                {
                    DependencyID = dependency.ID,
                    PredecessorID = dependency.PredecessorID,
                    SuccessorID = dependency.SuccessorID,
                    Type = (DependencyType)dependency.Type
                }).AsQueryable();

            return View();
        }
    }
}