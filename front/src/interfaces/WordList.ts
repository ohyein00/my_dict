export interface CommonResponse {
  status: string;
}
export interface Word {
  id: number;
  word: string;
  description: string;
  example: string;
}
export interface InputType {
  label: string;
  id: string;
  type: string;
}
export interface WordListData extends CommonResponse {
  data: Word[];
}
