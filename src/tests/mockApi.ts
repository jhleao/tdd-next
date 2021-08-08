/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockServer = setupServer(
  // ||----------------------------------------------||
  // ||-------------- Fallback Handlers -------------||

  rest.get('*', (req, res, ctx) => {
    console.error(`UNHANDLED REQUEST: Please add a GET request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: `UNHANDLED REQUEST: Please add a GET request handler for ${req.url.toString()}` }));
  }),

  rest.post('*', (req, res, ctx) => {
    console.error(`UNHANDLED REQUEST: Please add a POST request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: `UNHANDLED REQUEST: Please add a POST request handler for ${req.url.toString()}` }));
  }),

  rest.patch('*', (req, res, ctx) => {
    console.error(`UNHANDLED REQUEST: Please add a PATCH request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: `UNHANDLED REQUEST: Please add a PATCH request handler for ${req.url.toString()}` }));
  }),

  rest.delete('*', (req, res, ctx) => {
    console.error(`UNHANDLED REQUEST: Please add a DELETE request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: `UNHANDLED REQUEST: Please add a DELETE request handler for ${req.url.toString()}` }));
  }),
);

export default mockServer;
