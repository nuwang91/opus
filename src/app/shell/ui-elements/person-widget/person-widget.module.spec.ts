import { PersonWidgetModule } from './person-widget.module';

describe('PersonWidgetModule', () => {
  let personWidgetModule: PersonWidgetModule;

  beforeEach(() => {
    personWidgetModule = new PersonWidgetModule();
  });

  it('should create an instance', () => {
    expect(personWidgetModule).toBeTruthy();
  });
});
