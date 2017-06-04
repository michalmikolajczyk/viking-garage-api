{{#each controllers}}
import { {{name}} } from '{{modulePath}}';
{{/each}}

export function registerRoutes(app: any) {
  {{#each controllers}}
  {{#each actions}}
  app.{{method}}('{{../../basePath}}/{{../path}}{{path}}', (req: any, res: any, next: any) => {
    const controller = new {{../name}}();
    controller.{{name}}.apply(controller, [req, res, next]);
  });
  {{/each}}
  {{/each}}
}
