import {Component, Host, Input} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import { MapToIterablePipe } from '../../pipes/mapToIterable.pipe';
import { TagManagerService, Tag } from '../../services/tag-manager.service';


@Component({
  selector: 'tags',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [MapToIterablePipe],
  providers: [TagManagerService],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./swagger.component.css')],
  template: require('./tags.component.html')
})

export class TagsComponent {
  @Input('model') model: any;
  specs: any;

  getCurrentTags: any;
  getAllTags: any;
  tagIndexFor: any;
  tagsHaveDescription: any;

  constructor(private tagManagerService: TagManagerService, private routeParams: RouteParams) {
    this.getCurrentTags = tagManagerService.getCurrentTags;
    this.getAllTags = tagManagerService.getAllTags;
    this.tagIndexFor = tagManagerService.tagIndexFor;
    this.tagsHaveDescription = tagManagerService.tagsHaveDescription;
  }

  ngOnInit() {
    console.log('ngOnInit Swagger Tags component');
    this.specs = this.model;
  }

}
