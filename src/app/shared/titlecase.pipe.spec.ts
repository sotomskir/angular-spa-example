import { TitleCasePipe } from './titlecase.pipe';

describe('TitleCasePipe', () => {
  beforeEach(() => {
    this.pipe = new TitleCasePipe();
  });

  it('create an instance', () => {
    expect(this.pipe).toBeTruthy();
  });

  it('should convert value to uppercase', () => {
    expect(this.pipe.transform('Test')).toBe('TEST');
  });
});
