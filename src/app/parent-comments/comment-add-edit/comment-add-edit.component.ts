import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CommetsServiceService } from "../commets-service.service";

@Component({
  selector: "app-comment-add-edit",
  templateUrl: "./comment-add-edit.component.html",
  styleUrls: ["./comment-add-edit.component.scss"],
})
export class CommentAddEditComponent implements OnInit {
  commentForm: FormGroup;
  constructor(private commetsService: CommetsServiceService) {}

  ngOnInit() {
    this.commentForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      website: new FormControl("", [Validators.required]),
      comments: new FormControl(""),
    });
  }

  onSave = () => {
    console.log("commentForm", this.commentForm.value);
    if (this.commentForm.valid) {
      this.commetsService.createComment(this.commentForm.value);
    }
  };

  onBack = () => {
    console.log("Clicking On back!!!");
  };
}
