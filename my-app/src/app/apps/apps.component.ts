import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.less']
})
export class AppsComponent {
  appsData = [
    {
      text: 'Маркет',
      srcImg: '../assets/img/Ya-market.jpg',
      classText: '',
      classImg: '',
    },

    {
      text: 'Видео',
      srcImg: '../assets/img/Ya-video.jpg',
      classText: '',
      classImg: '',
    },

    {
      text: 'Картинки',
      srcImg: '../assets/img/Ya-picture.jpg',
      classText: '',
      classImg: '',
    },

    {
      text: 'Новости',
      srcImg: '../assets/img/Ya-news.jpg',
      classText: '',
      classImg: '',
    },

    {
      text: 'Карты',
      srcImg: '../assets/img/Ya-pointer.jpg',
      classText: '',
      classImg: '',
    },

    {
      text: 'Переводчик',
      srcImg: '../assets/img/Ya-translator.jpg',
      classText: '',
      classImg: '',
    },

    {
      text: 'Музыка',
      srcImg: '../assets/img/Ya-music.jpg',
      classText: '',
      classImg: '',
    },

    {
      text: 'Программа',
      srcImg: '../assets/img/Ya-television.jpg',
      classText: '_text-mt-app',
      classImg: '_tv-height _mt-tv-logo',
    },

    {
      text: 'Авто.ру',
      srcImg: '../assets/img/Ya-car.jpg',
      classText: '',
      classImg: '',
    }
  ]
}
