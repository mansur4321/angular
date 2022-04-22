import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { OutsideContainerComponent } from './outside-container/outside-container.component';
import { WrapperContentComponent } from './wrapper-content/wrapper-content.component';
import { ContainerContentComponent } from './container-content/container-content.component';
import { ColumnLeftComponent } from './column-left/column-left.component';
import { WrapperMainContentComponent } from './wrapper-main-content/wrapper-main-content.component';
import { AppCComponent } from './app-c/app-c.component';

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
    OutsideContainerComponent,
    WrapperContentComponent,
    ContainerContentComponent,
    ColumnLeftComponent,
    WrapperMainContentComponent,
    AppCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
