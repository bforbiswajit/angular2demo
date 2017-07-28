import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: 'input[autoGrow]',
    host: {
        '(focus)': 'onTextBoxFocus()',
        '(blur)': 'onTextBoxBlur()'
    }
})
export class autoGrow {
    constructor(private elemRef: ElementRef, private ren: Renderer) {

    }

    onTextBoxFocus() {
        this.ren.setElementStyle(this.elemRef.nativeElement, 'background-color', 'yellow');
    }

    onTextBoxBlur() {
        this.ren.setElementStyle(this.elemRef.nativeElement, 'background-color', 'white');
    }
}