import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ParentCommentsComponent } from "./parent-comments/parent-comments.component";
import { CommentListComponent } from "./parent-comments/comment-list/comment-list.component";
import { CommentAddEditComponent } from "./parent-comments/comment-add-edit/comment-add-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ParentCommentsComponent,
    CommentListComponent,
    CommentAddEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
