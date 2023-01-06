import type {
  CreateRouterInner,
  DataTransformerOptions,
  DefaultDataTransformer,
  RootConfig,
} from '@trpc/server'
import type {
  CreateRootConfigTypes,
  RootConfigTypes,
  RuntimeConfig,
} from '@trpc/server/dist/core/internals/config'
import type { PickFirstDefined } from '@trpc/server/dist/core/internals/utils'
import type {
  DefaultErrorShape,
  ErrorFormatter,
  ErrorFormatterShape,
} from '@trpc/server/dist/error/formatter'
import type { AppRouter as PostRouter } from 'post-service-lib'
import type { AppRouter as UserRouter } from 'user-service-lib'

type PartialRootConfigTypes = Partial<RootConfigTypes>

type CreateRootConfigTypesFromPartial<TTypes extends PartialRootConfigTypes> =
  CreateRootConfigTypes<{
    ctx: TTypes['ctx'] extends RootConfigTypes['ctx'] ? TTypes['ctx'] : object
    meta: TTypes['meta'] extends RootConfigTypes['meta']
      ? TTypes['meta']
      : object
    errorShape: TTypes['errorShape']
    transformer: DataTransformerOptions
  }>

type $Generics = CreateRootConfigTypesFromPartial<PartialRootConfigTypes>

type $Runtime = Partial<RuntimeConfig<$Generics>>

type $Formatter = PickFirstDefined<
  $Runtime['errorFormatter'],
  ErrorFormatter<$Context, DefaultErrorShape>
>

type $Context = $Generics['ctx']
type $Meta = $Generics['meta']

type $Transformer = $Runtime['transformer'] extends DataTransformerOptions
  ? $Runtime['transformer']
  : DefaultDataTransformer
type $ErrorShape = ErrorFormatterShape<$Formatter>

type $Config = RootConfig<{
  ctx: $Context
  meta: $Meta
  errorShape: $ErrorShape
  transformer: $Transformer
}>

export type AppRouter = CreateRouterInner<
  $Config,
  {
    user: UserRouter
    post: PostRouter
  }
>
