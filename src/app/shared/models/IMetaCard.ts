import { QuizAnswer } from './QuizAnswer';

interface IMetaContentResultsUI {
  resultsTitle: string;
  resultsSubtitle: string;
  resultsButtonText: string;
  resultsButtonDeeplink: string;
}

export interface IMetaContent {
  resultsUi: IMetaContentResultsUI;
  arrowEnabled: boolean;
  titleColor: string;
  backgroundColor: string;
  textColor: string;
  answers: QuizAnswer[];
  showResults: boolean;
  showHelpLink: boolean;
  title: string;
  text: string;
}

export default interface IMetaCard {
  type: number;
  position: number;
  priority: number;
  content: IMetaContent;
}
