/* tslint:disable */
import { ValidateParam } from 'tsoa';
import { AccountsController } from './controllers/auth/index';

const models: any = {
    'User': {
        'id': { typeName: 'number', required: true },
        'email': { typeName: 'string', required: true },
        'createdAt': { typeName: 'datetime', required: true },
    },
    'Account': {
        'id': { typeName: 'number', required: true },
        'address': { typeName: 'string', required: false },
        'name': { typeName: 'string', required: true },
        'users': { typeName: 'array', required: false, arrayType: 'User' },
        'fields': { typeName: 'array', required: false, arrayType: 'string' },
    },
};


/* tslint:disable:forin */
export function RegisterRoutes(app: any) {
    app.post('/auth/login',
        function(req: any, res: any, next: any) {
            const params = {
                'someFlag': { typeName: 'boolean', required: true },
            };

            let validatedParams: any[] = [];
            try {
                validatedParams = getValidatedParams(params, req, '');
            } catch (err) {
                return next(err);
            }

            const controller = new AccountsController();
            promiseHandler(controller.login.apply(controller, validatedParams), res, next);
        });
    app.post('/auth/signin',
        function(req: any, res: any, next: any) {
            const params = {
            };

            let validatedParams: any[] = [];
            try {
                validatedParams = getValidatedParams(params, req, '');
            } catch (err) {
                return next(err);
            }

            const controller = new AccountsController();
            promiseHandler(controller.signin.apply(controller, validatedParams), res, next);
        });


    function promiseHandler(promise: any, response: any, next: any) {
        return promise
            .then((data: any) => {
                if (data) {
                    response.json(data);
                } else {
                    response.status(204);
                    response.end();
                }
            })
            .catch((error: any) => next(error));
    }

    function getRequestParams(request: any, bodyParamName?: string) {
        const merged: any = {};
        if (bodyParamName) {
            merged[bodyParamName] = request.body;
        }

        for (let attrname in request.params) { merged[attrname] = request.params[attrname]; }
        for (let attrname in request.query) { merged[attrname] = request.query[attrname]; }
        return merged;
    }

    function getValidatedParams(params: any, request: any, bodyParamName?: string): any[] {
        const requestParams = getRequestParams(request, bodyParamName);

        return Object.keys(params).map(key => {
            if (params[key].injected === 'inject') {
                return undefined;
            } else if (params[key].injected === 'request') {
                return request;
            } else {
                return ValidateParam(params[key], requestParams[key], models, key);
            }
        });
    }
}