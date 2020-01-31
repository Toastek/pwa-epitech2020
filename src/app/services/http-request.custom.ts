import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestCustom {

    constructor(private http: HttpClient) { }

    public request(httpRequest: HttpRequest<any>) {
        return Observable.create(observer => {
            return this.http.request(httpRequest)
                .subscribe(event => {
                    // console.log('subscribe event', event);
                    switch (event.type) {
                        case HttpEventType.Sent:
                            // console.log('HttpEventType.Sent');
                            break;
                        case HttpEventType.ResponseHeader:
                            // console.log('HttpEventType.ResponseHeader');
                            break;
                        case HttpEventType.Response:
                            // console.log('HttpEventType.Response');
                            observer.next(event.body);
                            observer.complete();
                            break;
                    }
                }, error => { observer.error(error); });
        });
    }
}

