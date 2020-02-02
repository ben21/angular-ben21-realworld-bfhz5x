import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { RepositoryService } from './repository.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, HomePageComponent, SidebarComponent, ArticleListComponent, ArticlePreviewComponent, SignupComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RepositoryService]
})
export class AppModule { }
