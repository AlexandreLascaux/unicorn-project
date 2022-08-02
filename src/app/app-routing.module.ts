import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUnicornComponent } from './add-unicorn/add-unicorn.component';
import { HomeComponent } from './home/home.component';
import { LoveUnicornComponent } from './love-unicorn/love-unicorn.component';
import { UnishopComponent } from './unishop/unishop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-unicorn', component: AddUnicornComponent },
  { path: 'love-unicorn', component: LoveUnicornComponent },
  { path: 'unishop', component: UnishopComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
