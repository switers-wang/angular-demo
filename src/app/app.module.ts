import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  /** 模块可以包含‘组件’，‘指令’，‘管道’，这里是声明本模块内部成员*/
  declarations: [
    AppComponent
  ],
  /** 引入其他功能模块 */
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [AppComponent], /** 将模块内部成员export出去 */
  bootstrap: [AppComponent] /** 主视图，只有根模块需要*/
})
export class AppModule {}
