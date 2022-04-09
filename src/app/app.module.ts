import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
