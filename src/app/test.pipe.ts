import { Pipe } from '@angular/core';
@Pipe({name: 'percentTransform'})
export class PercentTransform {
  transform(value: number): string {
    return `${value}%`;
  }
}