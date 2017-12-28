import { AuthController } from './controllers/auth';
import { BookingController } from './controllers/booking';
import { ContactController } from './controllers/contact';
import { OfferController } from './controllers/offer';
import { PaymentController } from './controllers/payment';

import * as passport from 'passport';

export function registerRoutes(app: any) {
    app.get('/user', passport.authenticate('jwt', { session: false }), (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.get.apply(controller, [req, res, next]);
    });
    app.put('/user', passport.authenticate('jwt', { session: false }), (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.put.apply(controller, [req, res, next]);
    });
    app.post('/user/change', (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.change.apply(controller, [req, res, next]);
    });
    app.get('/user/check', (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.check.apply(controller, [req, res, next]);
    });
    app.post('/user/login', (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.login.apply(controller, [req, res, next]);
    });
    app.get('/user/logout', (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.logout.apply(controller, [req, res, next]);
    });
    app.post('/user/resend', (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.resend.apply(controller, [req, res, next]);
    });
    app.post('/user/reset', (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.reset.apply(controller, [req, res, next]);
    });
    app.post('/user/signup', (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.signup.apply(controller, [req, res, next]);
    });
    app.post('/user/verify', (req: any, res: any, next: any) => {
        const controller = new AuthController();
        controller.verify.apply(controller, [req, res, next]);
    });
    app.get('/booking/:id', (req: any, res: any, next: any) => {
        const controller = new BookingController();
        controller.get.apply(controller, [req, res, next]);
    });
    app.post('/booking', (req: any, res: any, next: any) => {
        const controller = new BookingController();
        controller.post.apply(controller, [req, res, next]);
    });
    app.get('/booking/:id', (req: any, res: any, next: any) => {
        const controller = new BookingController();
        controller.put.apply(controller, [req, res, next]);
    });
    app.get('/booking/:id', (req: any, res: any, next: any) => {
        const controller = new BookingController();
        controller.delete.apply(controller, [req, res, next]);
    });
    app.post('/contact', (req: any, res: any, next: any) => {
        const controller = new ContactController();
        controller.post.apply(controller, [req, res, next]);
    });
    app.delete('/offer/:id', (req: any, res: any, next: any) => {
        const controller = new OfferController();
        controller.delete.apply(controller, [req, res, next]);
    });
    app.get('/offer/:id', (req: any, res: any, next: any) => {
        const controller = new OfferController();
        controller.get.apply(controller, [req, res, next]);
    });
    app.get('/offer', (req: any, res: any, next: any) => {
        const controller = new OfferController();
        controller.getAll.apply(controller, [req, res, next]);
    });
    app.post('/offer', (req: any, res: any, next: any) => {
        const controller = new OfferController();
        controller.post.apply(controller, [req, res, next]);
    });
    app.put('/offer/:id', (req: any, res: any, next: any) => {
        const controller = new OfferController();
        controller.put.apply(controller, [req, res, next]);
    });
    app.get('/payment/:id', (req: any, res: any, next: any) => {
        const controller = new PaymentController();
        controller.get.apply(controller, [req, res, next]);
    });
    app.post('/payment', (req: any, res: any, next: any) => {
        const controller = new PaymentController();
        controller.post.apply(controller, [req, res, next]);
    });
}
