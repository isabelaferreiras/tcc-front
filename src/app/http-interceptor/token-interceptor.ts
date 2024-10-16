import { HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";


export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const token = localStorage.getItem('token');
    const publicEndpoint = [
        '/auth/login',
        '/auth/register',
        '/profissional/cadastrarProfissional',
        '/empresa/cadastrarEmpresa',
    ]

    const isPublicEndpoint = (url: string) => {
        const relativeUrl = url.replace('http://localhost:8080', '');

        return publicEndpoint.some((endpoint) => {
            return relativeUrl === endpoint;
        })
    }

    if(isPublicEndpoint(req.url)) {
        return next(req);
    }

    if(token && !isPublicEndpoint(req.url)) {
        console.log('adicioneiToken')
        const authReq = req.clone({
            setHeaders: { Authorization: 'Bearer ' + token},
        });
        return next(authReq);
    }

    return next(req);
}