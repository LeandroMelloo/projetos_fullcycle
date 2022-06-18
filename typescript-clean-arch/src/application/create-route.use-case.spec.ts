import { RouteInMemoryRepository } from '../infra/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe('CreateRouteUseCase Tests', () => {
    it('should create a new route', async () => {
        const repository = new RouteInMemoryRepository();
        const createUseCase = new CreateRouteUseCase(repository);
        const output = await createUseCase.execute({
            title: 'minha rota',
            startPosition: { lat: 1, lng: 2 },
            endPosition: { lat: 3, lng: 4 },
        });
        expect(output).toStrictEqual({
            title: 'minha rota',
            startPosition: { lat: 1, lng: 2 },
            endPosition: { lat: 3, lng: 4 },
            points: []
        })
    })
})