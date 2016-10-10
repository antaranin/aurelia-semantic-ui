/* -*- javascript -*- */
"use strict";

/**
 * Menu - http://semantic-ui.com/collections/menu.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {children, bindable} from 'aurelia-framework';

@uiElement( 'menu' )
export class SemanticUIMenuElement extends SemanticUIElement {}

@uiAttribute( 'menu' )
export class SemanticUIMenuAttribute extends SemanticUIAttribute {

	@bindable router;
	@children( '[ui-menu-item]' ) items;


	isSubmenu() {
		let parent = this.element.parentElement;
		if ( !parent ) { return false; }

		let classes = parent.classList
		if ( !classes ) { return false; }

		return (classes.contains('item') || classes.contains('menu'))
	}


	bind() {
		// Don't super for sub-menus because they shouldn't get the 'ui'
		if ( this.isSubmenu() ) {
			this.element.classList.add( 'menu' );
		} else {
			super.bind();
		}
	}

}


/**
 * ui-menu-item
 */
@uiElement( 'menu-item' )
export class SemanticUIMenuItemElement extends SemanticUIElement {}

@uiAttribute( 'menu-item' )
export class SemanticUIMenuItemAttribute extends SemanticUIAttribute {

	@bindableToggle active = false;

	bind() {
		// no super
		this.element.classList.add( 'item' );
	}

}

