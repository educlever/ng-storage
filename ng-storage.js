"use strict";

(function (angular) {

    var module = angular.module("educ.ngStorage", []);

    module.service("StorageService", [ "$window", function ($window) {

        function InMemoryStorage() {
        }

        InMemoryStorage.prototype.setItem = function (key, value) {
            this[key] = value;
        };
        InMemoryStorage.prototype.getItem = function (key) {
            return typeof this[key] == "undefined" ? null : this[key];
        };
        InMemoryStorage.prototype.removeItem = function (key) {
            delete this[key];
        };
        InMemoryStorage.prototype.clear = function () {
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    this.removeItem(key);
                }
            }
        };
        InMemoryStorage.prototype.key = function (index) {
            return Object.keys(this)[index];
        };

        try {
            $window.localStorage._check_ = "it works !";
            delete $window.localStorage._check_;
//        console.log("using localStorage");
            return $window.localStorage;
        } catch (ex) {
//        console.log("using InMemoryStorage");
            return new InMemoryStorage();
        }
    }]);

})(angular);