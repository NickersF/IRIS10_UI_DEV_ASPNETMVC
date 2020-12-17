using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IRIS10_UI_Dev_ASPNETMVC5.Models
{
	public class DependencyViewModel : IGanttDependency
	{
		public int DependencyID { get; set; }

		public int PredecessorID { get; set; }

		public int SuccessorID { get; set; }

		public DependencyType Type { get; set; }

        public int ID { get; set; }
    }
}