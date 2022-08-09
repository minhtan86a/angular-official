import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptor } from "./header.interceptor";
import { ResponseInterceptor } from "./response.interceptor";

//keep all interceptors here
export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS, //http interceptor token
        useClass: HeaderInterceptor, //http interceptor class name
        multi: true, //is a token for a multiprovider that injects an array of values, rather than a single value.
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ResponseInterceptor,
        multi: true,
    }
]
