import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';    
import { FormsModule }   from '@angular/forms'; 
import { CursosService } from "./cursos/cursos.service";
import { LogService } from "./shared/log.service";
// import { routing } from "./app.routing";
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from "./settings.service";


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosRoutingComponent } from './cursos-routing/cursos-routing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CursoDetalheComponent } from './cursos-routing/curso-detalhe/curso-detalhe.component';
import { CursosRoutingService } from './cursos-routing/cursos-routing.service';
import { CursoNaoEncontradoComponent } from './cursos-routing/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoRoutingModule } from './cursos-routing/cursos-routing.module';
import { AlunosModule } from './alunos/alunos.module';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    CursosComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
    HomeComponent,
    LoginComponent,
    // CursosRoutingComponent,
    NavbarComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MeuFormModule,
    CriarCursoModule,
    AlunosModule,
    // routing
    CursoRoutingModule,
    AppRoutingModule

  ],
  // providers: [CursosService],
  // providers:[LogService],
  providers:[
    // {
    //   provide: LOCALE_ID,
    //   useValue:'pt-BR'
    // }
    // CursosRoutingService,
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
