(function($){
    $.extend({
    ms_DatePicker: function (options) {
       var defaults = {
             YearSelector: "#sel_year",
             MonthSelector: "#sel_month",
             DaySelector: "#sel_day",
             FirstText: "1",
             FirstValue: 1,
       };
       var opts = $.extend({}, defaults, options);
       var $YearSelector = $(opts.YearSelector);
       var $MonthSelector = $(opts.MonthSelector);
       var $DaySelector = $(opts.DaySelector);
       var FirstText = opts.FirstText;
       var FirstValue = opts.FirstValue;
    
       // 初始化
       var str = "<option value=\"" + FirstValue + "\">"+FirstText+"</option>";
       $YearSelector.html("<option value=\"2019\">2019</option>");
     //   $MonthSelector.html(str);
     //   $DaySelector.html(str);
    
       // 年份列表
       var yearNow = new Date().getFullYear();
       var yearSel = $YearSelector.attr("rel");
       for (var i = 2018; i >= 2012; i--) {
            var sed = yearSel==i?"selected":"";
            var yearStr = "<option value=\"" + i + "\" " + sed+">"+i+"</option>";
            $YearSelector.append(yearStr);
       }
    
        // 月份列表
        function BuildMonth() {
          $MonthSelector.html("");
          var year = parseInt($YearSelector.val());
          var monthcount =12
          var monlow = 1
          if(year == 2019){monthcount =7}
          if(year == 2012){monlow = 9}
          var monthSel = $MonthSelector.attr("rel");
          console.log(monthSel)
          for (var i = monlow; i <= monthcount; i++) {
              var sed = monthSel==i?"selected":"";
              var monthStr = "<option value=\"" + i + "\" "+sed+">"+i+"</option>";
              $MonthSelector.append(monthStr);
          }
        }
        
        // 日列表(仅当选择了年月)
        function BuildDay() {
            // if ($YearSelector.val() == 0 || $MonthSelector.val() == 0) {
            //     // 未选择年份或者月份
            //     // $DaySelector.html(str);
            // } else {
                $DaySelector.html("");
                var year = parseInt($YearSelector.val());
                var month = parseInt($MonthSelector.val());
                var dayCount = 0;
                var daylow = 1;
                switch (month) {
                     case 1:
                     case 3:
                     case 5:
                     case 7:
                     case 8:
                     case 10:
                     case 12:
                          dayCount = 31;
                          break;
                     case 4:
                     case 6:
                     case 9:
                     case 11:
                          dayCount = 30;
                          break;
                     case 2:
                          dayCount = 28;
                          if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                              dayCount = 29;
                          }
                          break;
                     default:
                          break;
                }
                if(year == 2019 && month ==7 ){dayCount = 8}
                if(year == 2012 && month == 9){console.log("sss"); daylow = 8;}     
                var daySel = $DaySelector.attr("rel");
                for (var i = daylow; i <= dayCount; i++) {
                    var sed = daySel==i?"selected":"";
                    var dayStr = "<option value=\"" + i + "\" "+sed+">" + i + "</option>";
                    $DaySelector.append(dayStr);
                 }
            //  }
          }
          $MonthSelector.change(function () {
             BuildDay();
          });
          $YearSelector.change(function () {
             BuildMonth();
             BuildDay();  
          });
          if($MonthSelector.attr("rel")!=""){
               BuildMonth();
            }
          if($DaySelector.attr("rel")!=""){
             BuildDay();
          }
       } // End ms_DatePicker
    });
    })(jQuery);