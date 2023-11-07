import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component'
import { ImageSliderModule } from 'src/app/components/slider-home/imageSlider.module';

@NgModule({
    imports: [
        CommonModule,
        ImageSliderModule,
    ],
    exports: [HomeComponent],
    declarations: [HomeComponent],

})

export class HomeModule {}