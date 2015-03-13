'use strict';

angular.module('autoShow.bar', [])
    .factory('ngNotification', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
        //public methods
        var self = {};
        self.alerts = [];
        self.type = {
            'primary': 'fa-bell',
            'success': 'fa-check',
            'warning': 'fa-warning',
            'danger': 'fa-database'
        };
        self.addAlert = function (item) {
            self.alerts.push(item);
            if (item.type == 'success') {
                $timeout(function () {
                    self.closeAlert(item);
                }, 5000);
            }
        };
        self.closeAlert = function (object) {
            object.remove = 'remove';
            $timeout(function () {
                var index = self.alerts.indexOf(object);
                if (index > -1)
                    self.alerts.splice(index, 1);
            }, 400);
        };
        var targetElement = document.querySelector('body');
        this.el = document.createElement('div');
        this.el.className = "ng-notification";
        this.el.innerHTML = '<div class="notification-bar"><div ng-repeat="alert in notification.alerts" ng-click="notification.closeAlert(alert)" class="{{alert.type}} {{alert.remove}}"><i class="item fa {{notification.type[alert.type]}}"></i> <p class="panel-body">{{alert.msg}}</p></div></div>';
        targetElement.appendChild(this.el);
        return self;
    }]);

