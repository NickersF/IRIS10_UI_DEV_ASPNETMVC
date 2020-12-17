using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IRIS10_UI_Dev_ASPNETMVC5.Models
{
	public class TaskViewModel : IGanttTask
	{
		public int TaskID { get; set; }

		public int? ParentID { get; set; }

		public int OrderId { get; set; }

        public int OrderID { get; set; }
        public bool Expanded { get; set; }

		public string Title { get; set; }

		public DateTime Start { get; set; }

		public DateTime End { get; set; }

		public decimal PercentComplete { get; set; }

		public bool Summary { get; set; }

		public DateTime PlannedStart { get; set; }

		public DateTime PlannedEnd { get; set; }

        public int ID { get; set; }
    }
}