import { CubeIcon } from '@radix-ui/react-icons'
import React, { useMemo, useState } from 'react'
import tw from 'twin.macro'
import {
  Button,
  ButtonVariant,
  Card,
  Slider,
  Switch,
  SwitchSize,
  TextInput,
  ToggleGroup,
  ToggleGroupItem,
} from 'ui'

function ComponentSection({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div tw="text-lg text-subdued">{name}</div>
      <div tw="mt-2 flex flex-col gap-4">{children}</div>
    </div>
  )
}

const customButtonStyles = {
  root: tw`
    bg-pastel2 text-pale
    hover:(bg-pastel2-boosted text-pale)
    active:(bg-pastel2-max)
    disabled:(bg-pastel2-muted hover:(bg-pastel2-muted))
  `,
}

/*
function ChartSection() {
  return (
    <ComponentSection name="Chart">
      <div tw="h-[200px]">
      </div>
    </ComponentSection>
  )
}
*/

function SwitchSection() {
  const [checked, setChecked] = useState(false)

  const [size, setSize] = useState<SwitchSize>('base')

  return (
    <ComponentSection name="Switch">
      <div tw="flex gap-4">
        <Switch checked={checked} onChange={setChecked} size={size} />
        <Switch checked={checked} disabled size={size} />
      </div>
      <div tw="flex gap-4">
        <Switch
          checked={checked}
          variant="twoWay"
          onChange={setChecked}
          size={size}
        />
        <Switch checked={checked} variant="twoWay" disabled size={size} />
      </div>
      <div tw="flex gap-4">
        <ToggleGroup
          type="single"
          onValueChange={(size: string) => size && setSize(size as SwitchSize)}
          value={size}
        >
          <ToggleGroupItem value="sm">Small</ToggleGroupItem>
          <ToggleGroupItem value="base">Base</ToggleGroupItem>
          <ToggleGroupItem value="lg">Large</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </ComponentSection>
  )
}

function ButtonSection() {
  const [variant, setVariant] = useState<ButtonVariant>('plain')

  type ContentType = 'textOnly' | 'iconOnly' | 'iconOnLeft' | 'iconOnRight'

  const [content, setContent] = useState<ContentType>('textOnly')

  type BusyState = 'notBusy' | 'busy'
  const [busyState, setBusyState] = useState<BusyState>('notBusy')

  const icon = useMemo(
    () =>
      ['iconOnly', 'iconOnLeft', 'iconOnRight'].includes(content) ? (
        <CubeIcon tw="w-[1.5rem] h-[1.5rem]" />
      ) : undefined,
    [content],
  )

  const text = ['textOnly', 'iconOnLeft', 'iconOnRight'].includes(content)
    ? 'Button'
    : undefined

  const iconOnRight = content === 'iconOnRight'

  const busy = busyState === 'busy'

  return (
    <ComponentSection name="Button">
      <div tw="flex gap-4">
        <Button
          variant={variant}
          icon={icon}
          text={text}
          iconOnRight={iconOnRight}
          busy={busy}
        />
        <Button
          variant={variant}
          icon={icon}
          text={text}
          iconOnRight={iconOnRight}
          disabled
          busy={busy}
        />
      </div>
      <div tw="flex gap-4">
        <Button
          text={text}
          color="action"
          variant={variant}
          icon={icon}
          iconOnRight={iconOnRight}
          busy={busy}
        />
        <Button
          text={text}
          color="action"
          variant={variant}
          disabled
          icon={icon}
          iconOnRight={iconOnRight}
          busy={busy}
        />
      </div>
      <div tw="flex gap-4">
        <Button
          text={text}
          color="danger"
          variant={variant}
          icon={icon}
          iconOnRight={iconOnRight}
          busy={busy}
        />
        <Button
          text={text}
          color="danger"
          variant={variant}
          disabled
          icon={icon}
          iconOnRight={iconOnRight}
          busy={busy}
        />
      </div>
      <div tw="flex gap-4">
        <Button
          text={text}
          color="success"
          variant={variant}
          icon={icon}
          iconOnRight={iconOnRight}
          busy={busy}
        />
        <Button
          text={text}
          color="success"
          variant={variant}
          disabled
          icon={icon}
          iconOnRight={iconOnRight}
          busy={busy}
        />
      </div>
      <div tw="flex gap-4">
        <ToggleGroup
          type="single"
          onValueChange={(variant: string) =>
            variant && setVariant(variant as ButtonVariant)
          }
          value={variant}
        >
          <ToggleGroupItem value="plain">Plain</ToggleGroupItem>
          <ToggleGroupItem value="filled">Filled</ToggleGroupItem>
          <ToggleGroupItem value="outlined">Outlined</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div tw="flex gap-4">
        <ToggleGroup
          type="single"
          onValueChange={(content: string) =>
            content && setContent(content as ContentType)
          }
          value={content}
        >
          <ToggleGroupItem value="textOnly">Text only</ToggleGroupItem>
          <ToggleGroupItem value="iconOnly">Icon only</ToggleGroupItem>
          <ToggleGroupItem value="iconOnLeft">Icon on left</ToggleGroupItem>
          <ToggleGroupItem value="iconOnRight">Icon on right</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div tw="flex gap-4">
        <ToggleGroup
          type="single"
          onValueChange={(busyState: string) =>
            busyState && setBusyState(busyState as BusyState)
          }
          value={busyState}
        >
          <ToggleGroupItem value="notBusy">Not busy</ToggleGroupItem>
          <ToggleGroupItem value="busy">Busy</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </ComponentSection>
  )
}

