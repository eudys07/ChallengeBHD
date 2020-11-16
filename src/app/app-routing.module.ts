import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommentAddEditComponent } from "./parent-comments/comment-add-edit/comment-add-edit.component";
import { CommentListComponent } from "./parent-comments/comment-list/comment-list.component";

const routes: Routes = [
  { path: "addEdit", component: CommentAddEditComponent },
  { path: "*", component: CommentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
