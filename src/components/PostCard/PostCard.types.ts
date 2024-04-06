export interface CardPropTypes {
    title: string;
    description: string;
    selected?: boolean;
    onClick?: () => void;
    subTitle: string;
}

export interface CardContainerProps {
    selected?: boolean;
  }