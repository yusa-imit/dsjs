export interface DSObjectProps {
  __DS__TYPE: string
}

class DSObject {
  private ___DS__TYPE: string
  constructor(DSObjProps: DSObjectProps) {
    this.___DS__TYPE = DSObjProps.__DS__TYPE
  }
  get __DS__TYPE() {
    return this.___DS__TYPE
  }
  protected set __DS__TYPE(__DS__TYPE: string) {
    this.___DS__TYPE = __DS__TYPE
  }
}

export { DSObject }
