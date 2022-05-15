import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUserSign, SignText } from '../../shared/models/IUserSign';

@Component({
  selector: 'app-posted-as',
  template: `
    <div class="posted-as">
      {{ userSign }}
    </div>
  `,
  styles: [
    `
      .posted-as {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--text_steel);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostedAsComponent {
  @Input() sign!: IUserSign;
  constructor() {}

  get userSign(): string | undefined {
    switch (this.sign.signType) {
      case SignText.companyDisplayName:
      case 3:
        return `works at ${this.sign.companyDisplayName}`;
      case SignText.location:
        return `from ${this.sign.location}`;
      case SignText.professionalTitle:
        return `works as ${this.sign.professionalTitle}`;
      case SignText.username:
        return this.sign.username;
      case SignText.firstLastName:
        return `${this.sign.firstLastName?.firstName} ${this.sign.firstLastName?.lastName}`;
      case SignText.Teacher:
      case 7:
        return 'Teacher';
      case SignText['Deactivated user']:
        return 'Deactivated user';
      default:
        return 'Not introduced';
    }
  }
}
