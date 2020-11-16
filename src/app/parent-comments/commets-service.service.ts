import { Injectable } from "@angular/core";
import { Comment } from "../core/model/comment.model";
import { emit } from "process";

@Injectable({
  providedIn: "root",
})
export class CommetsServiceService {
  comments: Comment[] = [];
  constructor() {
    const comment1: Comment = {
      name: "Eudys",
      email: "e@gmail.com",
      webSite: "e.com",
    };
    const comment2: Comment = {
      name: "Eudys",
      email: "eu@gmail.com",
      webSite: "eu.com",
    };
    this.comments.push(comment1);
    this.comments.push(comment2);
  }

  public createComment = (comment: Comment): void => {
    this.comments.push(comment);
  };

  public updateComment = (comment: Comment): Comment => {
    const commentIndex = this.findCommentIndex(comment.email);
    this.comments.splice(commentIndex, 1, comment);
    return comment;
  };

  public getAllComments = (): Comment[] => this.comments;

  private findCommentIndex = (email: string): number =>
    this.comments.findIndex((c) => c.email === email);
}
