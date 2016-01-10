System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http, elementRef) {
                    var _this = this;
                    http.get('scripts/data/project.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (projects) { return _this.projects = projects; });
                    this.elementRef = elementRef;
                }
                // scripts
                AppComponent.prototype.ngOnInit = function () {
                    var $container = jQuery(this.elementRef.nativeElement);
                    jQuery(".element-item").css({ color: 'red' });
                    $container.isotope({
                        itemSelector: '.element-item'
                    });
                    jQuery('.filter-button-group').on('click', 'a', function () {
                        var filterValue = jQuery(this).attr('data-filter');
                        $container.isotope({ filter: filterValue });
                        if (filterValue == "*") {
                            jQuery(".element-item").attr("rel", "gallery");
                        }
                        else {
                            jQuery(filterValue).attr("rel", filterValue);
                        }
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        template: "\n      <div class=\"element-item\">control</div>\n      <div class=\"project\" *ngFor=\"#project of projects; #i = index\">\n        <a href=\"#{{i}}\" class=\"element-item card col-md-4 col-sm-6 {{project.category}}\" [attr.data-category]=\"project.category\" rel=\"gallery\">\n          <img src=\"http://dummyimage.com/{{project.thumb}}\" class=\"card-img-top img-responsive\">\n          <div class=\"card-block\">\n            <h2 class=\"card-item_title\">{{project.title}}{{i}}</h2><hr>\n            <p class=\"card-item_customer\">{{project.customer}}{{i}}</p>\n          </div>\n        </a>\n      </div>\n    "
                    }),
                    __param(1, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [http_1.Http, core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map