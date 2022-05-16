export class QuizAnswer {
  _id: string;
  text: string;
  color: string;
  variant: string;

  constructor(id: string, text: string, color: string, variant: string) {
    this._id = id;
    this.text = text;
    this.color = color;
    this.variant = variant;
  }
}
