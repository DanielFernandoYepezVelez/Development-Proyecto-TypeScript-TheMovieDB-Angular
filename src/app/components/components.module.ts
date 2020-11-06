import { NgModule } from '@angular/core';
import { RatingModule } from 'ng-starrating';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Components */
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';

/* Pipe Modules */
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent, CastSlideshowComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent, CastSlideshowComponent]
})
export class ComponentsModule { }
