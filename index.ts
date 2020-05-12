interface S {
  key: number
}

type Keys<T> = {
  readonly [P in keyof T]: T[P]
}

let a: Keys<S> = { key: 12 }
a.key = 3