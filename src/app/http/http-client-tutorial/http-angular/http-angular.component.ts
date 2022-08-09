import { ConfigService } from './../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../model/config';

@Component({
  selector: 'app-http-angular',
  templateUrl: './http-angular.component.html',
  styleUrls: ['./http-angular.component.scss']
})
export class HttpAngularComponent implements OnInit {
    config: Config | undefined;
    headers: string[] = [];

    constructor(
        private configService: ConfigService
    ) { }

    ngOnInit(): void {
        this.showConfig();

        //type response
        //this.showConfigResponse();
    }

    showConfig() {
        this.configService.getConfig()
            .subscribe((data: Config) => this.config = { ...data }); // clone the data object, using its known Config shape
    }

    showConfigResponse() {
        this.configService.getConfigResponse()
            // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                //console.log(resp);
                // display its headers
                const keys = resp.headers.keys();
                //output ['accept-ranges', 'access-control-allow-origin', 'content-length', 'content-type', 'date', 'etag', 'x-powered-by']
                //console.log(keys);
                this.headers = keys.map(key =>
                `${key}: ${resp.headers.get(key)}`);
                //console.log(this.headers);

                // access the body directly, which is typed as `Config`.
                this.config = { ...resp.body! };
                //console.log(this.config);
            });
      }

}
