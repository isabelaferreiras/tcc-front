import { HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";


export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const token = localStorage.getItem('token');
    const publicEndpoint = [
        '/auth/login',
        '/profissional/',
        '/empresa/',
    ]

    const isPublicEndpoint = (url: string) => {
        const relativeUrl = url.replace('http://localhost:9090', '');

        return publicEndpoint.some((endpoint) => {
            return relativeUrl === endpoint;
        })
    }

    if(isPublicEndpoint(req.url)) {
        return next(req);
    }

    if(token) {
        req = req.clone({ setHeaders: {Authorization: `Bearer ${token}`}});
        return next(req);
    }

    return next(req);
}