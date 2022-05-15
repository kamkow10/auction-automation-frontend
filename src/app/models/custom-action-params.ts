export class CustomActionParams {
  params: any;
  setCorrectly: boolean

  constructor(params: any, setCorrectly: boolean) {
    this.params = params;
    this.setCorrectly = setCorrectly;
  }
}
