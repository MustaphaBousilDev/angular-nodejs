import { Component } from '@angular/core';
import { SlideInterface } from 'src/app/components/slider-home/types/slide.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: SlideInterface[] = [
    { url: 'https://ma.jumia.is/cms/000_2023/000011_Novembre/BF_23/ADS/Defacto/SX.jpg', title: 'beach' },
    { url: 'https://ma.jumia.is/cms/000_2023/000011_Novembre/BF_23/ADS/LcWaikiki/SX_Waikiki.jpg', title: 'boat' },
    { url: 'https://ma.jumia.is/cms/000_2023/000011_Novembre/BF_23/ADS/KOTON/SX_Koton.jpg', title: 'forest' },
    { url: 'https://ma.jumia.is/cms/000_2023/000011_Novembre/BF_23/UND/Mode_Femme/SX.jpg', title: 'city' },
    { url: 'https://ma.jumia.is/cms/000_2023/000011_Novembre/BF_23/UND/Mode_Homme/SX.jpg', title: 'italy' },
  ];
}
