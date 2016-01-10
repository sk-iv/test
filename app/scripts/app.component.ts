import {Component, ElementRef, Inject, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

declare var jQuery:any;

@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    template:`
      <div class="element-item">control</div>
      <div class="project" *ngFor="#project of projects; #i = index">
        <a href="#{{i}}" class="element-item card col-md-4 col-sm-6 {{project.category}}" [attr.data-category]="project.category" rel="gallery">
          <img src="http://dummyimage.com/{{project.thumb}}" class="card-img-top img-responsive">
          <div class="card-block">
            <h2 class="card-item_title">{{project.title}}{{i}}</h2><hr>
            <p class="card-item_customer">{{project.customer}}{{i}}</p>
          </div>
        </a>
      </div>
    `
})
export class AppComponent implements OnInit {

  projects: Object;
  elementRef: ElementRef;
  constructor(http: Http, @Inject(ElementRef) elementRef: ElementRef) {
      http.get('scripts/data/project.json')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(
          projects => this.projects = projects
        );
        this.elementRef = elementRef;
    }

    // scripts
    ngOnInit() {
        var $container = jQuery(this.elementRef.nativeElement);
        jQuery(".element-item").css({color: 'red'});
        $container.isotope({
          itemSelector:'.element-item'
        });
        jQuery('.filter-button-group').on( 'click', 'a', function() {
    		  var filterValue = jQuery(this).attr('data-filter');
    		  $container.isotope({ filter: filterValue });
    				if (filterValue == "*") {
    							jQuery(".element-item").attr("rel", "gallery");
    				} else {
    						jQuery(filterValue).attr("rel", filterValue);
    				}
    	  });
    }

}
