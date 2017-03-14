import { Component } from '@angular/core';
@Component({
    selector: 'modal-demo',
	template: `
	
<div class="container">
  <input type="radio" name="colors" [value]=true (click)="vars=true">True<br>
  <input type="radio" name="colors" [value]=false (click)="vars=false">False
  <br>
 <h3>Value:{{vars}}</h3>
<br><br>
<div class="container-fluid" [myUnless]=vars>
	<h2>Hey Assignment 11.3</h2>
	<p>show/hide element based boolean condition using myUnless</p>
</div>
</div>
`,
})

export class AppComponent{
	
	vars: boolean = false;
	
	constructor()
	{
		
	}
}
