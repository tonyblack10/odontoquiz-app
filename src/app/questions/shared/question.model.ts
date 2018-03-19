import { Category } from './../../categories/shared/category.model';

export interface Option {
  _id: string;
  text: string;
  isCorrect?: boolean;
}

export interface Question {
  _id: string;
  text: string;
  options: Option[];
  category: string;
  explanation: string;
}