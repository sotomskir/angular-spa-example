import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../core/translate/translate.service';

@Pipe({
  name: 'translate',
})

export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) { }

  transform(value: string, args: any[]): any {
    if (!value) {
      return;
    }
    return this.translateService.translate(value);
  }
}
