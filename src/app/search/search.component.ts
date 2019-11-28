import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../models/result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKeyword:string;
  displayHeading:string;
  results:Array<Result>;
  noresults:boolean;

  constructor(private http:HttpClient) { 
    this.displayHeading="Welcome to Social Media Monitoring App !";
    this.noresults=true;
  }

  ngOnInit() {
  }

  GetResults(keyword)
  {
    this.results=[];
    this.searchKeyword=keyword;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/igresults/_search?q=";
    URL+=keyword;
    URL+="&size=100";
    this.http.get(URL, { headers : headers })
    .subscribe(
      res => 
        {
          if(res["hits"]["total"]["value"]>0)
          {
            this.results = new Array<Result>();
            this.noresults=false;
            this.displayHeading="Results for <b>"+keyword+"</b>";
            for(let i=0;i<res["hits"]["total"]["value"];i++)
            {
              let resultTemp = new Result();
              resultTemp.UserName=res["hits"]["hits"][i]["_source"]["username"];
              resultTemp.PostedTime=res["hits"]["hits"][i]["_source"]["postedtime"];
              resultTemp.IconUrl=res["hits"]["hits"][i]["_source"]["iconurl"];
              resultTemp.Keyword=res["hits"]["hits"][i]["_source"]["keyword"];
              resultTemp.PostUrl=res["hits"]["hits"][i]["_source"]["posturl"];
              resultTemp.Caption=decodeURI(res["hits"]["hits"][i]["_source"]["caption"]).substring(0,20)+"...";
              this.results.push(resultTemp);
            }
          }
          else
          {
            this.displayHeading="No Results Found !";
          }
        });
  }
}
