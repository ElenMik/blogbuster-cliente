import { IPost } from './../../model/model-interfaces';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post: IPost

  constructor(
    private oPostService: PostService,
    private oActivatedRoute: ActivatedRoute
  ) {

    console.log("fjfoffufuiufidufyd8yf8dfyyf87rf7tr")

    this.oPostService.getOne(this.oActivatedRoute.snapshot.params.id).subscribe((data: IPost) => {
      this.post = data;
      console.log("fjfoffufuiufidufyd8yf8dfyyf87rf7tr")

    })
  }
  ngOnInit(): void {
  }
}

