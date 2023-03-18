class BaseObject {
  private ___DS__TYPE: string
  constructor(__DS__TYPE: string) {
    this.___DS__TYPE = __DS__TYPE
  }
  get __DS__TYPE() {
    return this.___DS__TYPE
  }
  set __DS__TYPE(__DS__TYPE: string) {
    this.___DS__TYPE = __DS__TYPE
  }
}

export { BaseObject }
