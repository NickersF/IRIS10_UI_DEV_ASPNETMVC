using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IRIS10_UI_Dev_ASPNETMVC5.Models
{
    public class SampleEntities
    {
        public IList<TaskViewModel> GanttTasks { get; set; }

        public IList<DependencyViewModel> GanttDependencies { get; set; }
    }
}