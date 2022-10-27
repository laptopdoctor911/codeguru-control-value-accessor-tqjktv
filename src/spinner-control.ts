import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-number",
  template: `
    <div class="container">
      <div class="left">
        <input
          class="number-input"
          [value]="value"
          type="number"
          [disabled]="disabled"
        />
      </div>
      <div class="right">
        <button (click)="onIncrement()">+</button>
        <button (click)="onDeincrement()">-</button>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        padding: 0px;
      }
      .right {
        display: flex;
        flex-direction: column;
      }
      .number-input {
        height: 40px;
      }

      button {
        height: 20px;
        width: 20px;
        border: 0px;
        background-color: #aa33dd;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpinnerControl),
      multi: true
    }
  ]
})
export class SpinnerControl implements ControlValueAccessor {
  @Input()
  public value: number;
  @Input()
  public disabled: boolean;

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(val): void {
    console.log(val);
    this.value = +val || 0;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  numberChange($event) {
    this.onTouched();
    this.onChanged($event.target.value);
    this.setDisabledState(this.disabled);
  }

  onIncrement() {
    this.value = this.value + 1;
    this.onChanged(this.value);
  }

  onDeincrement() {
    this.value = this.value - 1;
    this.onChanged(this.value);
  }
}
