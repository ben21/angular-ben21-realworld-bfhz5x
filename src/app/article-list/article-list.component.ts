import { Component, OnInit } from '@angular/core';

import { RepositoryService } from'../repository.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles; /* = [
  {
    author: 'Eric Simons',
    date: 'January 20th',
    likes: 29,
    title: 'How to build webapps that scale',
    description: "This is the description for the post"
  },
  {
    author: 'Albert Pai',
    date: 'January 20th',
    likes: 32,
    title: "The song you won't ever stop singing. No matter how hard you try.",
    description: 'This is the description of the post'
  },
  
];  */

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.getArticles().subscribe(data => {
            this.articles = data.articles;
            
            
        }, error => console.error('There was an error!', error))
  }

}