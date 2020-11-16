import { Component, OnInit } from "@angular/core";
import { Comment } from "src/app/core/model/comment.model";
import { CommetsServiceService } from "../commets-service.service";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"],
})
export class CommentListComponent implements OnInit {
  listComment: Comment[] = [];
  constructor(private commetsService: CommetsServiceService) {}

  ngOnInit() {
    this.listComment = this.commetsService.getAllComments();
  }

  onCreate = () => {
    // this.route.navigate(['/team/113/user/ganesh']);
  };

  onEdit = () => {
    // this.route.navigate(['/team/113/user/ganesh']);
  };
}
