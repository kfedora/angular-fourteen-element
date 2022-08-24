import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [HelloWorldComponent]
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap() {
    const helloWorldElement = createCustomElement(HelloWorldComponent, { injector: this.injector });
    customElements.define("app-hello-world", helloWorldElement);
  }
}
