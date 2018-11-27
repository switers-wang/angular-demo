import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { ChildOneComponent } from './child1/';
import { ChildTwoComponent } from './child2/';
import { NoFind }    from './noFind/index';
import { PercentTransform } from './test.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  /** 模块可以包含‘组件’，‘指令’，‘管道’，这里是声明本模块内部成员*/
  declarations: [
    AppComponent,
    ChildTwoComponent,
    ChildOneComponent,
    ChildComponent,
    NoFind,
    HighlightDirective,
    PercentTransform,
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
