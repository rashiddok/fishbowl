interface IMetaContentResultsUI {
  resultsTitle: string;
  resultsSubtitle: string;
  resultsButtonText: string;
  resultsButtonDeeplink: string;
}

interface IMetaContent {
  resultsUi: IMetaContentResultsUI;
  arrowEnabled: boolean;
  titleColor: string;
  backgroundColor: string;
  textColor: string;
  answers: [];
  showResults: boolean;
  showHelpLink: boolean;
  title: string;
  text: string;
  imageUrl: string;
}

export default interface IMetaCard {
  type: number;
  position: number;
  priority: number;
  content: IMetaContent;
}
