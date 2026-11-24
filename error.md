2026-11-24 06:07:09 | [32mINFO[0m | app.core.middleware:dispatch:60 | HTTP response
172.31.0.147:39008 - "GET /api/v1/health/ready HTTP/1.1" 200
2026-11-24 06:07:10 | [32mINFO[0m | app.core.middleware:dispatch:60 | HTTP response
172.31.33.106:3282 - "GET /api/v1/health/ready HTTP/1.1" 200
2026-11-24 06:07:36 | [33mWARNING[0m | app.core.exceptions:validation_exception_handler:41 | Validation error
/usr/local/lib/python3.12/site-packages/sentry_sdk/integrations/starlette.py:273: StarletteDeprecationWarning: 'HTTP_422_UNPROCESSABLE_ENTITY' is deprecated. Use 'HTTP_422_UNPROCESSABLE_CONTENT' instead.
  return await old_handler(self, *args, **kwargs)
2026-11-24 06:07:36 | [32mINFO[0m | app.core.middleware:dispatch:60 | HTTP response
172.31.27.4:53712 - "POST /api/v1/admin/subscriptions/plans/requests HTTP/1.1" 422
