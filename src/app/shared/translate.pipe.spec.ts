import { TranslatePipe } from './translate.pipe';
import { TranslateService } from '../core/translate/translate.service';

fdescribe('TranslatePipe', () => {

  beforeEach(() => {
    this.translateServiceStub = new TranslateService();
    spyOn(this.translateServiceStub, 'translate').and.stub();
    this.pipe = new TranslatePipe(this.translateServiceStub);
  });

  it('create an instance', () => {
    expect(this.pipe).toBeTruthy();
  });

  it('should translate value', () => {
    expect(this.pipe.transform('some value')).toEqual('Translated value');
  });
});
