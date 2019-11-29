import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../models/result.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})  
export class SettingsComponent implements OnInit {

  keywordList:String[];
  JSONtoIndex:string;

  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    this.JSONtoIndex= "";
    this.GetKeywordResults();
  }

  CreateKeywordIndex()
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/keywords";
    
    //Create Index
    this.http.put(
      URL,"", { headers : headers })
      .subscribe(
        res => {
          if(res["acknowledged"]==true)
          {
            this.KeywordsIndexMapping();
            alert("Keywords Index has been created Successfully !")
          }
        }
      );
  }

  CreateIGResultsIndex()
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/igresults";
    
    //Create Index
    this.http.put(
      URL,"", { headers : headers })
      .subscribe(
        res => {
          if(res["acknowledged"]==true)
          {
            this.IGResultsIndexMapping();
            alert("IG Results Index has been created Successfully !")
          }
        }
      );
  }

  IGResultsIndexMapping()
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/keywords";
    URL += "/_mapping";
    let postData = {
      "properties": {
        "username": {
          "type": "keyword"
        },
        "postedtime": {
          "type": "keyword"
        },
        "posturl": {
          "type": "keyword"
        },
        "keyword": {
          "type": "keyword"
        },
        "iconurl": {
          "type": "keyword"
        },
        "caption": {
          "type": "keyword"
        }
      }
    };
    this.http.put(URL,postData, { headers : headers }).subscribe(res => console.log(res));
  }

  KeywordsIndexMapping()
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/keywords";
    URL += "/_mapping";
    let postData = {
      "properties": {
        "name": {
          "type": "keyword"
        }
      }
    };
    this.http.put(URL,postData, { headers : headers }).subscribe(res => console.log(res));
  }

  IndexResultsIntoES()
  {
    for(let i=0;i<this.keywordList.length;i++)
    {
      this.GetIGResults(this.keywordList[i]);
    }
    alert("Results are getting Indexed to ES !")
  }

  ResetIndex()
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/_all";
    this.http.delete(
      URL, { headers : headers })
      .subscribe(res => {
        if(res["acknowledged"]==true)
        {
          alert("Indices have been resetted !")
        }
      }
    );
  }

  InsertKeyword(keyword)
  {
    this.keywordList=[];
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/keywords/_doc";
    let postData = {
      "name" : keyword
    };
    this.http.post(URL,postData,{ headers : headers }).subscribe(res =>
      {
        alert("Keyword has been inserted Successfully!")
        this.GetKeywordResults();
      });
  }

  GetIGResults(keyword)
  {
    this.JSONtoIndex="";
    let headers = new HttpHeaders();
    //headers = headers.set('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)');
    let URL = "https://www.instagram.com/explore/tags/"+keyword+"/?__a=1";
    this.http.get(URL,{ headers : headers })
      .subscribe(res =>{
        console.log(res);
        for(let i=0;i<res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"].length;i++)
        {
          let resultTemp = new Result();
          var postedDateTime = new Date(res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["taken_at_timestamp"] * 1000);
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          var year = postedDateTime.getFullYear();
          var month = months[postedDateTime.getMonth()];
          var date = postedDateTime.getDate();
          var hour = postedDateTime.getHours();
          var min = postedDateTime.getMinutes();
          var sec =postedDateTime.getSeconds();
          var postedOn = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

          resultTemp.UserName=res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["owner"]["id"];
          resultTemp.PostedTime=postedOn.toString();
          resultTemp.PostUrl="https://www.instagram.com/p/"+res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["shortcode"];
          resultTemp.Caption=encodeURI(res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["edge_media_to_caption"]["edges"][0]["node"]["text"]);
          resultTemp.Keyword=keyword;
          resultTemp.IconUrl=res["graphql"]["hashtag"]["edge_hashtag_to_top_posts"]["edges"][i]["node"]["thumbnail_src"];

          let JSONTemp = 
            "\n{ \"index\" : { \"_index\" : \"igresults\"}}\n{ \"username\" : \""+resultTemp.UserName +"\",\"postedtime\" : \""+resultTemp.PostedTime+"\",\"posturl\" : \""+resultTemp.PostUrl+"\",\"keyword\" : \""+resultTemp.Keyword+"\",\"iconurl\" : \""+resultTemp.IconUrl+"\",\"caption\" : \""+resultTemp.Caption+"\"}\n";
          this.JSONtoIndex+=JSONTemp;
        }
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        let URL = "http://localhost:9200/igresults/_bulk";
        let postData =this.JSONtoIndex
        this.http.post(URL,postData,{ headers : headers }).subscribe(res => console.log(res));
        this.JSONtoIndex="";
      });
  }

  FindUserNameFromID(userId)
  {
    let headers = new HttpHeaders();
    let userName;
    headers = headers.set('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)');
    let URL = "https://i.instagram.com/api/v1/users/"+userId+"/info/";
    this.http.get(URL,{ headers : headers })
      .subscribe(res =>{
        console.log(res);
        userName=res["user"]["username"]
        return userName;
      }
      );
      return userName;
  }

  GetKeywordResults()
  {
    this.keywordList=[];
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/keywords/_search?q=*";
    this.http.get(URL,{ headers : headers })
      .subscribe(res =>{
        console.log(res);
        for(let i=0;i<res["hits"]["total"]["value"];i++)
        {
          this.keywordList.push(res["hits"]["hits"][i]._source.name);
        }
        console.log(this.keywordList);
      });

  }

}
