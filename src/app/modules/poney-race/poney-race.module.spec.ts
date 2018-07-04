import { PoneyRaceModule } from './poney-race.module';

describe('PoneyRaceModule', () => {
  let poneyRaceModule: PoneyRaceModule;

  beforeEach(() => {
    poneyRaceModule = new PoneyRaceModule();
  });

  it('should create an instance', () => {
    expect(poneyRaceModule).toBeTruthy();
  });
});
