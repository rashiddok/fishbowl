import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUserSign, SignText } from '../../shared/models/IUserSign';

@Component({
  selector: 'app-posted-as',
  templateUrl: './posted-as.component.html',
  styleUrls: ['./posted-as.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostedAsComponent {
  @Input() sign!: IUserSign;
  constructor() {}

  get userSign(): string | undefined {
    switch (this.sign.signType) {
      case SignText.companyDisplayName:
      case 3:
        return this.sign.companyDisplayName;
        break;
      case SignText.location:
        return this.sign.location;
        break;
      case SignText.professionalTitle:
        return this.sign.professionalTitle;
        break;
      case SignText.username:
        return this.sign.username;
        break;
      case SignText.firstLastName:
        return `${this.sign.firstLastName?.firstName} ${this.sign.firstLastName?.lastName}`;
        break;
      case SignText.Teacher:
      case 7:
        return 'Teacher';
        break;
      case SignText['Deactivated user']:
        return 'Deactivated user';
        break;
      default:
        return 'Donno';
    }
  }
}
