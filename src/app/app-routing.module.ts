import { EditCharacterComponent } from './pages/characters/edit-character/edit-character.component';
import { LoginComponent } from './pages/users/login/login.component';
import { RegisterComponent } from './pages/users/register/register.component';
import { CreateCharacterComponent } from './pages/characters/create-character/create-character.component';
import { CharacterDetailsComponent } from './pages/characters/character-details/character-details.component';
import { AboutComponent } from './pages/about/about.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'aboutNintendo', component: AboutComponent},
  {path: 'characters/:id', component: CharacterDetailsComponent},
  {path:'newCharacter', component: CreateCharacterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'editCharacter/:id', component: EditCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
