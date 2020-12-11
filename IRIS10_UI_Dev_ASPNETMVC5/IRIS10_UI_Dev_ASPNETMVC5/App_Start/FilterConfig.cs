using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
