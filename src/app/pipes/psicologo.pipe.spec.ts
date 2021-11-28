import { PsicologoPipe } from './psicologo.pipe';

describe('PsicologoPipe', () => {
  it('create an instance', () => {
    const pipe = new PsicologoPipe();
    expect(pipe).toBeTruthy();
  });
});
