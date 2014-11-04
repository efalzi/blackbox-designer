angular.module('templates.app', ['dashboard/dashboard.tpl.html', 'header.tpl.html', 'navigation/menu/menu.tpl.html']);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<div ng-controller=\"DashboardCtrl as ctrl\">\n" +
    "    <h3>Dashboard</h3>\n" +
    "</div>");
}]);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"navbar\" ng-controller=\"HeaderCtrl as ctrl\">\n" +
    "    <div class=\"navbar-inner\">\n" +
    "        <a class=\"brand\" ng-click=\"ctrl.home()\">Blackbox Designer</a>\n" +
    "        <ul class=\"nav\">\n" +
    "            <li ng-class=\"{active:isNavbarActive('projectsinfo')}\"><a href=\"/projectsinfo\">Current Projects</a></li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <ul class=\"nav\" ng-show=\"isAuthenticated()\">\n" +
    "            <li ng-class=\"{active:isNavbarActive('projects')}\"><a href=\"/projects\">My Projects</a></li>\n" +
    "            <li class=\"dropdown\" ng-class=\"{active:isNavbarActive('admin'), open:isAdminOpen}\" ng-show=\"isAdmin()\">\n" +
    "                <a id=\"adminmenu\" role=\"button\" class=\"dropdown-toggle\" ng-click=\"isAdminOpen=!isAdminOpen\">Admin<b class=\"caret\"></b></a>\n" +
    "                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"adminmenu\">\n" +
    "                    <li><a tabindex=\"-1\" href=\"/admin/projects\" ng-click=\"isAdminOpen=false\">Manage Projects</a></li>\n" +
    "                    <li><a tabindex=\"-1\" href=\"/admin/users\" ng-click=\"isAdminOpen=false\">Manage Users</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav pull-right\" ng-show=\"ctrl.hasPendingRequests()\">\n" +
    "            <li class=\"divider-vertical\"></li>\n" +
    "            <li><a href=\"#\"><img src=\"img/spinner.gif\"></a></li>\n" +
    "        </ul>\n" +
    "        <login-toolbar></login-toolbar>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("navigation/menu/menu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("navigation/menu/menu.tpl.html",
    "<div ng-controller=\"MenuCtrl as ctrl\">\n" +
    "    <nav ng-mouseleave=\"ctrl.close()\" id=\"menu\">\n" +
    "        <ul>\n" +
    "            <li ng-mouseover=\"ctrl.open()\">\n" +
    "                <a href=\"#/dashboard\"><span class=\"menu-icon glyphicon glyphicon-home\"></span><span>Dashboard</span></a>\n" +
    "            </li>\n" +
    "            <li ng-mouseover=\"ctrl.open()\">\n" +
    "                <a href=\"#\"><span class=\"menu-icon glyphicon glyphicon-th-large\"></span><span>Blackboxes</span></a>\n" +
    "                <ul id=\"blackboxes\">\n" +
    "                    <div>Bla bla</div>\n" +
    "                    <a ng-click=\"ctrl.addCategory()\"><span class=\"glyphicon glyphicon-plus\"></span> Add a category</a>\n" +
    "                    <li ng-mouseover=\"ctrl.open()\" ng-repeat=\"blackbox in ctrl.model.blackboxes\">\n" +
    "                        <a href=\"#\" <span class=\"glyphicon glyphicon-th\"></span>{{blackbox.category}}</a>\n" +
    "                        <ul>\n" +
    "                            <li class=\"searchresult Label Spacer\">Filter</li>\n" +
    "                            <li ng-mouseover=\"ctrl.open()\" ng-repeat=\"item in blackbox.list\"><a href=\"#/designer?{{item.id}}\">{{item.name}}</a></li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "            <li ng-mouseover=\"ctrl.open()\">\n" +
    "                <a href=\"#\"><span class=\"menu-icon glyphicon glyphicon-certificate\"></span><span>Boxlets</span></a>\n" +
    "                <ul>\n" +
    "                    <li ng-mouseover=\"ctrl.open()\" ng-repeat=\"boxlet in ctrl.model.boxlets\"><a href=\"#{{boxlet.url}}\">{{boxlet.name}}</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "\n" +
    "            <li ng-mouseover=\"ctrl.open()\">\n" +
    "                <a href=\"#{{link.url}}\"><span class=\"menu-icon glyphicon glyphicon-record\"></span><span>Datasources</span></a>\n" +
    "                <ul>\n" +
    "                    <li ng-mouseover=\"ctrl.open()\" ng-repeat=\"datasource in ctrl.model.datasources\"><a href=\"#{{datasource.url}}\">{{datasource.name}}</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </nav>\n" +
    "</div>");
}]);
