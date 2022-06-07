export interface CommonResponse {
  status: string;
}
export interface WordForm {
  word: string;
  description: string;
  example: string;
}
export interface Word extends WordForm {
  id?: number;
}
