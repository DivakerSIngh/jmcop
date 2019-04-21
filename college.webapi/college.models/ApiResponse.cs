using System;
using System.Collections.Generic;
using System.Text;

namespace Jmcop.Models
{
    public class ApiResponse
    {
        public string status { get; set; }
        public int errorCode { get; set; }
        public object result { get; set; }
        public int pages { get; set; }
    }
}
