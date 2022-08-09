import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let controlVal = control.value; //Lấy giá trị của control
    if (typeof controlVal === 'number') {
      controlVal = `${controlVal}`; //Check xem nếu giá trị là số (vì bạn có thể dùng ở <input type="number") thì convert giá trị đó sang string.
    }
    let isWhitespace = (controlVal || '').trim().length === 0; //Check độ dài của string sau khi đã trim, nếu độ dài vẫn băng 0 thì chắc chắn input chỉ toàn dấu cách.
    let isValid = !isWhitespace;
    return isValid ? null : { whitespace: 'value is only whitespace' };
  };
}
