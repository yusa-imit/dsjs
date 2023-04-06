function _LENGTH(o: any) {
  switch (typeof o) {
    case "string":
      return o.length
    case "number":
      return o
    case "function":
    case "bigint":
      return o.toString().length
    case "object":
      let l = 0
      Object.getOwnPropertyNames(o).forEach((k) => {
        l += _LENGTH(o[k])
      })
      return l
    case "boolean":
    case "undefined":
    case "symbol":
      return 0
    default:
      throw new Error("Cannot retrieve length")
  }
}

function SHALLOW_OBJECT_COMPARE(a: any, b: any): number {
  return JSON.stringify(a).localeCompare(JSON.stringify(b))
}

function DEEP_OBJECT_COMPARE(a: any, b: any): number {
  let diff = 0
  const keySet = new Set([
    ...Object.getOwnPropertyNames(a),
    ...Object.getOwnPropertyNames(b)
  ])
  keySet.forEach((property) => {
    if (a[property] && b[property] && typeof a[property] === typeof b[property])
      diff += DEFAULT_COMPARE_FUNCTION(a[property], b[property])
    else {
      diff += _LENGTH(a[property]) - _LENGTH(b[property])
    }
  })
  return diff
}

export function DEFAULT_COMPARE_FUNCTION(
  a: any,
  b: any,
  deepCompare: boolean = true
): number {
  if (typeof a !== typeof b)
    throw new Error(
      "Internal comparefunction detected type difference between elements."
    )
  switch (typeof a) {
    case "number":
      return a - (b as number)
    case "bigint":
      return parseInt(((a as bigint) - (b as bigint)).toString())
    case "string":
      return a.localeCompare(b as string)
    case "function":
      return (
        (a as Function).toString().length - (b as Function).toString().length
      )
    case "object":
      return deepCompare
        ? DEEP_OBJECT_COMPARE(a, b)
        : SHALLOW_OBJECT_COMPARE(a, b)
    case "boolean":
    case "symbol":
    case "undefined":
    default:
      throw new Error("Invalid compare function execution.")
  }
}
