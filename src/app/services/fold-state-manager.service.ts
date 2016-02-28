'use strict';

import { Injectable } from 'angular2/core';

@Injectable()
export class FoldStateManager {

  constructor(private ASTManager: any,
    private Editor: any, private $rootScope: any) {


  Editor.onFoldChanged(foldChangedInEditor);
  this.foldEditor = foldEditor;
  this.getFoldedTree = getFoldedTree;

  }



  /**
   * Adds or removes a fold in Ace editor with given path
   *
   * @param {array<string>} path - a list of keys to reach to the node that
   * needs to be folded/unfolded
   *
   * @param {boolean} fold - true to fold the node and false to unfold it
   *
  */
  foldEditor(path, fold) {
    this.ASTManager.positionRangeForPath(this.$rootScope.editorValue, path)
    .then(function (range) {

      // Editor API is 0-indexed. Because of this we're subtracting 1 from line
      // numbers
      if (fold) {
        this.Editor.addFold(range.start.line - 1, range.end.line - 1);
      } else {
        this.Editor.removeFold(range.start.line - 1, range.end.line - 1);
      }
    });
  }

  /**
   * Responder to fold change events in Ace editor
   *
   * @param {object} event - Ace editor's fold change event. It has a data
   * object that includes the location of the fold and an action property that
   * describes the type of event(fold or unfold)
   *
  */
  foldChangedInEditor(event) {

    // Editor API is 0-indexed. Because of this we're adding 1 to line numbers
    var position = {
      line: event.data.start.row + 1,
      column: event.data.start.column + 1
    };

    this.ASTManager.pathForPosition(this.$rootScope.editorValue, position)
    .then(function (path) {
      var $folded = event.action === 'add';

      // walk down the tree to reach to our specific node in spec
      var current = this.$rootScope.specs;
      // while (path.length && _.isObject(current)) {
      while (path.length && typeof current === 'object') {

        current = current[path.shift()];
      }

      //if (_.isObject(current)) {
      if (current) {
        current.$folded = !!$folded;
      }
    });
  }

  /*
   * Get fold state tree of spec
   *
   * @param {object} tree
   * @param {object} newTree
   *
   * @returns {object}
  */
 getFoldedTree(tree, newTree) {
    if (!tree) {
      return tree;
    }

    var result = {};

    // UNDONE: _.keys(tree).forEach(function (key) {
    Object.keys(tree).forEach(function (key) {

      // UNDONE: if (_.isObject(tree[key]) && _.isObject(newTree[key])) {
      if (typeof tree[key] === 'object' && typeof newTree[key] === 'object') {
        result[key] = this.getFoldedTree(tree[key], newTree[key]);

      } else {
        if (key === '$folded') {
          result[key] = tree[key];
        } else {
          result[key] = newTree[key];
        }
      }

    });

    return result;
  }

}