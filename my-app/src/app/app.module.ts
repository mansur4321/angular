import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCComponent } from './header-c/header-c.component';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SearchComponent } from './search/search.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { AccountComponent } from './account/account.component';
import { ActionsComponent } from './actions/actions.component';
import { VideoComponent } from './video/video.component';
import { SubsComponent } from './subs/subs.component';
import { SebButtonComponent } from './seb-button/seb-button.component';
import { ComentComponent } from './coment/coment.component';
import { GradeComponent } from './grade/grade.component';
import { AdFoodComponent } from './ad-food/ad-food.component';
import { ZenComponent } from './zen/zen.component';
import { ContentComponent } from './content/content.component';
import { EntryButtonComponent } from './entry-button/entry-button.component';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { CardFonComponent } from './card-fon/card-fon.component';
import { CardComponent } from './card/card.component';
import { ColumnRightComponent } from './column-right/column-right.component';
import { AppsComponent } from './apps/apps.component';
import { NewsComponent } from './news/news.component';
import { InfoComponent } from './info/info.component';
import { InsideContainerComponent } from './inside-container/inside-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCComponent,
    CurrencyComponent,
    WeatherComponent,
    TrafficComponent,
    SearchComponent,
    SearchFieldComponent,
    AccountComponent,
    ActionsComponent,
    VideoComponent,
    SubsComponent,
    SebButtonComponent,
    ComentComponent,
    GradeComponent,
    AdFoodComponent,
    ZenComponent,
    ContentComponent,
    EntryButtonComponent,
    CartButtonComponent,
    CardFonComponent,
    CardComponent,
    ColumnRightComponent,
    AppsComponent,
    NewsComponent,
    InfoComponent,
    InsideContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
