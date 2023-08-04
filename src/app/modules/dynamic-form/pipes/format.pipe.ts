import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: unknown, args: 'commaSeparated' | 'dashSeparated' | undefined): unknown {
    if (value) {
      if (args === 'commaSeparated') {
        return this.separateByCommas(value as string);
      } else if (args === 'dashSeparated') {
        return this.separateByDashs(value as string);
      } else {
        return value;
      }
    } else {
      return '---';
    }
  }

  private separateByCommas(value: number | string): string {
    if (!value) return '';
    let separated = '';
    const chars: string[] = value.toString().split('');
    let rem = 3 - chars.length % 3;
    for (let i = 0; i < chars.length; i++) {
      if ((i + rem) % 3 === 0 && i !== 0) {
        separated += ',';
      }
      separated += chars[i];
    }
    return separated;
  }

  private separateByDashs(value: number | string): string {
    if (!value) return '';
    let separated = '';
    const chars: string[] = value.toString().split('');
    for (let i = 0; i < chars.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        separated += '-';
      }
      separated += chars[i];
    }
    return separated;
  }
}
