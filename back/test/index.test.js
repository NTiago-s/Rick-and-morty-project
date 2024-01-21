const { server } = require('../src/app');
const session = require('supertest');
const request = session(server);



describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con estatus: 200', async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get('/rickandmorty/character/23');
            expect(response.body).not.toBeNull();
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('species');
            expect(response.body).toHaveProperty('gender');
            expect(response.body).toHaveProperty('status');
            expect(response.body).toHaveProperty('origin');
            expect(response.body).toHaveProperty('image');
        })
        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/900')
            expect(response.statusCode).toBe(500);
        })
    });

    describe('GET /rickandmorty/login', () => {
        it('Responde con objeto de las prop access en true si son correctas', async () => {
            const response = await request.get('/rickandmorty/login?email=navarrotiago194@gmail.com&password=Hola123')
            expect(response.body).toEqual({ access: true });
        })
        it('Responde con objeto de las prop access en false si no son correctas', async () => {
            const response = await request.get('/rickandmorty/login?email=navarrotiago19413413123@gmail.com&password=Hola123asda')
            expect(response.body).toEqual({ access: false });
        })
    });

    describe('POST /rickandmorty/fav', () => {
        it('responde con un arreglo con los objetos enviados por body', async () => {
            const character = {
                id: 1200,
                name: 'Tiago',
                status: 'Alive',
                gender: 'Male',
                species: 'Human',
                origin: { name: 'c 137' },
                image: 'image.jpg'
            }
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body).toContainEqual(character);
        })
        it('responde un array con datos cargados anteriormente', async () => {
            const character = {
                id: 120434,
                name: 'Tiago Navarro',
                status: 'Dead',
                gender: 'Male',
                species: 'Extraterrestre',
                origin: { name: 'c 137' },
                image: 'image.jpg'
            }
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body.length).toBe(2);
        })
    });

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('responde un arreglo de objetos sin modificar si no se encuentra el id en fav', async () => {
            const response = await request.delete('/rickandmorty/fav/9000000');
            expect(response.body.length).toBe(2)
        })
        it('responde con un arreglo de objetos con los que estan en fav menos el personaje con el id que recibe', async () => {
            const response = await request.delete('/rickandmorty/fav/1200');
            expect(response.body.length).toBe(1)
        })
    });
});