function SliderSection() {
  const [value, setValue] = useState(10)

  return (
    <ComponentSection name="Slider">
      <div tw="flex gap-4">
        <Slider tw="w-[300px]" value={value} onValueChange={setValue} />
      </div>
      <div tw="flex gap-4">
        <Slider
          tw="w-[300px]"
          value={100 - value}
          onValueChange={setValue}
          disabled
        />
      </div>
    </ComponentSection>
  )
}

function TextInputSection() {
  const [text, setText] = useState('Hello world')

  return (
    <ComponentSection name="Text input">
      <div tw="flex gap-4">
        <TextInput value={text} onChange={setText} tw="flex-none w-[300px]" />
        <TextInput
          disabled
          value={text}
          onChange={setText}
          tw="flex-none w-[300px]"
        />
      </div>
      <div tw="flex gap-4">
        <TextInput
          danger
          value={text}
          onChange={setText}
          tw="flex-none w-[300px]"
        />
        <TextInput
          danger
          disabled
          value={text}
          onChange={setText}
          tw="flex-none w-[300px]"
        />
      </div>
    </ComponentSection>
  )
}

function CardSection() {
  return (
    <ComponentSection name="Card">
      <Card tw="w-[460px] p-4">
        <div tw="text-xl text-subdued">Title</div>
        <div tw="mt-4">
          {`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
          `}
        </div>
      </Card>
    </ComponentSection>
  )
}

function PastelPaletteSection() {
  return (
    <ComponentSection name="Pastel palette">
      <div tw="flex gap-4">
        <div tw="w-6 h-6 bg-pastel1" />
        <div tw="w-6 h-6 bg-pastel2" />
        <div tw="w-6 h-6 bg-pastel3" />
        <div tw="w-6 h-6 bg-pastel4" />
        <div tw="w-6 h-6 bg-pastel5" />
      </div>
    </ComponentSection>
  )
}

export default function Components() {
  return (
    <React.Fragment>
      <div tw="text-2xl text-subdued font-semibold">{'Components'}</div>

      <div tw="flex flex-col gap-8 mt-4">
        <ButtonSection />
        <SwitchSection />
        <SliderSection />
        <TextInputSection />
        <CardSection />
        <PastelPaletteSection />
      </div>
    </React.Fragment>
  )
}
