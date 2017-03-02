import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMAGE } from './saturation-lightness-image';

@Component({
    selector: 'saturation-lightness-box',
    template: `
        <div class="saturation-lightness blue">
            <cursor></cursor>
        </div>
    `,
    styles: [`
        .saturation-lightness {
            cursor: pointer;
            width: 100%;
            height: 130px;
            border:none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }

        .blue {
            background-color: blue;
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SaturationLightnessComponent),
        multi: true
    }]
})
export class SaturationLightnessComponent {

    @Input() selectedHue: string;
}
