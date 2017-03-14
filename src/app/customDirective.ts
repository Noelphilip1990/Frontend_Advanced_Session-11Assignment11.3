import { Directive, ElementRef, Input, HostListener, Renderer, OnInit } from '@angular/core';
@Directive({
	selector: '[myUnless]'
})
export class CustomDirective 
{
	
	constructor(private el: ElementRef, public renderer: Renderer)
	{

	}
	@Input('myUnless') set myUnless(condition: boolean) 
	{
		if (condition == true) {
			this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
		}
		else if (condition == false) {
			this.renderer.setElementStyle(this.el.nativeElement, 'display', 'unset');
		} 
	}
	
	
	
	private changeColor(color: string)
	{
		
	}
}