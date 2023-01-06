import { CSSInterpolation } from '@emotion/css'
import { FC } from 'react'
import { TwStyle } from 'twin.macro'

export type StyleArray = (TwStyle | boolean | undefined | null | number)[]
export type StyleGen = (...args: any) => TwStyle | StyleArray

export type StyleDefs = {
  [s: string]: TwStyle | StyleArray | StyleGen
}

export type CompatibleStyleDefs<T extends StyleDefs> = {
  [K in keyof T]: T[K] extends StyleGen
    ?
        | ((...args: Parameters<T[K]>) => TwStyle | StyleArray)
        | TwStyle
        | StyleArray
    : TwStyle | StyleArray
}

function mergeStyles<T extends StyleDefs>(
  s1: T,
  s2?: Partial<CompatibleStyleDefs<T>> | null | false,
) {
  return !s2
    ? s1
    : (Object.keys(s1).reduce((styles, key) => {
        styles[key] = !s2[key]
          ? s1[key]
          : typeof s1[key] === 'function'
          ? (...args: any[]) =>
              [
                (s1[key] as any)(...args),
                typeof s2[key] === 'function'
                  ? (s2[key] as any)(...args)
                  : s2[key],
              ].flat()
          : [s1[key], s2[key]].flat()
        return styles
      }, {} as any) as T)
}

export function withStyles<T extends StyleDefs>(
  topStyles: T,
  displayName?: string,
) {
  return function <CompProps = {}>(
    Comp: FC<
      {
        styles: typeof topStyles
        className?: string
      } & CompProps
    >,
  ): FC<
    CompProps & {
      styles?: Partial<CompatibleStyleDefs<typeof topStyles>> | null | false
      className?: string
      css?: CSSInterpolation
    } & CompProps
  > {
    const StyledComp = function ({
      styles,
      className,
      css,
      ...rest
    }: {
      styles?: Partial<CompatibleStyleDefs<typeof topStyles>> | null | false
      className?: string
      css?: CSSInterpolation
    } & CompProps) {
      return Comp({
        styles: mergeStyles(topStyles, styles),
        className,
        ...(rest as CompProps),
      })
    }
    StyledComp.displayName = `${displayName ?? 'withStyles'}`
    return StyledComp
  }
}

export function withRootlessStyles<T extends StyleDefs>(
  topStyles: T,
  displayName?: string,
) {
  return function <CompProps = {}>(
    Comp: FC<
      {
        styles: typeof topStyles
      } & CompProps
    >,
  ): FC<
    CompProps & {
      styles?: Partial<CompatibleStyleDefs<typeof topStyles>> | null | false
    } & CompProps
  > {
    const StyledComp = function ({
      styles,
      ...rest
    }: {
      styles?: Partial<CompatibleStyleDefs<typeof topStyles>> | null | false
    } & CompProps) {
      return Comp({
        styles: mergeStyles(topStyles, styles),
        ...(rest as CompProps),
      })
    }
    StyledComp.displayName = `${displayName ?? 'withStyles'}`
    return StyledComp
  }
}
