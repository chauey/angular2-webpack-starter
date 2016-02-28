// import {ControlGroup} from 'angular2/common';

import { Injectable } from 'angular2/core';

export class Tag {
  constructor(public name: string, public description: string) {
    //this.name = name;
    //this.description = description;
  }
}

@Injectable()
export class TagManagerService {
  // function Tag(name, description) {
  //   this.name = name;
  //   this.description = description;
  // }
  _$stateParams: any;
  tags: any = [];//{ name: 'asd', description: 'dfsdf'}];
  Ftags: any = {}; // UNDONE: what is it and what to set to

  constructor() { //$stateParams: any) {
    // UNDONE: this._$stateParams = $stateParams;
  }

  // class Tag(name, description) {
  //   this.name = name;
  //   this.description = description;
  // }

  resetTags() {
    this.tags = [];
  };

  tagIndexFor(tagName) {
    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i].name === tagName) {
        return i;
      }
    }
  };

  getAllTags() {
    return this.Ftags;
  };

  tagsHaveDescription() {
    return this.tags.some(function(tag) {
      return tag.description;
    });
  };

  registerTagsFromSpec(spec) {
    //if (!angular.isObject(spec)) {
    if (typeof spec !== 'object') {
      return;
    }

    this.tags = [];

    if (Array.isArray(spec.tags)) {
      spec.tags.forEach(function(tag) {
        //if (tag && angular.isString(tag.name)) {
        if (tag && typeof tag.name === 'string') {
          this.registerTag(tag.name, tag.description);
        }
      });
    }

    // _.each(spec.paths, function(path) {
    //   _.each(path, function(operation) {
    //     if (_.isObject(operation)) {
    //       _.each(operation.tags, this.registerTag);
    //     }
    //   });
    // });

    spec.paths.forEach(
      (path) => {
        path.forEach(
          (operation) => {
            if (typeof operation === 'object') {
              operation.tags.forEach(this.registerTag);
            }
          }
        )
      }
    );
  };

  getCurrentTags() {
    if (this._$stateParams.tags) {
      return this._$stateParams.tags.split(',');
    }
    return [];
  };

  registerTag(tagName, tagDescription) {
    if (!tagName) {
      return;
    }
    var tagNames = this.tags.map(function(tag) {
      return tag.name;
    });
    //if (!_.include(tagNames, tagName)) {
    if (!tagNames.includes(tagName)) {
      this.tags.push(new Tag(tagName, tagDescription));
    }
  }

  //this.registerTag = registerTag;
}
