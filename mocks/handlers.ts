import { rest } from 'msw';

export const handlers = [
    rest.post('/api/users', async (req, res, ctx) => {
        const { name, email } = await req.json();
        if (!name || !email) {
            return res(ctx.status(400), ctx.json({ error: 'Missing fields' }));
        }
        return res(ctx.status(201), ctx.json({ message: 'User created' }));
    }),
];
