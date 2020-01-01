/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Person,
} from './models/person';

export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
    /**
    * A typed object
    */
    'person': Person;
    /**
    * Enable REACT to get typesafe access this component while also get any access to the DOM element
    */
    'ref': any;
  }
  interface MyTabs {}
  interface TabP1 {}
  interface TabP2 {}
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyTabsElement extends Components.MyTabs, HTMLStencilElement {}
  var HTMLMyTabsElement: {
    prototype: HTMLMyTabsElement;
    new (): HTMLMyTabsElement;
  };

  interface HTMLTabP1Element extends Components.TabP1, HTMLStencilElement {}
  var HTMLTabP1Element: {
    prototype: HTMLTabP1Element;
    new (): HTMLTabP1Element;
  };

  interface HTMLTabP2Element extends Components.TabP2, HTMLStencilElement {}
  var HTMLTabP2Element: {
    prototype: HTMLTabP2Element;
    new (): HTMLTabP2Element;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'my-tabs': HTMLMyTabsElement;
    'tab-p1': HTMLTabP1Element;
    'tab-p2': HTMLTabP2Element;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
    /**
    * A typed object
    */
    'person'?: Person;
    /**
    * Enable REACT to get typesafe access this component while also get any access to the DOM element
    */
    'ref'?: any;
  }
  interface MyTabs {}
  interface TabP1 {}
  interface TabP2 {}

  interface IntrinsicElements {
    'my-component': MyComponent;
    'my-tabs': MyTabs;
    'tab-p1': TabP1;
    'tab-p2': TabP2;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'my-tabs': LocalJSX.MyTabs & JSXBase.HTMLAttributes<HTMLMyTabsElement>;
      'tab-p1': LocalJSX.TabP1 & JSXBase.HTMLAttributes<HTMLTabP1Element>;
      'tab-p2': LocalJSX.TabP2 & JSXBase.HTMLAttributes<HTMLTabP2Element>;
    }
  }
}


