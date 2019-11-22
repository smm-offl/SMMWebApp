import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
  }

  CreateIndex(indexNameCreate)
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/";
    URL+=indexNameCreate;
    this.http.put(URL,"", { headers : headers }).subscribe(res => console.log(res));
  }

  DeleteIndex(indexNameDelete)
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let URL = "http://localhost:9200/";
    URL+=indexNameDelete;
    this.http.delete(URL, { headers : headers }).subscribe(res => console.log(res));
  }

}
