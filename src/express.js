"use strict";
exports.expressTemplate = `
/* tslint:disable:forin */
export function RegisterRoutes(app: any) {
  {{#each controllers}}
  {{#each actions}}
  app.{{method}}('{{../../basePath}}/{{../path}}{{path}}', function (req: any, res: any, next: any) {
      const params = [
          {{~#each parameters}}
          {{#if injected}}
          {{else}}
          null,
          {{~/if}}
          {{/each~}}
      ];
      params.push.apply(params, [req, res, next]);
      const controller = new {{../name}}();
      controller.{{name}}.apply(controller, params);
    }
  );
  {{/each}}
  {{/each}}
}`;
//# sourceMappingURL=express.js.map
